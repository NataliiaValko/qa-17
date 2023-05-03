const BASE_URL = 'https://dummyjson.com';
const filters = 'title,price,description,brand,images,rating';
export async function fetchProductsByQuery(query) {
  try {
    const result = await fetch(
      `${BASE_URL}/products/search?q=${query}&select=${filters}`
    );
    if (!result.ok) {
      throw new Error(error);
    }
    return result.json();
  } catch (error) {
    console.log(error.message);
  }
}
