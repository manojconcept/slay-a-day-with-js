const userDatas = [
    {
        id: 1,
        name: "John Doe",
        age: 17,
        occupation: "Software Engineer",
        city: "New York"
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 34,
        occupation: "Graphic Designer",
        city: "San Francisco"
    },
    {
        id: 3,
        name: "Mike Johnson",
        age: 45,
        occupation: "Project Manager",
        city: "Chicago"
    },
    {
        id: 4,
        name: "Emily Davis",
        age: 23,
        occupation: "Data Analyst",
        city: "Boston"
    },
    {
        id: 5,
        name: "Robert Brown",
        age: 37,
        occupation: "UX/UI Designer",
        city: "Los Angeles"
    }
];


//user of userDatas => element of array

let locations = ["chennai","madurai","theni","dindigul","salem"];
for (let userData of userDatas) {
        // userData.city = locations[userData.id-1] ;
        userData.city = locations[userDatas.indexOf(userData)];   
}
console.log(userDatas);





