var gameContainer = $('#gameContainer')
var indexContainer = $('#indexContainer')
var welcomeScreen = $('#welcomeScreen')
var professorOakContainer = $('#professorOakContainer')
var finalScoreContainer = $('#finalScoreContainer')
var username;

//below we reset our session everytime the page is reloaded
$(document).ready(function(){
	sessionStorage.clear();
})

 function beginGame(){
	var username = document.getElementById('username').value;
	// this.username = username;
	//sessionStorage.clear();
	professorOakContainer.css({'display':'none'})
	indexContainer.css({'display':'none'})
	gameContainer.css({'display':'block'})
	//reset();
	update = setInterval("timer()",1000);
}

$("#quickStartBtn").on("click", function(){
	welcomeScreen.css({'display':'none'})
	professorOakContainer.css({'display':'none'})
	indexContainer.css({'display':'none'})
	gameContainer.css({'display':'block'})
	//reset();
	update = setInterval("timer()",1000);
})

var numbers = {
	numberOfCorrectAnswers :0,
 	numberOfWrongAnswers :0,
 	numberOfAttempts:0
};

// Below we create a timer feature!
time = 6;
function timer(){
  if(!time<1){
   time = time - 1
   result.innerHTML = ""+time+""
 }else{
   //window.clearInterval(update); //--> stops timer
   numbers.numberOfWrongAnswers ++;
   reset()
 }
}

var numbersAsString = sessionStorage.getItem('numbers');
if(numbersAsString){
	numbers = JSON.parse(numbersAsString);
}

// Below we check the url to see if it's on the proper page, if so we run code that triggers our timer function every so often


var pokemonNamesObj =
{1:"Bulbasaur",2:"Ivysaur",3:"Venusaur",4:"Charmander",5:"Charmeleon",6:"Charizard",7:"Squirtle",8:"Wartortle",9:"Blastoise",10:"Caterpie",11:"Metapod",12:"Butterfree",13:"Weedle",14:"Kakuna",15:"Beedrill",16:"Pidgey",17:"Pidgeotto",18:"Pidgeot",19:"Rattata",20:"Raticate",21:"Spearow",22:"Fearow",23:"Ekans",24:"Arbok",25:"Pikachu",26:"Raichu",27:"Sandshrew",28:"Sandslash",29:"Nidoran",30:"Nidorina",31:"Nidoqueen",32:"Nidoran",33:"Nidorino",34:"Nidoking",35:"Clefairy",36:"Clefable",37:"Vulpix",38:"Ninetales",39:"Jigglypuff",40:"Wigglypuff",41:"Zubat",42:"Golbat",43:"Oddish",44:"Gloom",45:"Vileplume",46:"Paras",47:"Parasect",48:"Venonat",49:"Venomoth",50:"Diglett",51:"Dugtrio",52:"Meowth",53:"Persian",54:"Psyduck",55:"Golduck",56:"Mankey",57:"Primeape",58:"Growlithe",59:"Arcanine",60:"Poliwag",61:"Poliwhirl",62:"Poliwrath",63:"Abra",64:"Kadabra",65:"Alakazam",66:"Machop",67:"Machoke",68:"Machamp",69:"Bellsprout",70:"Weepinbell",71:"Victreebel",72:"Tentacool",73:"Tentacruel",74:"Geodude",75:"Graveler",76:"Golem",77:"Ponyta",78:"Rapidash",79:"Slowpoke",80:"Slowbro",81:"Magnemite",82:"Magneton",83:"Farfetch'd",84:"Doduo",85:"Dodrio",86:"Seel",87:"Dewgong",88:"Grimer",89:"Muk",90:"Shellder",91:"Cloyster",92:"Gastly",93:"Haunter",94:"Gengar",95:"Onix",96:"Drowzee",97:"Hyno",98:"Krabby",99:"Kingler",100:"Voltorb",101:"ELectrode",102:"Exeggcute",103:"Exeggutor",104:"Cubone",105:"Marowak",106:"Hitmonlee",107:"Hitmonchan",108:"Lickitung",109:"Koffing",110:"Weezing",111:"Rhyhorn",112:"Rhydon",113:"Chansey",114:"Tangela",115:"Kangaskhan",116:"Horsea",117:"Seadra",118:"Goldeen",119:"Seaking",120:"Staryu",121:"Starmie",122:"Mr. Mime",123:"Scyther",124:"Jynx",125:"Electabuzz",126:"Magmar",127:"Pinsir",128:"Tauros",129:"Magikarp",130:"Gyrados",131:"Lapras",132:"Ditto",133:"Eevee",134:"Vaporeon",135:"Jolteon",136:"FLareon",137:"Porygon",138:"Omanyte",139:"Omastar",140:"Kabuto",141:"Kabutops",142:"Aerodactyl",143:"Snorlax",144:"Articuno",145:"Zapdos",146:"Moltres",147:"Dratini",148:"Dragonair",149:"Dragonite",150:"Mewtwo",151:"Mew"};

