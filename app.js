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

let henrietta = makeTraveler("Henrietta");
let juan = makeTraveler("Juan");

function makeWagon(capacity){
    return{
        passengers: [],
        wagonCapacity: capacity,
    }
}

let BigWagon = makeWagon(100);
console.log(BigWagon);

let SmallWagon = makeWagon(5);


function eat(traveler){
    if (traveler.amount> 19){
        traveler.amount = traveler.amount - 20;
    } else {
        traveler.isHealthy = false;
    }
    return traveler;
    }


console.log(eat(kim));


function join(wagon, traveler){
    let totalPeople = wagon.passengers.length;
    if ((totalPeople+ 1) <= wagon.wagonCapacity){
        wagon.passengers.push(traveler);
    }
return wagon;
    }

console.log(join(BigWagon, kim));
console.log(join(SmallWagon, henrietta));
console.log(join(SmallWagon, juan));

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
console.log(quarantine(SmallWagon));

function food(wagon){
    let totalFood=0;
    for(i = 0; i < wagon.passengers.length; i++){
        totalFood=totalFood + wagon.passengers[i].amount;
    }
    return totalFood;
}
console.log(food(BigWagon));
console.log(food(SmallWagon));

