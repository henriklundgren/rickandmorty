export default from '../containers/products.js';

export async function getStaticProps(_ctx) {
  const {get_all_products} = await import('../lib/get_all_products.js');
  return {
    props: {
      results: await get_all_products(),
    }
  };
}

