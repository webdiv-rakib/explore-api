const user = { id: 1, name: 'Gorib Aamir', job: 'Actor' };
// JavaScript object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet voot er goli',
        city: 'ranbir',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
// converting object into string
const shopJson = JSON.stringify(shop);
console.log(shopJson);
// converting string into object
const shopObj = JSON.parse(shopJson);
console.log(shopObj);