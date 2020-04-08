// console.log("hello world");

// var value = 1;

// console.log("value = ", value);

// value = value + 2;

// console.log("value = ", value);

// value += 4;

// console.log("value = ", value);

// value = 1.1;

// console.log("value = ", value);

// value += 2;

// console.log("value = ", value);

// value = parseInt("10"); // 문자열을 int 로 

// console.log("value = ", value + 3);

// value = parseFloat("12.3"); // 문자열을 float 로 

// console.log("value = ", value);

// value = parseInt("10.1")
// console.log("value = ", value);

// value = "str";
// console.log("value = ", value);

// value = "hello" + " " + "world";
// console.log("value = ", value);

// value = "!";
// value = 'hello' + " " + `world ${value}`; // 여기서 world 를 감싸고 있는 기호(키보드에서 숫자1 옆에 있는 것)은 여기서 사용한 것처럼 주로 formatting 할 때 사용
// console.log("value = ", value);

// value = 1 + "!"; // 1은 문자열로 바뀜
// console.log("value = ", value);

// value = true;
// console.log("value = ", value);

// value = false;
// console.log("value = ", value);

// value = 10 > 1;
// console.log("value = ", value);

// value = 10  < 1;
// console.log("value = ", value);

// ----------------------------------------------------

// "use strict";

// const value = 1; // const : 한번 선언 되면 바꿀 수 없음 
// console.log("value = ", value);

// value = 2;
// console.log("value = ", value);

// function foo() {

//     console.log("hello function");
//     if (true) {
//         //var value = 1;  // 함수 안 어디든 var 를 이용하여 변수를 선언해놓으면 함수 안 어디든 사용가능한 변수가 됨 변수가 if문 안에서 선언돼있더라도!
//         let value = 1; // let은 이 scope 안에서만 쓸 변수다 지정하는 것
//         console.log("if value = ", value);
//         const c = 2; //const 도 scope 변수
//     }
//     console.log("c = ", c);
// }

// foo();

// ----------------------------------------------------

// console.log("hello world");

// if (1< 10) {
//     console.log("1<10 == true");
//     console.log("1<10 == true2");
// } else if (2 <= 10) {
//     console.log("2<=10 == true");
// } else if (3 <= 10) {
//     console.log("3<=10 == true");
// } else {
//     console.log("else");
// }

// console.log("end");

// function test() {
//     console.log("1");
// }

// ----------------------------------------------------

// var list = [ 1, "1", true, test, {}, [1]];
// console.log(list);
// console.log(list[2]);

// list.push("p1"); // add
// console.log(list);
// var p1=list.pop(); // get and remove last one
// console.log(p1, list);

// list.unshift("h1");
// console.log(list);
// var h1 = list.shift();
// console.log(h1, list);

// ----------------------------------------------------

// var list = [1, 2, 3, 4, 5];
// console.log(list);
// list = list.map( function (item) { // map 은 콜백 함수
//     return item + 1;
// })
// console.log(list);

// // list = list.map(item => { // 위에 것을 간결하게 화살표 함수로 쓰면 
// //     return item + 1;
// // })
// // console.log(list);

// list = list.map(item => item + 1); // 이와 같이 더 간결하게 쓸 수 있음 
// console.log(list);

// var sum = list.reduce((previousValue, currentValue) => previousValue + currentValue, 10); // reduce 활용해서 배열의 값들을 하나의 값으로 치환할 수 있음 
// console.log(sum);

// list = list.filter(item => item < 5);
// console.log(list);

// console.log(list.map(item => item + 1)
//                 .filter(item => item < 4)
//                 .reduce((p, c) => p + c));

// ----------------------------------------------------

// var value = 5;
// switch (list.indexOf(value)){
//     case 1:
//     case 2:
//         console.log("index = 1, 2");
//         break;
//     case 3:
//         console.log("index = 1, 2");
//         break;
//     default:
//         console.log("index = default");
//         break;

// }

// ----------------------------------------------------

// var list = [1, 2, 3, 4, 5];

// while (list.length > 0) {
//     console.log(list.shift());
// }
// console.log(list);

// for (let i = list.length - 1; i >= 0; i--) {
//     console.log("for [i] : ", list[i]);
// }
// ----------------------------------------------------

