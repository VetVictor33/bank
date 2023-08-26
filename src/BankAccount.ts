import Client from "./Client";

export type AccountData = {
  number: number,
  agency: number,
  password: string,
  client: Client
}

export default abstract class BankAccount {
  protected balance: number
  protected number: number
  protected agency: number
  protected password: string
  protected client: Client

  constructor(accountData: AccountData) {
    this.balance = 0
    this.number = accountData.number
    this.agency = accountData.agency
    this.password = accountData.password
    this.client = accountData.client
    // Object.assign(this, accountData)
  }


  public getBalance(password: string): string {
    if (this.password === password) {
      return `Balance: ${this.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
    return `Invalid password`
  }

  public abstract deposit(value: number): void

  public abstract withdraw(password: string, value: number): string

}