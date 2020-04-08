
var value = "Hello wolrd";
console.log(value + " 의 길이는 " + value.length);

// ----------------------------------------------------

var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

for (let index in list) {
    if (index%2 == 1){
        console.log(list[index]);
    }   
}

// ----------------------------------------------------

var obj = {};

for (let index in list) {
    if (index<10){
        obj["index_0"+index] = list[index];
    }else {
        obj["index_"+index] = list[index];
    }
}
console.log(obj);
