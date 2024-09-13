const datas = [
    {
        "id": "68",
        "name": "Food",
        "slug": "food",
        "sector": "2",
        "sector_name": "Restaurant",
        "url": "3fd44bb8c8c4ec8666c83e92f6e90b6f.png",
        "order_type": "Vendors",
        "inshop": true,
        "takeaway": true,
        "hyperlocal": true,
        "courier": false
    },
    {
        "id": "71",
        "name": "Pickup Drop",
        "slug": "pickupdrop",
        "sector": "4",
        "sector_name": "Pickup Drop",
        "url": "ae17567a390713152eb322fc4f15c8d9.png",
        "order_type": "Products",
        "inshop": false,
        "takeaway": false,
        "hyperlocal": true,
        "courier": false
    },
    {
        "id": "69",
        "name": "Groceries",
        "slug": "groceries",
        "sector": "1",
        "sector_name": "Groceries",
        "url": "2bd8ff574a746aa2195f1e5aa884be15.png",
        "order_type": "Vendors",
        "inshop": true,
        "takeaway": true,
        "hyperlocal": true,
        "courier": true
    },
    {
        "id": "70",
        "name": "Nearby Stores",
        "slug": "nearby-stores",
        "sector": "3",
        "sector_name": "Ecommerce",
        "url": "ea060b2a62dd087a79cbbadc09c142e1.png",
        "order_type": "Vendors",
        "inshop": true,
        "takeaway": true,
        "hyperlocal": true,
        "courier": true
    },
    {
        "id": "67",
        "name": "Market",
        "slug": "market",
        "sector": "3",
        "sector_name": "Ecommerce",
        "url": "ab72cd83c426dfb078fa9aa21eff38f0.png",
        "order_type": "Products",
        "inshop": true,
        "takeaway": true,
        "hyperlocal": true,
        "courier": true
    }
]


console.log(datas.filter(data=>true && data.inshop === false));


let name = "manoj";
let manoj = {[name]:5};
console.log(manoj);