// foo(); // 선언적 함수는 함수 선언 앞에서 사용해도 실행됨

// function foo() {
//     console.log("hell world");
// }

// var bar = function() {
//     console.log("hell world2");
// }

// var bar = () => {
//     console.log("hell world2");     // 간단한 이벤트 함수는 화살표 함수로 바꿔줌 (더 짧아지기때문에)
// }

// bar(); // 익명 함수는 함수 선언 뒤에서 사용해야함

// ----------------------------------------------------

// function foo(a, b, c=0) {
//     return a + b + c;
// }

// console.log(foo(1,2));

// ----------------------------------------------------

// function sum(list, cb) {
//     return list.reduce((p, c) => {
//         if (typeof c != "number") {
//             c = cb(c);
//         }
//         return p + c;
//     });
// }

// var list = [1,2,3,4,5,"10","20",[], {}];

// console.log(sum(list, (c) => {
//     if (typeof c == "string") return parseInt(c);
//     return 0;
// }))

// ----------------------------------------------------

// var o = {
//     key : "value1",
//     title : "hello",
//     value : 1
// }

// console.log(o);
// console.log(o["key"]);
// console.log(o.key);

// o.log = "log1";
// console.log(o);

// o.log = null;
// console.log(o);

// for (let key in o) {
//     console.log(key, o[key]);
// }

// ----------------------------------------------------

// var list = [1,2,3,4,5,"10","20",[], {}];

// for (let key in list) { // 배열에 for in 문법 쓰게 되면 index가 나옴
//     console.log(key, list[key]);
// }

// var keys = Object.keys(o);
// console.log(keys);

// ----------------------------------------------------

// var o = {
//     title : "hello",
//     value : 1,
//     label: function(s) {
//         return this.title + " " + this["value"] + s; // 여기서 this는 o를 가리킴
//     },
//     test: (s) => {
//         return this.title + " " + this["value"] + s; // 화살표 함수에서는 this 사용 불가 , global 로 가기 떄문에
//     }
// }

// console.log(o.label("..."));
// console.log(o.test("..."));

// ----------------------------------------------------

// try {
//     console.log("hello world");
//     throw new Error("error");
//     console.log("hello world2");
// } catch {
//     console.log("catch");

// } finally {
//     console.log("마무리");
// }

// ----------------------------------------------------

// setInterval(() => {     // setInterval : 정해진 초 마다 함수를 실행시켜주는 함수, 비동기 함수이다.
//     console.log("interval");
// }, 1000); 

// let i = 0;

// while (i < 4000000000) {
//     i++
// }
// console.log("done");

// ----------------------------------------------------

// setTimeout(() => { // setInterval 과 다르게 한번만 실행 , 얘도 비동기 함수 
//     console.log("hello");
// }, 1000);

// console.log("done");

// ----------------------------------------------------

// function asyncTest(value, cb) {
//     setTimeout(() => {
//         cb(value + 1);
//     }, 1000);
// }

// asyncTest(2, (result) => {
//     console.log("result", result);

//     asyncTest(result * 2, (result2) => {
//         console.log("result2", result2);
//         console.log("done");
//     });
// }); // 콜백 지옥

// new Promise((resolve, reject) => {
//     asyncTest(2, (result) => {
//         console.log("result", result);
//         resolve(result);
//     });
// }).then((result) => {
//     return new Promise((resolve, reject) => {
//         asyncTest(result * 2, (result2) => {
//             console.log("result2", result2);
//             //resolve(result2);
//             reject(); // error 가 발생했다고 판단 --> 다음 then 을 실행 시키지 않고 catch 문으로 넘어감
//         });
//     });  
// }).then((result) => {
//     console.log("done", result);
// }).catch(e => {
//     console.log("error");
// })

// -------------------------------------------------------------------------

function asyncTest(value, cb) {
    setTimeout(() => {
        cb(value + 1);
    }, 1000);
}

async function addTest(value) {
    await new Promise((resolve, reject) => {setTimeout(resolve, 1000); });
    return value + 1; 
}

async function test() {
    console.log("start");
    var value = await new Promise((resolve, reject) => {
        asyncTest(2, (r) => {
            resolve(r);
        });
    });

    console.log("value", value);

    value = await addTest(value);
    console.log("value", value);
}

test();
