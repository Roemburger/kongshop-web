export class Order {
  constructor(
    public orderId: string,
    public productId: string,
    public amount: number,
  ) {}
}
