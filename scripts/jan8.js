"use strict";
// lightning exercise:
// Loop through this object and add each member object's key as an ID. Log the results.
let customers = {
  active: {
    a87b6345: {
      name: "Gary Harrison",
      age: 23,
      member_level: "gold"
    },
    b345hy66: {
      name: "Harry Garrison",
      age: 34,
      member_level: "silver"
    },
    nh56yht8: {
      name: "Mary Terryson",
      age: 78,
      member_level: "platinum"
    },
    j677yd456: {
      name: "Barry Sonnyman",
      age: 44,
      member_level: "gold"
    }
  },
  inactive: {
    ur56tfgt: {
      name: "Barb Justice",
      age: 56,
      member_level: "none"
    },
    d56gt6: {
      name: "Jane L'eggo",
      age: 11,
      member_level: "none"
    }
  }
}
// let activeids = Object.keys(customers.active);
// let inactiveids = Object.keys(customers.inactive);
// let ids = [];
// activeids.forEach((id)=>{
//   ids.push(id);
// })
// inactiveids.forEach((id)=>{
//   ids.push(id);
// })
// ids.forEach((id)=>{
//   if(customers.active.hasOwnProperty(id) ){
//     customers.active[id].id = id;
//   }else if(customers.inactive.hasOwnProperty(id)){
//     customers.inactive[id].id = id;
//   }
// });
// console.log('customers: ',customers);

// HOW JOE SHEP DID IT:

for(let status in customers){
  let keys = Object.keys(customers[status]);
  keys.forEach((key)=>{
    customers[status][key].id= key;
  })
}
console.log('customers: ',customers);