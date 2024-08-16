class Product {
    constructor(id) {
      this.id = id;
      this.cart = [];
    }
  
    async fetch() {
      const response = await fetch(`https://fakestoreapi.com/products/12`);
      return await response.json();
    }
  
    createHTML(productData) {
      const container = document.querySelector('.container');
      container.innerHTML = `
        <div class="image"><img src="${productData.image}" alt="${productData.title}"></div>
        <div class="info">
          <span class="id">Product id: ${productData.id}</span>
          <h3 class="title">${productData.title}</h3>
          <p class="category">${productData.category}</p>
          <p class="price">Price: $${productData.price}</p>
          <p class="description">${productData.description}</p>
          <p class="quantity">Quantity</p>
          <input type="number" class="quantity-input" value="1" min="1">
          <button class="btn-add" data-product-id="${productData.id}">Add To Cart</button>
        </div>`;

      // Add event listener to the button
      container.querySelector('.btn-add').addEventListener('click', () => {
        const quantity = parseInt(container.querySelector('.quantity-input').value, 10);
        this.addToCart(productData, quantity);
      });
    }
  
    async loadRelatedProducts() {
      const response = await fetch(`https://fakestoreapi.com/products/category/electronics`);
      const relatedProducts = await response.json();
      const relatedContainer = document.querySelector('.related-products');
      relatedProducts.slice(0, 3).forEach(product => {
        const relatedProductCard = this.createRelatedHTML(product);
        relatedContainer.appendChild(relatedProductCard);
      });
    }
  
    createRelatedHTML(product) {
      const relatedProductCard = document.createElement('div');
      relatedProductCard.className = 'related-product'; // Changed from 'related-container'
      relatedProductCard.innerHTML = `
        <div class="related-image"><img src="${product.image}" alt="${product.title}"></div>
        <div class="related-info">
          <h3 class="related-title">${product.title}</h3>
          <p class="related-price">$${product.price}</p>
          <input type="number" class="related-quantity-input" value="1" min="1">
          <button class="btn-add-related" data-product-id="${product.id}">Add To Cart</button>
        </div>`;
      
      // Add event listener to the button
      relatedProductCard.querySelector('.btn-add-related').addEventListener('click', () => {
        const quantity = parseInt(relatedProductCard.querySelector('.related-quantity-input').value, 10);
        this.addToCart(product, quantity);
      });

      return relatedProductCard;
    }
  
    addToCart(product, quantity) {
      console.log(`Added ${quantity} of ${product.title} to cart.`);
      // Here you can also update the cart with multiple quantities
      for (let i = 0; i < quantity; i++) {
        this.cart.push(product);
      }
    }
}
  
const productId = new URLSearchParams(window.location.search).get('id');
const product = new Product(productId);

product.fetch().then(productData => {
    product.createHTML(productData);
    product.loadRelatedProducts();
});
  
const footerDate = new Date();
const footerText = document.querySelector('.copywrite');
footerText.textContent = `Copyright ${footerDate.getFullYear()}`;
