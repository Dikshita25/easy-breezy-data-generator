const kindList = require('./kindsList.json');

// this function needs to be run in the browser to get kinds list 
const getAllKinds = () => {
  const result = [...document.getElementsByClassName('-level-2')]
  .map((el) => el.getElementsByTagName('a')[0])
  .filter((el) => {
    return !el.className.includes('usage');
  })
  .map((el) => ({name: el.innerText, link: el.href}))

  console.log(JSON.stringify(result));
};


const generateList = () => {
  return kindList.reduce((soFar, kind, index) => {
    soFar += `\n${index + 1}. [${kind.name}](${kind.link})`;
    return soFar;
  }, '');
};

console.log(generateList());