function randomPokemon(){
	var randomNum = Math.floor(Math.random() * 150 + 1);
	randomNum++
	if(randomNum < 152){
		$('#pokemonImage').attr("src", "Images/Pkmn"+randomNum+".png")
	}
	// Below we store a random # between 0 and 4 in a variable (this will help in placing the correct name of the pokemon pictured in a random slot)

var randomNumBetween0And4 = Math.floor(Math.random() * 4 + 0);
var randomize = pokemonNamesObj[randomNum];
var randomWrongNum = Math.floor(Math.random() * 150 + 1);

var newRandomNum1;
var newRandomNum2;
var newRandomNum3;

// Below we create a function that gives each variable a unique number value between 1-151
function assignNumbersToWrongAnswers(){

	var randomWrongNum = Math.floor(Math.random() * 152 + 1);

	if(randomWrongNum != randomNum){
	  newRandomNum1 = randomWrongNum;
	}

	var randomWrongNum = Math.floor(Math.random() * 152 + 1);
	if(randomWrongNum != newRandomNum1 && randomWrongNum != randomNum){
	  newRandomNum2 = randomWrongNum;
	}

	var randomWrongNum = Math.floor(Math.random() * 152 + 1);
	if(randomWrongNum != newRandomNum1 && randomWrongNum != newRandomNum2 && randomWrongNum != randomNum){
	  newRandomNum3 = randomWrongNum;
	}

}

assignNumbersToWrongAnswers();

// step 4: we write code that places those new pokemon names dynamically into the HTML
	var wrongAnswerChoice1 = pokemonNamesObj[newRandomNum1];
	var wrongAnswerChoice2 = pokemonNamesObj[newRandomNum2];
	var wrongAnswerChoice3 = pokemonNamesObj[newRandomNum3];

	if(randomNumBetween0And4 == 0){ // Switching '=' to '==' makes my pokemon names appear in random order.
		optionA.innerHTML = ""+randomize+"";
		optionB.innerHTML = ""+wrongAnswerChoice1+"";
		optionC.innerHTML = ""+wrongAnswerChoice2+"";
		optionD.innerHTML = ""+wrongAnswerChoice3+"";
	} else if(randomNumBetween0And4 == 1){
		optionB.innerHTML = ""+randomize+"";
		optionA.innerHTML = ""+wrongAnswerChoice1+"";
		optionC.innerHTML = ""+wrongAnswerChoice2+"";
		optionD.innerHTML = ""+wrongAnswerChoice3+"";
	} else if(randomNumBetween0And4 == 2){
		optionC.innerHTML = ""+randomize+"";
		optionA.innerHTML = ""+wrongAnswerChoice1+"";
		optionB.innerHTML = ""+wrongAnswerChoice2+"";
		optionD.innerHTML = ""+wrongAnswerChoice3+"";
	} else if(randomNumBetween0And4 == 3){
		optionD.innerHTML = ""+randomize+"";
		optionA.innerHTML = ""+wrongAnswerChoice1+"";
		optionB.innerHTML = ""+wrongAnswerChoice2+"";
		optionC.innerHTML = ""+wrongAnswerChoice3+"";
	}else if(numbers.numberOfAttempts = 15){
		var randomize = 0
	}

}
randomPokemon();

// step1: make each option clickable
$(".option").on("mouseover", function(){
	this.style.color = "blue";
});
$(".option").on("mouseout", function(){
	this.style.color = "orange";
});


//I found the GEM below on http://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript


// Immediately below we write code that checks to see if the multiple choice answer clicked on matches the image presently on the screen.
pkmnString = (((pokemonImage.src).split('Images/Pkmn').pop()).slice(0,-4));


var correctAnswerGiven;
var pokemonImg = $("#pokemonImage");

$(".option").on("click", function(){
	// In our if statement argument below we need to match the pokemon image on screen with the option clicked on. The code works but is there a shorter/clearer way to write it?
	var pkmnString = (((pokemonImage.src).split('Images/Pkmn').pop()).slice(0,-4));
	if(pokemonNamesObj[parseFloat(pkmnString)] ==  this.innerHTML ) {
		correctAnswerGiven = true;
		numbers.numberOfCorrectAnswers ++;
	} else{
		correctAnswerGiven = false;
		numbers.numberOfWrongAnswers ++;
	}


	if(correctAnswerGiven){
	  score.innerHTML = "<img src='Images/thatIsCorrect.png'></img>"
	  setTimeout(function(){ // setTimeout is a better option to setInterval because setInterval repeats indefinetely but worked because I reloaded the page. Avoid using setInterval!
	  	reset(); // we removed window reload! Avoid using window.reload()!
	  },500);

	} else{
	  score.innerHTML = "<img src='Images/thatIsIncorrect.png'></img>"
	  setTimeout(function(){
	  	reset();
	  },500);
    }

    console.log('Attempts: '+numbers.numberOfAttempts)
    sessionStorage.setItem('numbers',JSON.stringify(numbers));

})

