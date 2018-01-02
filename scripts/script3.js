const output = document.getElementById('output');
let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
    copies_sold: 14000000,
    formats: ["radio", "TV", "film", "graphic novel"],
    ultimate_answer: {
      meaning_of_life: 42
    }
  }
};

let someVar = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;
// output.innerHTML = `<h1>MOTHERFUCKING ${someVar} MY DUDE!!!</h1>`;
console.log(someVar);

let yoda_quote = ['the', 'greatest', 'teacher', 'failure', 'is'];

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

yoda_quote[0]= cap(yoda_quote[0]);

yoda_quote.splice(3, 0, ",");
yoda_quote = yoda_quote.join(" ");
output.innerHTML = `Yoda says,"${yoda_quote}."`;
console.log(yoda_quote);