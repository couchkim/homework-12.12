console.log("Oregon Trail");

// let traveler={
//     amount:30,
//     firstName:"",
//     isHealthy:true,
// }

function makeTraveler(name){
    return{
        amount:30,
        firstName: name,
        isHealthy: true,
    }

}

let test= makeTraveler("Kim");
console.log(test);


function makeWagon(capacity){
    return{
        passengers: [],
        wagonCapacity: capacity,
    }
}

let test2 = makeWagon(100);
console.log(test2);