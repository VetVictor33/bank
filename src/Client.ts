export type ClientData = {
  name: string,
  email: string,
  cpf: string,
  createdAt: Date,
  address: Address[]
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
  private _address: Address[] = []

  constructor(client: Omit<ClientData, 'createdAt'>) {
    this.name = client.name
    this.email = client.email
    this.cpf = client.cpf
    this.createdAt = new Date()
    if (client?.address) this.addAddress(client.address)
  }


  public addAddress(address: Address[] | Address) {
    if (Array.isArray(address)) {
      this._address = this._address.concat(address)
    } else {
      this._address.push(address)
    }
  }

}