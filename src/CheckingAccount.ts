import BankAccount, { AccountData } from "./BankAccount";

export default class CheckingAccount extends BankAccount {
  constructor(accountData: AccountData) {
    super(accountData)
  }

  public deposit(value: number): string {
    const limit = 1000
    if (value > limit) return `It is not possible to deposit more than ${limit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    this.balance += value
    return `Successfully deposited ${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} \n${this.getBalance(this.password)}`
  }

  public withdraw(password: string, value: number): string {
    if (this.password === password) {
      if (this.balance >= value) {
        this.balance -= value
        return `Successfully withdrew ${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} \n${this.getBalance(this.password)}`
      }
      return `Insufficient founds`
    }
    return `Invalid password`
  }

}