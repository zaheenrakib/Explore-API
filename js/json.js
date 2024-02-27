const user = {id:1,name:'Elon Mask',job:'Actor'};
//JavaScript Objects Notation (JSON)
const stringiFied = JSON.stringify(user);
console.log(user);
console.log(stringiFied);

// { id: 1, name: 'Elon Mask', job: 'Actor' }
// {"id":1,"name":"Elon Mask","job":"Actor"}

const shop = {
    owner : 'ALia',
    address:{
        street:'khocuket',
        city:'Rongpur',
        country:"BD",
    },
    products:['laptop', 'mic','Monitor','Keybord'],
    revenue:45000,
    isOpen:true,
    isNew:false,
};

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);