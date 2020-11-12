const fs = require('fs');

export function get_content(filepath) {
  return filepath
    |> fs.readFileSync
    |> JSON.parse
}