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
    let totalPeople = wagon.passengers.length;
    if ((totalPeople+ 1) <= wagon.wagonCapacity){
        wagon.passengers.push(traveler);
    }
return wagon;
    }

console.log(join(BigWagon, kim));


function quarantine(wagon){
    for(i = 0; i < wagon.passengers.length; i++){
        if (wagon.passengers[i].isHealthy === false){
            return true;
        }
        
    }
    return false;
}
console.log(BigWagon);
console.log(quarantine(BigWagon));

function food(wagon){
    let totalFood=0;
    for(i = 0; i < wagon.passengers.length; i++){
        totalFood=totalFood + wagon.passengers[i].amount;
    }
    return totalFood;
}
console.log(food(BigWagon));

