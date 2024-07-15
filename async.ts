                   /////////////////////////code 1 /////////////////////////////////////////
// console.log('one')
// setTimeout(function (){
//     console.log('Hello,World!');
// }, 2000); //2 sec * 1000=2000 setTimeout is the function given by typescript to make the function with some time delay.
                                 
// console.log('Two')
                     /////////////////////////code 2 /////////////////////////////////////////
// console.log('one')
// function greet(){
//     console.log('Hello,World!');
// }
// setTimeout(greet,2000);
// console.log('Two')
                  /////////////////////////code 3 /////////////////////////////////////////
// function washing(callback) {
//   console.log("washing started...!");
//   setTimeout(() => {
//     console.log("washing done...!");
//     callback();
//   }, 5000);
// }

// function soaking(callback) {
//   console.log("soaking started...!");
//   setTimeout(() => {
//     console.log("Soaking Done...!");
//     callback();
//   }, 3000);
// }

// function Drying() {
//   console.log("drying started...!");
//   setTimeout(() => {
//     console.log("Drying Done...!");
//   }, 2000);
// }
// washing(() => {
//   soaking(() => {
//     Drying();
//   });
// });

                  ////////////////////////code 4 /////////////////////////////////////////

// function washing(callback) {
//   console.log("washing started...!");
//   setTimeout(() => {
//     console.log("washing done...!");
//     callback();
//   }, 5000);
// }

// function soaking(callback) {
//   console.log("soaking started...!");
//   setTimeout(() => {
//     console.log("Soaking Done...!");
//     callback();
//   }, 3000);
// }

// function Drying() {
//   console.log("drying started...!");
//   setTimeout(() => {
//     console.log("Drying Done...!");
//   }, 2000);
// }
// console.log("Folding laundry")
// washing(() => {
//   soaking(() => {
//     Drying();
//   });
// });

// console.log('I am making briyani')

          //////////////////////code 5 promises///////////////////////////

function washing(callback:() => void) {
  console.log("washing started...!");
  return new Promise<void>((resolve, reject) => {
  
  setTimeout(() => {
    console.log("washing done...!");
    callback();
  }, 5000);
})
}

function soaking(callback:() => void) {
  console.log("soaking started...!");
  return new Promise<void>((resolve, reject) => {
  setTimeout(() => {
    console.log("Soaking Done...!");
    callback();
  }, 3000);
})
}

function Drying() {
  console.log("drying started...!");
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Drying Done...!");
  }, 2000);
})
}
washing(() => {
  soaking(() => {
    Drying();
  });
});
// /////////////then catch///////////////////
washing().then((value)=> {
  console.log(value);
  return soaking();
})
.then ((value)=> {
  console.log(value);
  return Drying();
})
.then((value)=> {
  console.log(value);
})
.catch((error) =>{
  console.log(error);
});


/////////async await ///////////////////
async function  runWashingMachine () {
try {
  const result1 = await washing();
  console.log(result1);
  const result2 = await soaking();
  console.log(result2)
  const result3 = await Drying();
  console.log(result3);
}
catch (error){
  console.log(error);
}
finally{
  console.log('I will run anyway');
}
}
