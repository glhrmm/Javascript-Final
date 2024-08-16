const product1 = { id: 1, name: 'Banana', price: 5 };
const product2 = { id: 2, name: 'Maçã', price: 10 };
const product3 = { id: 3, name: 'Pêra', price: 15 };

class Frutas {
    constructor() {
      this.products = [];
      this.cart = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    setProductPrice(productId, price) {
      const product = this.products.find(p => p.id === productId)
      if (product) {
        product.price = price
      }
    }
  
    getAllProducts() {
      return this.products;
    }
  
    getAllProductsNames() {
      return this.products.map(product => product.name).join(';');
    }
  
    getProductById(productId) {
      return this.product.find(product = product.name === productName)
    }
  
    getProductByName(name) {
      return this.products.find(product => product.name === productName)
    }
  
    getProductsByPrice(initialPrice, finalPrice) {
      return this.products.filter(product => product.price >= initialPrice && product.price <= finalPrice);
    }
  
    addProductToCart(product) {
      this.cart.push(product);
    }
  
    getCart() {
      return this.cart;
    }
  
    getCartTotalPrice() {
      return this.cart.reduce((acc, product) => acc + product.price, 0);
    }
}; 


const frutas = new Frutas();

frutas.addProduct(product1)
frutas.addProduct(product2)
frutas.addProduct(product3)

console.log(frutas.getAllProducts())

frutas.setProductPrice(1, 20)

console.log(frutas.getProductById(2))

console.log(frutas);
