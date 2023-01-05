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

class ElementAttributes{
  constructor(attrName, attrValue){
    this.name = atttrName,
    this.value = attrValue
  }
}
class Element{
  constructor(renderHookId,render = true){
    this.hookId = renderHookId;
    if(render){
     this.render();
    }
  }
  render() {}
  createElement(tag,className,attribute){
    const cartEl = document.createElement(tag);
    if(className){
      cartEl.className = className;
    }
    if(attribute && attribute.length>0){
      for (const atr of attribute) {
        cartEl.setAttribute(atr.name, atr.value)
      }
    }
    document.getElementById(this.hookId).append(cartEl);
    return cartEl;
  }
}

class ShoppingCart extends Element {
  
  constructor(renderHookId){
    super(renderHookId,false);
    this.orderNow = () => {
      console.log('ordering');
      console.log(this.items);
    }
    this.render();
  }

  items = [];

  set cartItems(value){
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount(){
    const sum = this.items.reduce((prev,curr)=>prev+curr.price,0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  
 

  render() {
    const cartEl = this.createElement('section','cart');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    const orderNow = cartEl.querySelector('button');
    orderNow.addEventListener('click',this.orderNow)
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }

  
}

class ProductItem extends Element{
  constructor(product, renderHookId) {
    super(renderHookId,false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createElement('li','product-item');
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
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Element{
  #products = [];

  constructor(renderHookId) {
    super(renderHookId,false);
    this.render();
    this.fetchProductList();
  }

  fetchProductList(){
    this.#products = [
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
    this.renderProductList();
  }

  renderProductList(){
    for (const prod of this.#products) {
      const productItem = new ProductItem(prod,'prod-list');
    }
  }

  render() {
    const prodList = this.createElement('ul','product-list');
    prodList.id = 'prod-list';
    if(this.#products && this.#products.length>0){
      this.renderProductList();
    }
  }
}

class Shop {

  constructor(){
    this.render();
  }
  
  render() {
    this.cart = new ShoppingCart('app');
     new ProductList('app');   
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();




