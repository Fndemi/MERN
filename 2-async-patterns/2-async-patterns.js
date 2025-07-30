const { readFile, writeFile } = require('fs').promises


const start = async (req, res) => {
  const first = await readFile('./content/first.txt', 'utf8')
  const second = await readFile('./content/second.txt', 'utf8')
  writeFile('./content/result-mind-grenade.txt', `THIS IS COOL ${first} ${second}`, { flag: 'a' })
}


start()