
var value = "Hello wolrd";
console.log(value + " 의 길이는 " + value.length);

// ----------------------------------------------------

var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

for (let index in list) {
    if (index%2 == 1){
        console.log(list[index]);
    }   
}

// var odd = list.filter((value, index) => index % 2 == 1);
// console.log(odd);

// ----------------------------------------------------

// 방법 1

//var obj = {};
// for (let index in list) {
//     if (index<10){
//         obj["index_0"+index] = list[index];
//     }else {
//         obj["index_"+index] = list[index];
//     }
// }
// console.log(obj);

// 방법 2
// var obj = {};
// list.forEach((value, index) => {
//     //var key = "index_" + index.toString().padStart(2, "0");
//     var key = "index_" + (index < 10 ? "0" : "") + index;
//     obj[key] = value;
// console.log(obj);
// });

// 방법 3
var o = list.reduce((m, value, index) => {
    m["index_" + (index < 10 ? "0" : "") + index] = value;
    return m;
}, {});
console.log(o);


