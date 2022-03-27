export class User {
  constructor(
    public userId: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public street: string,
    public number: string,
    public postalCode: string,
    public city: string,
    public region: string,
    public country: string,
    public isAdmin: boolean,
    private _token: string,
  ) {}

  get userToken() {
    return this._token;
  }
}
