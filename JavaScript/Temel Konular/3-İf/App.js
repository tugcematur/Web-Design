function gunYaz()
{
  var gun=  document.getElementById("gun").value   /*  Document classından türeyen document nesnesi */
  let gunad= ""  

if(gun==1){
    gunad="Pazartesi"
}
else if (gun==2){
    gunad = "Sali"
}
else if (gun==3){
    gunad = "Carsamba"
}
else if (gun==4){
    gunad = "Persembe"
}
else if (gun==5){
    gunad = "Cuma"
}
else if (gun==6){
    gunad = "Cumartesi"
}
else if (gun==7){
    gunad = "Pazar"
}
else{
    gunad = "Yanlis gun!"
}

document.getElementById("gunad").innerHTML = "Sonuc:" +" " + gunad 


  console.log(gunad)
}

function switchCase()
{

    let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
}

