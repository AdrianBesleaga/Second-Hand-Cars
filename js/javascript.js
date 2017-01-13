// the modal
var modal = document.getElementById('myModal');

// the button that opens the modal
var btn = document.getElementById("myBtn");

// element that closes the modal
var span = document.getElementsByClassName("close")[0];


// open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// damaged car (show or hide more info textaria)
   function carDamaged() {
    var x = document.getElementById("Ydamaged");
	console.log(x.checked);
	if(x.checked){
		document.getElementById("DamagedInfo").style.display = "block";
	}else{
		document.getElementById("DamagedInfo").style.display = "none";
	}
}

// show error message and red border
function error(x,id){
	 var text = "Input not valid or empty";
	
	if(x == true){
		document.getElementById(id).style.borderColor = "red";
		document.getElementById("error").innerHTML = text;
	}else{
		document.getElementById(id).style.borderColor = "green";
		document.getElementById("error").innerHTML = "";
	}
	
}


// validate inputs alphanumeric or number
function validate(value,type,id) {

// validate alphanumeric and . , characters
 if(type == "text"){
	var letterNumber = /^[0-9a-zA-Z , . ]+$/;  
	if(value.match(letterNumber) && value.length > 1)   
	{
		error(false,id);
	}else{
		error(true,id);
	}
	 
 }
 
 if(type == "number"){
	 //NaN = Not a Valid Number
	 if(isNaN(value) || value < 1 || value.length < 1){
		 error(true,id);
	}else{
		error(false,id);
	}
 }
 
// validate only if the car year > 1900 and < current year (2017)
 if(id == "year"){
	 if ( value < 1900 || value > new Date().getFullYear() || value.length < 1) {
		error(true,id);
	 }else{
		error(false,id);
	 }
}

// validate if value found in possible values
if(type == "select-one"){
var found = false;
var values = ['white', 'black', 'red', 'blue', 'eur', 'usd', 'ron', 'gasoline', 'diesel', 'electric','bmw','mercedes','lamborghini','nissan','volkswagen'] ;
for (var i = 0; i < values.length && !found; i++) {
  if (values[i] === value) {
    found = true;
  }
}
if(found == true){
	error(false,id);
}else{
	error(true,id);
}
}

// change the car logo
if(found == true && id == "carLogo"){
	var x = document.getElementById("carLogo");
	console.log(x.value);
	document.getElementById("cLogo").src = "img/logos/"+x.value+".png";
}

// change the car color
if(found == true && id == "carColor"){
    var x = document.getElementById("carColor");
	console.log(x.value);
	document.getElementById("color").style.backgroundColor = x.value;
}

}

function save(){
	var x = document.getElementById("title").value.length;
	var y = document.getElementById("Description").value.length;
	if(x > 5 && y > 5){
	document.getElementById("form").submit();	
	document.getElementById("error").style.color = "black";
	document.getElementById("error").innerHTML = "Car successfully added !";
	}else{
		error(true,'saveCar');
	}
}

function cancel(){
	modal.style.display = "none";
}
