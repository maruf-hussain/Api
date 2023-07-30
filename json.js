const shop = {
    owner:'Maruf',
    Address:{
        city:'satkhira',
        area:'thanaghata',
        phone: 45545, 
    },
    product:['phone','laptop','mouse','keyboard'],
    revenew:545,
    isOpen:true,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
// console.log(shopJson);
const jonPars = JSON.parse(shopJson);
console.log(jonPars);