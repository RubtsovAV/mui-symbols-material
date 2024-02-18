const singleDigitNumbers = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];
const twoDigitNumbers1 = [
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];

const snakeToCamel = str => {
  const result = str.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export default function myDestRewriter(svgPathObj) {
  let fileName = svgPathObj.base;
  const theme = svgPathObj.dir.split('/')[1];
  
  fileName = snakeToCamel(fileName)
    .replace(/\.svg$/, '')
    .replace(/Fill$/, 'Filled');

  fileName += theme.charAt(0).toUpperCase() + theme.substring(1);
  fileName += '.js';
  
  if (fileName.startsWith('3dRotation')) {
    return `ThreeD${fileName.slice(2)}`;
  }
  if (fileName.startsWith('2d')) {
    return `TwoD${fileName.slice(2)}`;
  }
  if (fileName.startsWith('6Ft')) {
    return `SixFt${fileName.slice(3)}`;
  }

  if (fileName.startsWith('3p')) {
    return `ThreeP${fileName.slice(2)}`;
  }

  if (fileName.startsWith('30fps')) {
    return `ThirtyFps${fileName.slice(5)}`;
  }
  if (fileName.startsWith('60fps')) {
    return `SixtyFps${fileName.slice(5)}`;
  }
  if (fileName.startsWith('360')) {
    return `ThreeSixty${fileName.slice(3)}`;
  }

  if (/^\dk/.test(fileName)) {
    return `${singleDigitNumbers[fileName[0]]}K${fileName.slice(2)}`;
  }

  if (/^\dmp/.test(fileName)) {
    return `${singleDigitNumbers[fileName[0]]}M${fileName.slice(2)}`;
  }
  if (/^1\dmp/.test(fileName)) {
    return `${twoDigitNumbers1[fileName[1]]}M${fileName.slice(3)}`;
  }
  if (/^2\dmp/.test(fileName)) {
    return `Twenty${singleDigitNumbers[fileName[1]]}M${fileName.slice(3)}`;
  }
  if (/^5\dmp/.test(fileName)) {
    return `Fifty${singleDigitNumbers[fileName[1]]}M${fileName.slice(3)}`;
  }

  if (fileName.startsWith('1x')) {
    return `TimesOne${fileName.slice(2)}`;
  }

  if (fileName.startsWith('3g')) {
    return `ThreeG${fileName.slice(2)}`;
  }
  if (fileName.startsWith('4g')) {
    return `FourG${fileName.slice(2)}`;
  }
  if (fileName.startsWith('5g')) {
    return `FiveG${fileName.slice(2)}`;
  }

  // All other names starting with a number between 10 and 19
  if (/^1\d/.test(fileName)) {
    return `${twoDigitNumbers1[fileName[1]]}${fileName.slice(2)}`;
  }

  return fileName;
}
