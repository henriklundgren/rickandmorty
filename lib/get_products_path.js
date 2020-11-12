function map(fn) {
  return (values) => values.map(fn);
}

function resolve(a) {
  const path = require('path');
  return (b) => path.resolve(a, b);
}

export function get_products_path(dirname) {
  const path = require('path');
  const fs = require('fs');
  
  return dirname
    |> resolve(process.cwd())
    |> fs.readdirSync
    |> map(file => path.parse(file).name)
    |> map(id => ({
      params: { id }
    }));
}