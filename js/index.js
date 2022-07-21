// Iteration 1: Names and Input

let hacker1 = "Alejo"
let hacker2 = "Juanito"

console.log ("The driver's name is " + hacker1)

console.log ("The navigator's name is " + hacker2)


// Iteration 2: Conditionals




if (hacker1.length > hacker2.length) {

console.log ("The driver has the longest name, it has " + hacker1.length +  " characters")

}

else if (hacker2.length > hacker1.length) { 

console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")

}

else { 

console.log ("Wow, you both have equally long names, " + hacker1.length + " characters!")

}





// Primer nombre en uppercase

hacker1 = hacker1.split('').join(' ');
hacker1 = hacker1.toUpperCase()

console.log (hacker1)

// Una por una

hacker1 = hacker1.replace(/\s/g, '');


for (let i = 0; i < hacker1.length; ++i) {
  console.log(hacker1[i]);
}

// Funcion para segundo nombre reverse

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log (newString);
}
reverseString(hacker2);


// 3.3. Orden Alfabetico 


if (hacker1 > hacker2) {  

console.log ("The driver's name goes first.")
}

else if (hacker1 < hacker2) {  

console.log ("Yo, the navigator goes first definitely.")
 }

else {  

console.log ("What?! You both have the same name?")

 }


 // Bonus 1:

let star1 = "Lucas ipsum dolor sit Darth amet alderaan jango boba Darth hutt darth jade moff luuke jango. Utapau grievous Darth vader mustafar mara"

let star2 = "Vader moff gonk mon mara. Mon skywalker ackbar darth Darth hutt boba anakin jawa solo."

let star3 = "Darth moff ahsoka hutt solo kessel boba leia. Mandalore Darth anakin sidious solo leia cade"



// number 1

console.log (star1.length)
console.log (star2.length)
console.log (star3.length)


// number 2

var count1 = (star1.match(/Darth/g) || []).length;
console.log(count1);

var count2 = (star2.match(/Darth/g) || []).length;
console.log(count2);

var count3 = (star3.match(/Darth/g) || []).length;
console.log(count3);



// Bonus 2: not finished

console.log ("bonus 2 inicio");

let palindromo = "somos o no somos";



for (let i = 0; i <= palindromo.length; i++) {
    
    if (palindromo.charAt(i) === palindromo.charAt(-i)) {

        console.log ("Ok");

    }

    else if (palindromo.charAt(i) != palindromo.charAt(-i)) {

        console.log("NO es un palindromo!!!");

    }
    
  }



