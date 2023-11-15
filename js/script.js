
const user = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

console.log ("User ha ottenuto: " + user);
console.log ("Computer ha ottenuto: " + computer);

if (user > computer) {
    console.log ("Ha vinto User!");
} else if (user < computer) {
    console.log ("Ha vinto Computer!");
} else if (user === computer) {
    console.log ("Pareggio!");
}