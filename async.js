/////////////////////////code 1 /////////////////////////////////////////
// console.log('one')
// setTimeout(function (){
//     console.log('Hello,World!');
// }, 2000); //2 sec * 1000=2000 setTimeout is the function given by typescript to make the function with some time delay.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// function washing(callback:() => void) {
//   console.log("washing started...!");
//   return new Promise<void>((resolve, reject) => {
//   setTimeout(() => {
//     console.log("washing done...!");
//     callback();
//   }, 5000);
// })
// }
// function soaking(callback:() => void) {
//   console.log("soaking started...!");
//   return new Promise<void>((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Soaking Done...!");
//     callback();
//   }, 3000);
// })
// }
// function Drying() {
//   console.log("drying started...!");
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Drying Done...!");
//   }, 2000);
// })
// }
// washing(() => {
//   soaking(() => {
//     Drying();
//   });
// });
// /////////////then catch///////////////////
// washing().then((value)=> {
//   console.log(value);
//   return soaking();
// })
// .then ((value)=> {
//   console.log(value);
//   return Drying();
// })
// .then((value)=> {
//   console.log(value);
// })
// .catch((error) =>{
//   console.log(error);
// });
/////////async await ///////////////////
function runWashingMachine() {
    return __awaiter(this, void 0, void 0, function () {
        var result1, result2, result3, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, 5, 6]);
                    return [4 /*yield*/, washing()];
                case 1:
                    result1 = _a.sent();
                    console.log(result1);
                    return [4 /*yield*/, soaking()];
                case 2:
                    result2 = _a.sent();
                    console.log(result2);
                    return [4 /*yield*/, Drying()];
                case 3:
                    result3 = _a.sent();
                    console.log(result3);
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 6];
                case 5:
                    console.log('I will run anyway');
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
