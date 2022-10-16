import axios from 'axios';
import fs from 'fs';

const rawLink = `https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/README.md`;

run();

async function run() {
  const list = rawLink.split('/');
  const rawFolder = './data/raw/';
  const rawFilename = list[list.length - 2] + '.md';
  let rawData;

  if (fs.existsSync(rawFolder + rawFilename)) {
    rawData = await fs.readFileSync(rawFolder + rawFilename, 'utf8');
  } else {
    rawData = await axios.get(rawLink).then((res) => res.data);

    fs.writeFile(rawFolder + rawFilename, rawData, function (err) {
      if (err) return console.log(err);
      console.log('saved raw to', rawFolder + rawFilename);
    });
  }
}
