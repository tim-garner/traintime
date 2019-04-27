//praticing java
let bobsDebt = 10000;
bobsDebt = bobsDebt - 10000;
console.log(bobsDebt);
//3000

//praticing javs X2 
for (let number =0; number <=12; number = number +2){
    console.log(number);
}


///creating firebase for project
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmbsTGANWk-uqN7rz5qkNpYMaIJ-wnsBQ",
    authDomain: "train-project-839f3.firebaseapp.com",
    databaseURL: "https://train-project-839f3.firebaseio.com",
    projectId: "train-project-839f3",
    storageBucket: "train-project-839f3.appspot.com",
    messagingSenderId: "486050390460"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  console.log("databaseworking");
  console.log("Database: ", database);


console.log("firststep");

//create variables, make sure they are created in firebase.
var destination = "";
var trainname = "";
var firsttraintime = "";
var minutesaway = "";
var distance = "";


$("#submit").on("click", function(event){
    event.preventDefault();
    console.log("choo choo");
     destination = $("#destination-input").val().trim();
    trainname = $("#train-input").val().trim();
     firsttraintime = $("#ftt-input").val().trim();
     minutesaway = $("#minutes-input").val().trim();
     distance = $("#distance-input").val().trim();

     console.log(destination,trainname,firsttraintime,minutesaway,distance);

    database.ref().push({
        trainname: trainname,
        destination: destination,
       firsttraintime: firsttraintime,
       minutesaway: minutesaway,
       distance: distance,



        
       
    })
    console.log(trainname,destination,firsttraintime,minutesaway,distance)

});

database.ref().on("child_added", function(snapshot){
  var temp = snapshot.val();
  console.log(temp, temp.name);
  var destination = $("<p>").text(temp.destination);
  var firsttraintime = $("<p>").text(temp.firsttraintime);

  var trainname = $("<p>").text(temp.trainname);
  var minutesaway=$("<p>").text(temp.minutesaway);
  var distance=$("<p>").text(temp.distance);

  
  $("#dump-div1").append(trainname);
  $("#dump-div2").append(destination);
  $("#dump-div3").append(distance);
  $("#dump-div4").append(firsttraintime);
  $("#dump-div5").append(minutesaway);

}), function(errorObject){

}

database.ref().on("value", function(snapshot) {
  console.log("Snapshot: ", snapshot.val());
});


var todaysDate = "04/25/2019";
console.log(todaysDate);

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
console.log(startTime);

