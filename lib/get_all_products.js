export async function get_all_products() {
  const path = (await import('path')).default;
  const fs = (await import('fs')).promises;
  // get all
  const dirpath = path.resolve(process.cwd(), './_characters');
  const files = await fs.readdir(dirpath);
  // console.log('dir', dirpath, files);
  const cache = [];
  for (let file of files) {
    const filepath = path.resolve(dirpath, file);
    const result = await fs.readFile(filepath, 'utf8');
    //console.log('read the files', result);
    cache.push(JSON.parse(result));
  }

  return cache.sort((a, b) => a.id - b.id);
}
