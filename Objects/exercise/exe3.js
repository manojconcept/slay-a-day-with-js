let section = [
    {
        "id": "68",
        "name": "Food",
        "slug": "food",
        "sector_id": "2",
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
        "sector_id": "4",
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
        "sector_id": "1",
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
        "sector_id": "3",
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
        "sector_id": "3",
        "url": "ab72cd83c426dfb078fa9aa21eff38f0.png",
        "order_type": "Products",
        "inshop": true,
        "takeaway": true,
        "hyperlocal": true,
        "courier": true
    }
];

let sector = [
    {
        "id": "2",
        "sector_name": "Restaurant"
    },
    {
        "id": "4",
        "sector_name": "Pickup Drop"
    },
    {
        "id": "1",
        "sector_name": "Groceries"
    },
    {
        "id": "3",
        "sector_name": "Ecommerce"
    }
];

//Add to remove properite 
let properties = ["sector_id", "inshop", "takeaway", "hyperlocal", "courier","url"]

const mergedSections = section.map(elesec => {
    const sectorMatch = sector.find(sect => sect.id === elesec.sector_id);

    let result = {
        ...elesec,
        delivery_type: {
            inshop: elesec.inshop,
            takeaway: elesec.takeaway,
            hyperlocal: elesec.hyperlocal,
            courier: elesec.courier,

        },
        sector: elesec.sector_id,
        sector_name: sectorMatch ? sectorMatch.sector_name : null,

    };

    properties.forEach(element => {
        delete result[element];
    });

    return result;
});

console.log(mergedSections);
