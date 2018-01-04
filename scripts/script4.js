// jan 4th


// expected result: [3, 5, 7, 9, 11, 13]
let nums = [1, 2, 3, 4, "5", 6, "7"];
// nums.forEach(function(x){
  //   let chups = +x*2-1;
  //   if(chups > 2){
    //     newNums.push(chups);
    //   }
    // });
    
let newNums =[];
console.log('first',newNums);
const getNums = function(file){
  return new Promise(function (resolve,reject){
    $.ajax({
      url: `${file}`
    }).done(function(data){
      console.log("data.nums", data.nums);
      data.nums.forEach(function(x){
        let chups = +x*2-1;
        if(chups > 2){
          newNums.push(chups);
        }
      });
      console.log('newNums', newNums);
      resolve(newNums);
    })

  });
};

getNums('../somenumbers.json').then(function(data){
  console.log('then the data is ', data);
  data.forEach(function())
});
