var returnMoney = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('success!!');
    }, 3000);
});
returnMoney.then(function (value) {
    console.log(value);
    console.log('Thank you for returning money');
});
returnMoney.catch(function (value) {
    console.log(value);
    console.log("sorry , I'm unable to return money");
})
    .finally(function () {
    console.log("I'll not give you money again!");
});
