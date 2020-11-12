const fs = require('fs');
const fetch = require('isomorphic-unfetch');

const addr = `https://rickandmortyapi.com/api/character`;

async function getCharacters(addr) {
  const r = await fetch(addr).then(x => x.json());

  for (let x of r.results) {
    fs.writeFileSync(`./_characters/${x.id}.json`, JSON.stringify(x), 'utf8');
  }

  if (r.info.next) {
    return getCharacters(r.info.next);
  }

  console.log('I am done');
}

getCharacters(addr);
