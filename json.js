const shop = {
    owner:'Maruf',
    Address:{
        city:'satkhira',
        area:'thanaghata',
        phone: 45545, 
    },
    product:['phone','laptop','mouse','keyboard'],
    revenew:5020,
    isOpen:true,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);