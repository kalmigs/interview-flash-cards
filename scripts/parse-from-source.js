import axios from 'axios';
import fs from 'fs';

const rawUrl = `https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/README.md`;
const matcher = /([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000)+\.+ ###/;

const urlList = rawUrl.split('/');
const folder = './data/';
const rawFolder = './data/raw/';
const filename = urlList[urlList.length - 2];

run();

async function run() {
  let rawData = '';

  if (fs.existsSync(rawFolder + filename + '.md')) {
    rawData = await fs.readFileSync(rawFolder + filename + '.md', 'utf8');
  } else {
    rawData = await axios.get(rawUrl).then((res) => res.data);

    fs.writeFile(rawFolder + filename + '.md', rawData, function (err) {
      if (err) return console.log(err);
      console.log('saved raw to', rawFolder + filename + '.md');
    });
  }

  const parsedData = rawData
    .split(matcher)
    .filter((s) => parseInt(s).toString() === 'NaN')
    .map(parseEntry);
  parsedData.shift();

  fs.writeFile(folder + filename + '.json', JSON.stringify(parsedData, null, 4), (err) => {
    if (err) {
      console.log('Error saving parsed data');
    } else {
      console.log('Saved parsed data');
    }
  });
}

function parseEntry(s, index) {
  const id = index;
  const string = `${id}. ## ` + s.replace('**[⬆ Back to Top](#table-of-contents)**', '').trim();

  return {
    id: index,
    question: string.substring(0, string.indexOf('\n\n')),
    answer: string.substring(string.indexOf('\n\n')),
  };
}
