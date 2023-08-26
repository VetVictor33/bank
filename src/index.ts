import CheckingAccount from "./CheckingAccount";
import Client from "./Client";

const irineu = new Client({
  name: "Irineu", address: [{ city: "Irineu City", neighborhood: "Irineu neighbor", street: "Irineu street", zipCode: "123" }],
  cpf: '12345678910', email: 'iri@neu.com'
})

console.log(irineu)

irineu.addAddress({ city: "Irineu City", neighborhood: "Irineu neighbor", street: "Irineu street", zipCode: "123" })
console.log(irineu)

console.clear()

const irineuAccount = new CheckingAccount({ agency: 1, client: irineu, number: 0, password: 'senhasegura' })

console.log(irineuAccount.getBalance('senhasegura'))
console.log(irineuAccount.deposit(999.99))
console.log(irineuAccount.withdraw('senhasegura', 0.99))
console.log(irineuAccount.deposit(15_000.98))
console.log(irineuAccount.deposit(1_000))