$("#skipBtn").on("click", function(){
	numbers.numberOfWrongAnswers ++;
    reset()
})

	correctAnswersDiv.innerHTML = ""+numbers.numberOfCorrectAnswers+""; // remember innerHTML never needs jquerys dom traversal and retrieval
	wrongAnswersDiv.innerHTML = ""+numbers.numberOfWrongAnswers+"";

function reset(){
	randomPokemon();
	score.innerHTML = "";
	time = 6;
	numbers.numberOfAttempts++
	correctAnswersDiv.innerHTML = ""+numbers.numberOfCorrectAnswers+"";
	wrongAnswersDiv.innerHTML = ""+numbers.numberOfWrongAnswers+"";

	if(numbers.numberOfAttempts > 14){
	gameContainer.css({'display':'none'})
	finalScoreContainer.css({'display':'block'})
	finalPonts = document.getElementById('finalPoints')
	finalPoints.textContent =  numbers.numberOfCorrectAnswers
	$('#choicesContainer').css({'display':'none'});
	//$('.buttons').css({'display':'none'});
	// code below shuts off our built in js interval scheduler
	window.clearInterval(update);
	sessionStorage.clear();
	}
}

$('#quitBtn').on('click', function(){
	gameContainer.css({'display':'none'})
	finalScoreContainer.css({'display':'block'})
	finalPonts = document.getElementById('finalPoints')
	finalPoints.textContent =  numbers.numberOfCorrectAnswers
	$('#choicesContainer').css({'display':'none'});
	$('.buttons').css({'display':'none'});
	window.clearInterval(update);
	sessionStorage.clear();
})

$('#playAgainBtn').on('click', function(){
	window.location.reload();
})

$('#startBtn').on('click', function(){
	$('#welcomeScreen').css({'display':'none'});
	$('#professorOakContainer').css({'display':'block'});
	//professorsInstructions();
})
// To create authentication, authrorization
var username = sessionStorage.getItem('username')
//check to see if username exists, else display an error page

var profsGameInstructions = $('#profsGameInstructions')
var professorsWords = "<p>Hello there and welcome to the world of Pokemon! I am professor oak, what is your name?</p><input id='yourNameHere'></input><button id='sayName'>sayName</button>"
window.onload = function professorsInstructions(){
	var professorsWordsLine1 = "Hello there and welcome to the world of Pokemon. I am professor oak, what is your name?<br/><br/><input id='yourNameHere'></input><button id='sayName' onclick='sayNameCall()'>sayName</button>"

	document.getElementById("profsGameInstructions").innerHTML = ""+professorsWordsLine1+""

}

function sayNameCall(){
	yourNameHere = $('#yourNameHere').val();
	var professorsWordsLine2 = "Hi "+yourNameHere+", it sure is nice to finally meet you. <br/><br/> My grandson speaks very highly of your pokemon knowledge. <br/><br/><div onclick='hearLine3()' id='continueInstructionsBtn'></div>"
	$('#professorOak').css({'margin-top':'-13.2em'})
	document.getElementById("profsGameInstructions").innerHTML = ""+professorsWordsLine2+""

	//console.log("$('#yourNameHere').val(): ",$('#yourNameHere').val())
}

function hearLine3(){
	var professorsWordsLine3 = "I&#039;m in the process of completing the ultimate collection of pokemon data in the world but I have little time and I need your expertise! Will you help? <br/><br/><button id='iWillHelp' onclick='iWillHelpFunction()'>Yes!</button><button id='iWillHelp' onclick='iWillHelpFunction()'>Dunno</button>"
	$('#professorOak').css({'margin-top':'-13.1em'})
	document.getElementById("profsGameInstructions").innerHTML = ""+professorsWordsLine3+""
}

function iWillHelpFunction(){
	var professorsWordsLine4 = "I&#039;ll need you to give the correct names of 15 pokemon in no more than 5 seconds. Time is of the essence. OKAY let&#039;s get started! <br/><br/><button id='beginGameBtn' onclick='beginGame()'>begin game</button>"
	$('#professorOak').css({'margin-top':'-12em'})
	document.getElementById("profsGameInstructions").innerHTML = ""+professorsWordsLine4+""
}
