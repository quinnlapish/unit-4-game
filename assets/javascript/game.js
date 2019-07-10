
//keeping score//

var wins= 0;
var failures= 0;
var randomgem;
var objectivenumber ="";
var gem1;
var gem2;
var gem3;
var gem4;


//start game function//

function startgame ()
{

    // random gem goal// 


objectivenumber = [Math.floor (Math.random () * (120 - 19)+ 19)];
console.log(objectivenumber)
}

startgame();

// four random gems // 

gem1 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem1)

gem2 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem2)

gem3 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem3)

gem4 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem4)





document.onkeypress = function (event) {

var usermove = prompt ("Pick a letter");

if (usermove == computermove) 
{wins++;
console.log(usermove);

document.querySelector("#wins").innerHTML = wins;

console.log(wins);  
startgame();  
}
else {

document.querySelector("#usermove").append(usermove + ", ");

guesses--;
document.querySelector("#guesses").innerHTML = guesses;
console.log(guesses)
}

if (guesses == 0) 

{failures++

document.querySelector("#failures").innerHTML = failures;

startgame();

console.log(failures)
}
}


