const arrayOfObjects = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
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

  let locations = ["chennai","madurai","theni","dindigul"];
  for (let i in arrayOfObjects){
        arrayOfObjects[i].city = locations[i] ?? arrayOfObjects[i].city;
  }

  console.log(arrayOfObjects);