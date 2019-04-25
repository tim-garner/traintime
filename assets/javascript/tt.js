//praticing java
let timsDebt = 10000;
timsDebt = timsDebt - 7000;
console.log(timsDebt);
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


console.log("firststep");

$("#submit").on("click", function(event){
    event.preventDefault();
    console.log("choo choo");
    var destination = $("#destination").val().trim;
    var frequency = $("#frequency").val().trim;
    var minutesaway = $("#minutesaway").val().trim;
    var trainname = $("#trainname").val().trim;
    var nextarrival = $("#nextarrival").val().trim;

    database.ref().push({
        trainname: trainname,
        destination: destination,
        frequency: frequency,
        minutesaway: minutesaway,
        nextarrival: nextarrival,
       
    })
    console.log(trainname,destination,nextarrival,frequency,minutesaway)

});

database.ref().on("child_added", function(snapshot){
  var temp = snapshot.val();
  console.log(temp, temp.name);
  var destination = $("<p>").text(temp.destination);
  var frequency = $("<p>").text(temp.frequency);
  var minutesaway = $("<p>").text(temp.minutesaway);
  var trainname = $("<p>").text(temp.trainname);
  var nextarrival = $("<p>").text(temp.nextarrival);
  
  $("#dump-div1").append(destination);
  $("#dump-div2").append(frequency);
  $("#dump-div3").append(minutesaway);
  $("#dump-div4").append(trainname);
  $("#dump-div5").append(nextarrival);

}), function(errorObject){

}

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
