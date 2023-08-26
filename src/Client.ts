export type ClientData = {
  name: string,
  email: string,
  cpf: string,
  createdAt: Date,
  address: Address | undefined
}

type Address = {
  zipCode: string,
  street: string,
  neighborhood: string,
  city: string
}

export default class Client {
  private name: string
  private email: string
  private cpf: string
  private createdAt: Date
  private _address: Address | undefined

  constructor(client: Omit<ClientData, 'createdAt'>) {
    this.name = client.name
    this.email = client.email
    this.cpf = client.cpf
    this.createdAt = new Date()
    this._address = client?.address
  }


  public set address(address: Address) {
    this._address = address;
  }

}