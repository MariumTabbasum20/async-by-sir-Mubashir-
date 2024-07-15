const returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success!!');
    },3000);
});

returnMoney.then((value) =>  {
    console.log(value);
    console.log('Thank you for returning money');
})

returnMoney.catch((value)=> {
    console.log(value);
    console.log("sorry , I'm unable to return money");
})

.finally(()=> {
    console.log("I'll not give you money again!");
});