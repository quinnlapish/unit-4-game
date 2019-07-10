
//keeping score//

var wins= 0;
var failures= 0;
var objectivenumber ="";
var usernumber= 0;
var gem1 =0;
var gem2 =0;
var gem3 =0;
var gem4 =0;


//start game function//

function startgame ()
{
// four random gems // 

gem1 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem1)

gem2 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem2)

gem3 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem3)

gem4 = [Math.floor (Math.random () * 12 + 1)];
console.log(gem4)

    // random gem goal// 

usernumber = 0;
objectivenumber = [Math.floor (Math.random () * (120 - 19)+ 19)];
console.log(objectivenumber);
$("#computertotal").text(objectivenumber);
}

// rules //
startgame();

$("#usertotal").text(usernumber);

if (usernumber == objectivenumber)
{
wins++;
console.log(usernumber)
$("#wins").text(wins);
}

else if (usernumber > objectivenumber)

{

    failures ++; 
    $("#failures").text(failures);
}


startgame();

console.log(failures)



