export class Product {

  constructor(
    public _productId: string,
    public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
  ) {
    this._productId = _productId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
