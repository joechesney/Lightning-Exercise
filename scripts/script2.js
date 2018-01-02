let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let fave_demo = [];
console.log("ages: ", ages);
// ages.forEach(function(value){
//   if(value >=18 && value <=49){
//     console.log(value);
//     fave_demo.push(value);
//   }
// })

// for(let i =0; i < ages.length; i++){
//   if(ages[i]>=18 && ages[i]<=49){
//     fave_demo.push(ages[i]);
//   }
// }

// fave_demo = ages.filter(function(value){
//   return (value>=18 && value<=49);
// })

fave_demo = ages.filter( (age) => age < 50 && age > 17);


console.log("fave_demo: ", fave_demo);