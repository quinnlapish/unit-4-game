
//keeping score//

var wins= 0;
var failures= 0;
var objectivenumber =0;
var usernumber = 0;
var gem1 =0;
var gem2 =0;
var gem3 =0;
var gem4 =0;


//start game function//

function startgame ()
{
// four random gems // 

gem1 = Math.floor(Math.random () * 12 + 1);
console.log(gem1);

gem2 = Math.floor(Math.random () * 12 + 1);
console.log(gem2);

gem3 = Math.floor(Math.random () * 12 + 1);
console.log(gem3);

gem4 = Math.floor(Math.random () * 12 + 1);
console.log(gem4);

    // random gem goal// 

usernumber = 0;
$("#usertotal").text(usernumber);
objectivenumber = [Math.floor (Math.random () * (120 - 19)+ 19)];
console.log(objectivenumber);
$("#computertotal").text(objectivenumber);
}

// rules //

function gamebody(){
    if ($(this).attr("id")=="gem1"){
        usernumber += gem1; 
        $("#usertotal").text(usernumber); 
    }
    else if ($(this).attr("id")=="gem2"){
        usernumber += gem2; 
        $("#usertotal").text(usernumber); 
    }
    else if ($(this).attr("id")=="gem3"){
        usernumber += gem3; 
        $("#usertotal").text(usernumber); 
    }
    else if ($(this).attr("id")=="gem4"){
        usernumber += gem4; 
        $("#usertotal").text(usernumber); 
    }
    
    // debugger;
    if (usernumber == objectivenumber)
    {
     wins++;
    console.log(usernumber)
    $("#wins").text(wins);
    startgame();
    }
    else if (usernumber > objectivenumber)
    {
        failures ++; 
        $("#failures").text(failures);
        startgame();
    }

}

$(".gems").on("click", gamebody);





//acutal game//




startgame();




