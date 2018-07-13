

let typeCar = ["Range Rover Sport HSE", "Tesla ModelX", "Honda Civic","Smart Car",process.argv[4],"Minivan","Razor Scooter"];


// RANDOM FUNCTION

function random(x){
    let randNumber = Math.floor(Math.random()*x);
    return randNumber;
}


// GET HOME FUNCTION

let typeHome = ["Mansion","Apartment","Shack","House",process.argv[2],"Cardboard Box"];
function getHome(){
    if(process.argv[2]){
    return typeHome[random(typeHome.length)];
    }else{
        throw("Input a type of home")
    }
}


//GET CHILDREN COUNT FUNCTION

function getChildrenCount(){
    let randCount;
    if(random(2) < 1){
       randCount = random(101);
    }else if(process.argv[3]){
       randCount = process.argv[3];
    }else{
        throw("Input amount of children")
    }
    return randCount;
}


//GET CAR FUNCTION

function getCar(){
    if(process.argv[4]){
        let car = typeCar[random(typeCar.length)];
        return car;
    }else{
        throw("Input a type of car")
    }
}


//GET LUCKY FUNCTION

let FN = [" drop at tilted"," drop at salty"," drop at dusty"," drop at retail",process.argv[5]," drop at pleasant"," drop at loot lake", " drop at flush factory", " drop at shifty", "drop at paradise"];
function whereWeDropping(){
    if(process.argv[5]){
    return FN[random(FN.length)];
    }else{
        throw("Input a location")
    }
}



//MASH FUNCTION

function mash(){
    let string = "You will live in a " + getHome() +", and you will have " + getChildrenCount() + " kids, and you'll drive a " + getCar() + " and you'll" + whereWeDropping();
    return string;
}

if (process.argv[2] && process.argv[3] && process.argv[4] && process.argv[5]){
    console.log(mash());
}else{
    console.log("Error!Error!Error!\nPlease enter user input");
}
