const express = require("express")
const app = express()
const PORT = 3000

const rappers = {
    "tupac shakur": {
        birthName: "Lesane Parish Crooks",
        age: 50, // Born in 1971, but he passed away in 1996
        placeOfBirth: "East Harlem, New York City, U.S."
    },
    "biggie smalls": {
        birthName: "Christopher George Latore Wallace",
        age: 50, // Born in 1972, but he passed away in 1997
        placeOfBirth: "Brooklyn, New York City, U.S."
    },
    "eminem": {
        birthName: "Marshall Bruce Mathers III",
        age: 49, // Born in 1972
        placeOfBirth: "St. Joseph, Missouri, U.S."
    },
    "jay-z": {
        birthName: "Shawn Corey Carter",
        age: 52, // Born in 1969
        placeOfBirth: "Brooklyn, New York City, U.S."
    },
    "nas": {
        birthName: "Nasir bin Olu Dara Jones",
        age: 48, // Born in 1973
        placeOfBirth: "Brooklyn, New York City, U.S."
    }
};

// Accessing a rapper's info:
// console.log(rappers["Tupac Shakur"]);

 


//hear hmlt rout


app.get("/", (request, response) => {

    response.sendFile(__dirname + "/index.html")

})



app.get("/api/:rapperName", (request, response) => {

    const getRapper = request.params.rapperName.toLocaleLowerCase()

    if (rappers[getRapper]){

        response.json(rappers[getRapper])
    }else{

        response.json(rappers["nas"])
    }
  

})




app.listen(PORT, () => {

    console.log("server is running")
})

