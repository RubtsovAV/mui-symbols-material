/**
 * This script updates the version number in the root package.json and all package.json files within specified workspaces.
 * It optionally creates a Git tag for the new version and pushes it to the remote repository based on command line flags.
 *
 * @example
 * // Updates version, creates a tag, and pushes changes
 * node scripts/bumpVersion.js 1.0.0
 *
 * @example
 * // Updates version without creating a tag or pushing changes
 * node scripts/bumpVersion.js 1.0.0 --no-tag --no-push
 *
 * @param {string} newVersion - The new version number to set. This should be the first command line argument.
 * @param {boolean} [shouldTag=true] - Flag indicating whether to create a git tag. Set by including `--no-tag` in the command line arguments.
 * @param {boolean} [shouldPush=true] - Flag indicating whether to push changes to the remote repository. Set by including `--no-push` in the command line arguments.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Command line arguments processing
const newVersion = process.argv[2];
const shouldTag = !process.argv.includes('--no-tag');
const shouldPush = !process.argv.includes('--no-push');
const rootDir = path.join(__dirname, '..');

if (!newVersion) {
  console.error('Please provide a new version number as the first argument.');
  process.exit(1);
}

/**
 * Updates the version in a specified package.json file.
 *
 * @param {string} filePath - The path to the package.json file to update.
 * @param {string} newVersion - The new version number to set in the package.json.
 */
function updateVersion(filePath, newVersion) {
  const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  packageJson.version = newVersion;
  fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Updated version to ${newVersion} in ${filePath}`);
}

// Update the root package.json version
const rootPackageJsonPath = path.join(rootDir, 'package.json');
updateVersion(rootPackageJsonPath, newVersion);

// Process each workspace package.json
const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonPath, 'utf8'));

if (rootPackageJson.workspaces) {
  rootPackageJson.workspaces.forEach(workspaceGlob => {
    const workspaceDir = path.join(rootDir, workspaceGlob.replace('/*', ''));
    const workspacePackages = fs.readdirSync(workspaceDir);

    workspacePackages.forEach(packageName => {
      const packageJsonPath = path.join(workspaceDir, packageName, 'package.json');
      if (fs.existsSync(packageJsonPath) && !packageJsonPath.includes('@mui/internal-waterfall')) {
        updateVersion(packageJsonPath, newVersion);
      }
    });
  });
} else {
  console.error('No workspaces found in package.json');
}

// Commit, tag, and push changes based on flags
try {
  console.log('Committing changes...');
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "chore: bump version to ${newVersion}"`, { stdio: 'inherit' });

  if (shouldTag) {
    console.log('Creating git tag...');
    execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
  }

  if (shouldPush) {
    console.log('Pushing changes and tags to remote...');
    execSync('git push --follow-tags', { stdio: 'inherit' });
  }

  console.log(`Successfully bumped version to ${newVersion}.`);
} catch (error) {
  console.error('Failed to commit changes or push to remote:', error);
  process.exit(1);
}
