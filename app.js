console.log("Oregon Trail");




function makeTraveler(name){
    return{
        amount:15,
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


function eat(traveler){
    if (traveler.amount> 19){
        traveler.amount = traveler.amount - 20;
    } else {
        traveler.isHealthy = false;
    }
    return traveler;
    }

let traveler1= eat(test);
console.log(traveler1);

