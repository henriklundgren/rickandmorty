export default from '../../containers/product.js';

export async function getStaticProps(ctx) {
  const {get_content} = await import('../../lib/get_content');
  const path = require('path');
  const characterFolder = path.resolve(process.cwd(), '_characters');
  const result = get_content(path.resolve(characterFolder, `${ctx.params.id}.json`));

  return {
    props: {
      result,
    },
  };
}
 
export async function getStaticPaths() {
  const {get_products_path} = await import('../../lib/get_products_path.js');
  const paths = get_products_path('_characters');
  return {
    paths,
    fallback: false,
  };
}

