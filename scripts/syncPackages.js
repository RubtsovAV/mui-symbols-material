const fs = require('fs').promises;
const path = require('path');

// List of files to copy, add more filenames to this array as needed
const filesToCopy = ['material-design-symbols.mjs'];

// Function to copy a single file
async function copyFile(sourceFilePath, targetDir) {
    try {
        // Ensure the target directory exists, create it if it doesn't
        await fs.mkdir(targetDir, { recursive: true });

        // Define the target file path
        const targetFilePath = path.join(targetDir, path.basename(sourceFilePath));

        // Copy the source file to the target file path
        await fs.copyFile(sourceFilePath, targetFilePath);
        console.log(`File copied to ${targetFilePath}`);
    } catch (err) {
        console.error(`Failed to copy file to ${targetDir}: ${err}`);
    }
}

// Main function to execute the copying process
async function main() {
    const sourceDir = path.join('packages', '100', 'renameFilters');
    for (let i = 200; i <= 700; i+=100) {
        const targetDir = path.join('packages', i.toString(), 'renameFilters');
        for (const fileName of filesToCopy) {
            const sourceFilePath = path.join(sourceDir, fileName);
            await copyFile(sourceFilePath, targetDir);
        }
    }
}

// Run the main function
main();
