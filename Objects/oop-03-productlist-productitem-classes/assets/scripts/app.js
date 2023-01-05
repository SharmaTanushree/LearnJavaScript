class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

    addItemToCart(){
       App.addProductToCart(this.product)
    }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
     const addCartButton = prodEl.querySelector('button');
     addCartButton.addEventListener('click',this.addItemToCart.bind(this))
    return prodEl;
  }
}

class Cart{
cart = [];

addProduct(product){
  this.cart.push(product);
  this.totalOutput.innerHTML = `  <h2> Total cost \$ ${1}</h2>`
}
render(){
  const cartEl = document.createElement('section');
  cartEl.innerHTML = `
  <h2> Total cost \$ ${0}</h2>
  <button>Buy Now</button>
  `;
  cartEl.className = 'cart';
  this.totalOutput = cartEl.querySelector('h2')
  return cartEl;
}


}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
     return prodList;
  }
}



class Shop{
  render(){
    const renderHook = document.getElementById('app');
    const prodList = new ProductList();
    const prodEl = prodList.render();
    this.cart =  new Cart();
    const cartEL = this.cart.render();
    renderHook.append(cartEL);
    renderHook.append(prodEl);
  }

}

class App{
  static cart;
  static init(){
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product){
     this.cart.addProduct(product);
  }
}

App.init();

