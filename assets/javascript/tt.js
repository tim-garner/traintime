for (let number =0; number <=12; number = number +2){
    console.log(number);
}
console.log("firststep");

$("#submit").on("click", function(event){
    event.preventDefault();
    console.log("choo choo");
});
