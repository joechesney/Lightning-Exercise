// let animal = {
//     legs: 4,
//     heads: 1,
//     speed: "fast"
// }

// let cheetah = Object.create(animal);
// cheetah.fur = "yellow";
// cheetah.continent = "Africa";

let thisArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];

thisArray.forEach(function(elem){
    // elem.toString();
    elem = `"${elem}"`;
    if (typeof elem === 'object') {
        console.log("yes");
        for (let prop in elem) {
            elem.prop.toString();
            console.log(elem.prop);
        }
    }
    console.log(elem);
});
// the above attempts to turn everything into a string

let arrayOfStrings = thisArray.forEach(function(elem) {
    if (typeof elem === 'string'){
        console.log(elem);
        return true;
    }
});
