let score ="33"
console.log(score)
console.log(typeof(score))
 
let valueInNumber =Number(score)          //use to convert string into number
let valueINstring =String(score)         //use tp conver in string
console.log(valueInNumber)                // if "33abs" ko number me convert krenge to NaN aeyga
console.log(typeof (valueInNumber));      //NaN ka type number hi hai 

let isLoggedIn=1
let boolenLoggedIn=Boolean(isLoggedIn)    //convert to boolean
console.log(boolenLoggedIn);
console.log(typeof boolenLoggedIn)

let str = ""
let boolstr = Boolean(str)

let str2 = "heu"
let boolstr2 = Boolean(str2)
console.log(boolstr)      //false is str is empty
console.log(boolstr2)      //true if not empty   
                          //  " " ye true dega kewki space bhi charcter h 

//************************* OPERATIONS **************************************//


let str3 ="hello"
let str4 =" shzzn"
let strSum=str3 + str4     //strings also can be added 
   


console.log("1" + 2)       //12     "+" ye generally 2 kaam k lia use hota h concatenation and addition and 

console.log(1 + "2")        //12        //if ek bhi operation string hoga to ye concatination choose krega

console.log("1" + 2 + 2)    //isme left to right wala concept k hisab se pahla string hj to next 2 bhi string ban jaega

console.log( 1 + 2 + "2" )  //left to right jaega pahle 2 num h to addition hoga then next tym ek string hoga to concatination follow hoga


