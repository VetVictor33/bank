import Client from "./Client";

const irineu = new Client({
  name: "Irineu", address: [{ city: "Irineu City", neighborhood: "Irineu neighbor", street: "Irineu street", zipCode: "123" }],
  cpf: '12345678910', email: 'iri@neu.com'
})

console.log(irineu)

irineu.addAddress({ city: "Irineu City", neighborhood: "Irineu neighbor", street: "Irineu street", zipCode: "123" })
console.log(irineu)