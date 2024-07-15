 console.log("Start")

 let userName = 'Marium'

 console.log(userName);


 let age = 18;
 if (age < 18){
    console.log("you are not adult")
 }else{
    console.log("You are an adult");
 }
 
 const bestFriends : string[] = ["Hamza", "Ali", "Raza", "Junaid"]
for (let i = 0; i < bestFriends.length; i++){
    console.log(` ${bestFriends[i]} is my best friend`);
}


type Tcar = {
    model: string;
    year: number;
    isUsed: boolean;
    brand: string;
};

const car: Tcar ={
    brand: "Toyota",
    model: "Corolla",
    isUsed: false,
    year: 2012,
};

console.log(car['brand']);
console.log(car.model);
console.log("The End")



