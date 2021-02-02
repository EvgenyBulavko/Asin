// var fractal = {
//     a1: {
//         b1: {
//             c: 1
//         },
//         b2: {
//             c: 222
//         },
//         b3: {
//             c: {
//                 d: 33,
//                 e: 2.5,
//                 f: {
//                     g: 9999,
//                     h: {
//                         i: {
//                             j: 1001,
//                             k: 'строка',
//                             l: [1,2,3],
//                             m: function() {}
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     a2:228
// }
 
// getFiniteValue(fractal);
 
// function getFiniteValue(obj) {
//     getProp(obj);
         
//     function getProp(o) {
//         for(var prop in o) {
//             if(typeof(o[prop]) === 'object') {
//                 getProp(o[prop]);
//             } else {
//                 console.log('Finite value: '+o[prop])
//             }
//         }
//     }
// }

let mas = [1,2,3];

// mas.forEach(element => {
//     console.log(element*2);
// })
// let a =mas.map(function(el,i){
//     return el+100;
// })
// let s = mas.reduce((sum,el) => {
//     sum.push(el*10);
//     return sum;
// },[])

// let z = mas.filter((e)=>{
//    return e == 1;
// })


// const a = {}
// const b = {}
// console.log(a == b, a === b)


// console.log(function(){}.valueOf() == function(){}.valueOf(), function(){} === function(){});

// const ma = [];

// if(ma.length) {
//     console.log(true)
// } else {
//     console.log(false)
// }

 function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

const a = generateSequence();
console.log(a.next());
console.log(a.next());
console.log(a.next());