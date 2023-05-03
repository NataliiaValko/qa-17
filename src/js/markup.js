export function createMarkupBigCard(products) {
  return products
    .map(
      ({
        title,
        price,
        description,
        brand,
        images,
        rating,
      }) => `<li class="productsItem">
    <h2 class="title">${title}</h2>
    <img src="${images[0]}" alt="${title}" class="image">
    <p class="price">Price: ${price}</p>
    <p class="description">Description: ${description}</p>
    <p class="brand">Brand: ${brand}</p>
    <p class="rating">Rating: ${rating}</p>
  </li>`
    )
    .join('');
}

export function createMarkupLittleCard(products) {
  return products
    .map(
      ({ title, images }) => `<li class="productsItem">
      <h2 class="title">${title}</h2>
      <img src="${images[0]}" alt="${title}" class="image">
    </li>`
    )
    .join('');
}
