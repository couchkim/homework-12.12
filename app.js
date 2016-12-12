console.log("Oregon Trail");




function makeTraveler(name){
    return{
        amount:15,
        firstName: name,
        isHealthy: true,
    }

}

let kim = makeTraveler("Kim");
console.log(kim);


function makeWagon(capacity){
    return{
        passengers: [],
        wagonCapacity: capacity,
    }
}

let BigWagon = makeWagon(100);
console.log(BigWagon);


function eat(traveler){
    if (traveler.amount> 19){
        traveler.amount = traveler.amount - 20;
    } else {
        traveler.isHealthy = false;
    }
    return traveler;
    }

let traveler1= eat(kim);
console.log(traveler1);


function join(wagon, traveler){
    let totalPeople = 0;
    if ((totalPeople+ 1) < wagon.wagonCapacity){
        wagon.passengers = totalPeople + 1;
        wagon.passengers.push;
    }
return wagon;
    }

console.log(join(BigWagon, "Kim"));