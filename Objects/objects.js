//objects are created 3 difference ways

let userData = {name:"manoj",age:1,dob:"2-4-2001","first-one":"bass","first":"jojo", "first name":"kong"}; //key value pair
userData.place = "mars"; //add
userData.id = "1"; //add
userData.name_ui =1234; //add and dot notation
userData["name-ui"] = 1234; //add and bracket notation;
userData.name = "corgi" //Edit

console.log(userData.name); //accessing dot notation.
console.log(userData["first-one"]); // accessing bracket notation.
console.log(userData.first);
console.log(userData["first name"]);
console.log(userData);

let storeData = new Object();
storeData.proName = "mac";
storeData.brand = "apple";
//{proName:"mac",brand:"apple"};
console.log(storeData);





