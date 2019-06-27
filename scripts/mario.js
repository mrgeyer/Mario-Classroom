height = 64;
var buttWidth = 32;
reward = " is on the couch today.";

agenda = [{
    mode: "Boss Battle Quiz",
    min: 20,
    const: 20,
    initial: "BW"
  },
  {
    mode: "Cadence",
    min: 2,
    const: 2,
    initial: "N"
  },
  {
    mode: "We do",
    min: 8,
    const: 8,
    initial: "N"
  },
  {
    mode: "You Try",
    min: 4,
    const: 4,
    initial: "B"
  },
  {
    mode: "Gimkit",
    min: 15,
    const: 15,
    initial: "N"
  },
  {
    mode: "Cadence",
    min: 3,
    const: 3,
    initial: "B"
}];  
  couchput = "";

// enter email addresses to e-mail dispcipline report here.
emailaddresses = "";

emailaddresses += "";

// enter subject for discipline report email here
subject = "";
// enter message for discipline report email here.
body = "";



// Timer Variables
bellSchedule = [{
  period: 1,
  SH: 8,
  SM: 5,
  EH: 8,
  EM: 55
},
{
  period: 3,
  SH: 9,
  SM: 50,
  EH: 10,
  EM: 40
  },
 {
  period: 5,
  SH: 11,
  SM: 30,
  EH: 12,
  EM: 20
}];

agendaItem = 0;

periodIndex = 0;
var seconds = agenda[agendaItem].min * 60;
var mode = agenda[agendaItem].mode;
// End Timer Variables


classes = [
  {
    period: 1,
    students: [
      {
        name: "La",
        firstName: "La",
        lastName: "M",
        powerUp: 1,
        lives: 3,
        coins: 0,
        calculatorNumber: 0,
        lastItem: "block",
        sex: "Female",
        grade: 11,
        incidents: 3, 
        race: "human",
        tardies: 0,
        specialPrograms: [],
        reasons: [],
        otherReasons: "",
        comments: "",
	redCoins: 0
      },
       {
        name: "Ri",
        firstName: "Ta",
        lastName: "Ri",
        powerUp: 1,
        lives: 3,
        coins: 0,
        calculatorNumber: 0,
        lastItem: "block",
        sex: "Female",
        grade: 11,
        incidents: 3, 
        race: "human",
        tardies: 0,
        specialPrograms: [],
        reasons: [],
        otherReasons: "",
        comments: "",
	redCoins: 0
      }
    ] // close students
  },
  {
    period: 3,
    students: [
      {
        name: "Fa",
        firstName: "",
        lastName: "",
        powerUp: 1,
        lives: 3,
        coins: 0,
        calculatorNumber: 0,
        lastItem: "block",
        sex: "Male",
        grade: 11,
        incidents: 3, 
        race: "human",
        specialPrograms: [],
        reasons: [],
        comments: "",
	redCoins: 0
      }
    ] // close students
  }
];


d = Date();
dv = d.valueOf();

var dieSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_mariodie.wav');
var powerUpSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_powerup.wav');
var gameOverSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_gameover.wav');
var coinSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_coin.wav');
var hitSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_pipe.wav');
var oneUpSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_1-up.wav');
var timeSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_warning.wav');

log = document.getElementById("inputTextToSave");
buttons = document.getElementById("buttons");
butt2 = document.getElementById("butt2");

function start() {
  hideSeatingChart();
  let output = "";
  for (let i = 0; i < classes.length; i++) {
    output += "<button onClick='loadClass(" + i + ")'> " + classes[i].period + " </button>";
   output += "<button onClick='couch(" + i + ")'> C" + classes[i].period + " </button>";
  }
  butt2.innerHTML = output;
}

function loadClass(n) {
  let output = "<table>";
  let redCoins = 0;
  for (let i = 0; i < classes[n].students.length; i++) {
    let student = classes[n].students[i];
    redCoins += student.redCoins;
    output += "<tr><td><img src='https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/images/powerUps/";
    output += student.powerUp + ".png' height="+ height + "> ";
    output += student.name + " x " + student.lives;
    output += " </td><td> $";
    if (student.coins < 10){
      output += " ";
    }
    output += student.coins + " </td><td>";
    
    if (student.lives < 1) {
      output += " <button onClick='gameOver(" + n + ", " + i + ")'>";
      output += " GAME OVER</button> ";

     output += " <button onClick='downloadReport(" + n + ", " + i + ")'>";
     output += " DR</button> ";
      
     output += ' <a href="mailto:' + emailaddresses + '?subject=' + subject + '&body=' + student.firstName;
     output += ' ' + student.lastName + " was sent to ISS." +  body + '">';
     output += " SEND</button> ";
      
      
    } else {
 
       output += " <button class='picButt' onClick='item(" + n + ", " + i + ")'>";
       output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
       output += "Classroom/master/images/buttons/";
       output += student.lastItem + ".png' height="+ height + "></button> ";
 // redcoins
       output += " <button class='picButt' onClick='redCoin(" + n + ", " + i + ")'>";
       output += "<img src='";
       //output += "https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/";
       output += "images/buttons/";
       output += "redCoin.png' height="+ height + "></button> ";
      /*
      output += " <button class='picButt' onClick='enemy(" + n + ", "  + i + ", 1)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/goomba.png' height=";
      output += height + 'alt="No materials."></button> ';
      */
// red turtle = tardy
      output += " <button class='picButt' onClick='enemy(" + n + ", " + i + ", 4)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/redTurtle.png' height=" + height + "></button>  ";
// green turtle = off task
      output += " <button class='picButt' onClick='enemy(" + n + ", " + i + ", 2)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/greenTurtle.png' height=" + height + "></button>  ";
      /*
      output += " <button class='picButt' onClick='enemy(" + n + ", " + i + ", 3)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/beetle.png' height=" + height + "></button>  ";    
      */
// lava = off task
      output += " <button class='picButt' onClick='pit(" + n + ", " + i + ", 1)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/lava.png' height=";
      output += height + "></button>  ";
/* 
      output += " <button class='picButt' onClick='pit(" + n + ", " + i + ", 2)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/water.png' height=";
      output += height + "></button>  ";
*/    
      /*
      output += " <button class='picButt' onClick='resetButt(" + n + ", " + i + ", 1)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/reset.jpg' height=";
      output += height + " width=" + buttWidth + "></button>  ";
      */
      output += " <button class='picButt' onClick='resetButt(" + n + ", " + i + ", 2)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/power.jpg' height=";
      output += height + " width=" + buttWidth + "></button>  ";
      /*
      output += " <button class='picButt' onClick='resetButt(" + n + ", " + i + ", 3)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/SNESreset.jpg' height=";
      output += height + " width=" + buttWidth + "></button>  ";
      */
    }
    output += "</td></tr>";
  }
  buttons.innerHTML = output;
  let redCoinOutput = "<img src ='";
  //redCoinOutput +="/https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/";
   redCoinOutput += "images/buttons/";
   redCoinOutput += "redCoin.png' height="+ height + "></button> ";
   redCoinOutput += " x " + redCoins;
  document.getElementById("redCoins").innerHTML = redCoinOutput;
}

function item(p,s){
  let student = classes[p].students[s];
  let number = Math.floor(Math.random()*100);
/*
  if (number > 98) {
    student.lastItem = "1up";
    student.lives += 1; 
    oneUpSound.play();
  } else {
*/
     switch (student.powerUp){
       case 0:
        break;
       case 1:
        student.lastItem = "mushroom";
        student.powerUp = 2;
        powerUpSound.play();
        break;
       case 2:

        student.lastItem = "flower";
        student.powerUp = 3;
        powerUpSound.play();
        break;
       case 3:
        student.lastItem = "coin";
        student.coins += 1;
        coinSound.play();
     }
  //}
   student.comments += student.name + " was participating in class. ";
   student.comments += "The teacher recognized the student's contribution to class. ";
  loadClass(p);
}

function redCoin(p,s){
  let student = classes[p].students[s];
  student.redCoins += 1;
  loadClass(p);
}

function enemy(p,s,e) {
  //breakMinus(1);
  let student = classes[p].students[s];
  if (student.powerUp > 1) {
      student.powerUp -= 1;
      hitSound.play();   
  } else if (student.powerUp === 1) {
     student.lives -= 1;
     if (student.lives === 0) {
       student.powerUp = 0;
       gameOverSound.play();
     } else {
       dieSound.play();
     }
  }
  loadClass(p);
  switch (e) {
    case 1:
      student.comments += student.firstName + " did not have the proper materials for the lesson. ";
      student.comments += student.firstName + " was off task and refused to participate in class. ";
      student.comments += " The teacher gave the student a direct warning. ";
      student.reasons.push(10); // failure to participate in class.
      student.reasons.push(3); // not have proper materials
      break;
    case 2:
      student.comments += student.firstName + " was off task and refused to participate in class. ";
      student.comments += "The teacher gave the student a direct warning. ";
      student.reasons.push(10); // failure to participate in class.
      break;
    case 3:
      student.comments += student.firstName + " was talking about an unrelated topic during the lesson. ";
      student.comments += "The teacher gave the student a direct warning. ";
      student.reasons.push(8); // Excessive talking
      student.reasons.push(2); // Class disruption
      break;
    case 4:
      student.tardies += 1;
      student.comments += student.firstName + " was tardy for the " + student.tardies;
      if (student.tardies == 1) {
        student.comments += "st";
      }
      if (student.tardies == 2) {
        student.comments += "nd";
      }
      if (student.tardies == 3){
        student.comments += "rd";
      }
      if (student.tardies > 3){
        student.comments += "th";
      }
      student.comments += " time today. ";
      student.comments += " The teacher gave the student a direct warning. ";
      if (student.tardies > 1) {
        student.reasons.push(9); // excessive tardies
      }
      break;
    default:
      student.comments += "The teacher gave the student a direct warning. ";
  }
}


function pit(p,s,e) {
  //breakMinus(2);
  let student = classes[p].students[s];
  student.lives -= 1;
  if (student.lives === 0) {
    student.powerUp = 0;
    gameOverSound.play();
  } else {
    dieSound.play();
    student.powerUp = 1;
  }
  loadClass(p);
  switch (e) {
    case 1:
      student.comments += student.firstName + " was talking about an unrelated topic during the lesson ";
      student.comments += "and disrupting class. ";
      student.comments += "The teacher gave the student a direct warning. ";
      student.reasons.push(8); // Excessive talking
      student.reasons.push(2); // Class disruption
      break;
    case 2:

      break;
    default:
      student.comments += " The teacher gave the student a direct warning. ";
  }
}

function resetButt(p,s,e) {
  let student = classes[p].students[s];
  student.lives = 0;
  student.powerUp = 0;
  gameOverSound.play();
  loadClass(p);
   switch (e) {
    case 1:
      student.comments += student.firstName + " used profanity toward the teacher. ";
      student.comments += " The teacher gave the student a direct warning. ";
      student.reasons.push(5);
      student.reasons.push(6);
      student.reasons.push(16);
      student.reasons.push(2);
      break;
    case 2:
      student.comments += student.firstName + " used profanity toward a student. ";
      student.comments += " The teacher gave the student a direct warning. ";
      student.reasons.push(16);
      break;
    case 3:
      student.comments += student.firstName + " was fighting. ";
      student.comments += " The teacher gave the student a direct warning. ";
      student.reasons.push(13);
      break;
    default:
      student.comments += " The teacher gave the student a direct warning. ";
  } 
}

function exportData() {
  d = Date();
  dv = d.valueOf();
  let output = "Period, Student, First Name, Last Name, Power Up, lives, coins, calculatorNumber, sex,";
  output += " grade,  incidents, race, tardies, special programs,  reasons, comments, red coins";
  output += "\n";

  for(let p = 0; p < classes.length; p++){
    for(let s = 0; s < classes[p].students.length; s++) {
      let student = classes[p].students[s];
      
      output += classes[p].period + ", " + student.name + ",";
      output += student.firstName + ", " + student.lastName + ",";
      output += student.powerUp + "," + student.lives + ",";
      output += student.coins + ", " + student.calculatorNumber + ", " + student.sex + ",";
      output += student.grade + ", " + student.incidents + ", " + student.race + ", ";
      output += student.tardies + ", ";
      for(let i = 0; i < student.specialPrograms.length; i++) {
        output += student.specialPrograms[i] + ";";
      }
      output += ", ";
      for(let i = 0; i < student.reasons.length; i++) {
        output += student.reasons[i] + ";";
      }
      output += ", " + student.comments;
      output += ", " + student.redCoins;
      output += "\n";
     
    }
  }
 output += '';
  log.value = output;
}

function saveTextAsFile() {
	var textToWrite = log.value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "MarioClassroomLog" + dv + ".csv";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL !== null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}

function checkUndefined(stud) {
  return stud !== undefined;
}

function checkBlank(stud) {
    return stud !== "";
}

function downloadReport(p,s) {
  let student = classes[p].students[s];
  let tim = new Date();
  let t = tim.toLocaleTimeString();
  let da = tim.toLocaleDateString();
	var textToWrite = log.value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = student.lastName + '_' + student.firstName + '_' + da + "preliminaryDisciplinaryLogFile.csv";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL !== null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function gameOver(p,s) {
  let student = classes[p].students[s];
  student.incident += 1;
  let tim = new Date();
  let t = tim.toLocaleTimeString();
  let da = tim.toLocaleDateString();
  let output = "";
  output += "MARIO CLASSROOM DISCIPLINE LOG --- OFFICIAL FORM PENDING,,,,,,,,,,,,,,,,,,\n";
  //output += "BROWNFIELD HIGH SCHOOL STUDENT CONFERENCE REPORT,,,,,,,,,,,,,,,,,,\n";
  output += "Name:," + student.firstName + ' ' + student.lastName + ",,,,,,,Teacher Comments: (fill in below),\n";
  output += "Time:," + t + ", Date: ," + da + ",,,,," + student.comments.substr(0,100) + ",\n";
  output += "Sex:," + student.sex + ", Grade:, " + student.grade + ",,,,," + student.comments.substr(100,100) + ",\n";
  output += "Race:," + student.race + ",Sp. Programs:,";
  for (let i = 0; i < student.specialPrograms.length; i++) {
    output += student.specialPrograms[i] + ";";
  }
  output += ",,,,," + student.comments.substr(200,100) + ",\n";
  output += "Incident No:,"+ student.incidents + ",,,,,,," + student.comments.substr(300,100) + ",\n";
  output += ",,,,,,,," + student.comments.substr(400,100) + ",\n";
  output += "The above named student was sent to the office for the following reason(s):,,,,,,,," + student.comments.substr(500,100) + ",\n";
  
    output += ",";
    if (student.reasons.includes(1)) {
      output += "[X] Cheating ";
    }
    output += ",,,,,,," + student.comments.substr(600,100) + ",\n";
  
    output += ",";
    if (student.reasons.includes(2)) {
      output += "[X] Class Disruption ";
    }
    output += ",,,,,,," + student.comments.substr(700,100) + ",\n";
  
  output += ",";
  if (student.reasons.includes(3)) {
    output += "[X] Comes to Class Without Materials ";
  }
   output += ",,,,,,," + student.comments.substr(800,100) + ",\n";
  
    output += ",";
  if (student.reasons.includes(4)) {
    output += "[X] Defacing school property ";
  }
   output += ",,,,,,," + student.comments.substr(900,100) + ",\n";
  
    output += ",";
  if (student.reasons.includes(5)) {
    output += "[X] Disobedient/Disrespectful to teacher ";
  }
   output += ",,,,,,,,\n";
  
  output += ",";
    if (student.reasons.includes(6)) {
    output += "[X] Disrespect for Authority ";
  }  
  output += ",,,,,,,," + student.comments.substr(1000,100) + ",\n";   
  
  output += ",";
  if (student.reasons.includes(7)) {
    output += "[X] Excessive Absences ";
  }
  output += ",,,,,,,,,\n";

  output += ",";
  if (student.reasons.includes(8)) {
    output += "[X] Excessive talking ";
  }
  output += ",,,,,,,,,\n";
  
  
  output += ",";
    if (student.reasons.includes(9)) {
    output += "[X] Excessive Tardies ";
  }
  output += ",,,,,,,,,\n";
  
   output += ",";
   if (student.reasons.includes(10)) {
    output += "[X] Failure to participate in class ";
  }
  output += ",,,,,,Teacher Signature,,,\n"; 
  
  output += ",";
   if (student.reasons.includes(11)) {
    output += "[X] Failure to return forms ";
  }
  output += ",,,,,,,,,\n";
  
  output += ",";
   if (student.reasons.includes(12)) {
    output += "[X] Failure to Suit Out ";
  }
  output += ',,,,,,"Comments: (Student, Parent, or Administrator)",,\n';
  
  output += ",";
   if (student.reasons.includes(13)) {
    output += "[X] *Fighting ";
  }
  output += ",,,,,,,,\n";
  
  output += ",";
   if (student.reasons.includes(14)) {
    output += "[X] *Leaving Class without Permission ";
  }
  
  output += ",";
   if (student.reasons.includes(15)) {
    output += "[X] *Leaving School without Permission ";
  }
  output += ",";
   if (student.reasons.includes(16)) {
    output += "[X] *Profanity/Vulgarity ";
  }
  output += ",";
   if (student.reasons.includes(17)) {
    output += "[X] *Bus misconduct ";
  }
  output += ",,,,,,\n";
  
  output += ",";
   if (student.reasons.includes(18)) {
    output += "[X] *Smoking on School Grounds/ in Building ";
  }
  
  output += ",";
   if (student.reasons.includes(19)) {
    output += "[X] *Truancy ";
  }
  output += ",,,,,,,\n";
  
  output += ",";
   if (student.reasons.includes(20)) {
    output += "[X] Other (fill in below) ";
  }
  output += ",,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,Action Taken:,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += "*Refer to Administration,,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += "Students Attitude:,Good,Fair,Poor,,,,,,\n";
  output += "(Check one),,,,,,,,,\n";
  output += ",,,,,,,,,\n";
  output += "Referred To:,,,,,,,,,\n";
  output += "Follow-Up Conference Required:,,,,,,,,,\n";
  output += ",Yes,,,,,,,,\n";
  output += ",No,,,,,,,,\n";
  output += "Parents Notified:,Telephone,Note,Conference,,,,Signature,,\n";
  output += ",,,,,,,,,(Administrator)\n";
  log.value = output;
}

function loadSpreadSheet() {
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		let spShArray = textFromFileLoaded .split("\n");
    spShAr = [];
    for (i = 1; i < spShArray.length; i++) {
      let row = spShArray[i].split(",");
      spShAr.push(row);
    }
		// spShArray = spShArray.filter(checkUndefined);
		// spShArray = spShArray(checkBlank);

		document.getElementById("inputTextToSave").value = textFromFileLoaded;
    classes = [];
    periods = [];
    for (i = 0; i < spShAr.length; i++) {
      if (!periods.includes(spShAr[i][0])) {
          periods.push(spShAr[i][0]);
      } 
    }
    console.log(periods);
    classes = [];
    for (i = 0; i < periods.length; i++) {
      let period = {
        period: periods[i],
        students: []
      };
     classes.push(period);
    }
    console.log(classes);
    for (let i = 0; i < spShAr.length; i++) {
      let student = {
        name: spShAr[i][1],
        firstName: spShAr[i][2],
        lastName: spShAr[i][3],
        powerUp: parseInt(spShAr[i][4]),
        lives: parseInt(spShAr[i][5]),
        coins: parseInt(spShAr[i][6]),
        calculatorNumber: spShAr[i][7],
        lastItem: "block",
        sex: spShAr[i][8],
        grade: spShAr[i][9],
        incidents: spShAr[i][10], 
        race: spShAr[i][11],
        tardies: parseInt(spShAr[i][12]),
        specialPrograms: spShAr[i][12].split(";"),
        reasons: [],
        otherReasons: "",
        comments: "",
	redCoins: parseInt(spShAr[i][16])
      };
      if (student.lives < 3 || isNaN(student.lives)) {
        student.lives = 3;
      }
      if (student.powerUp < 1 || isNaN(student.powerUp)) {
        student.powerUp = 1;
      }
      if (isNaN(student.coins)) {
        student.coins = 0;
      }
      if (isNaN(student.redCoins)) {
        student.redCoins = 0;
      }
       for (let j = 0; j < classes.length; j++) {
         if (classes[j].period === spShAr[i][0]) {
           classes[j].students.push(student);
         }
       }
    }
    start();
    console.log(classes);
    
  };
	fileReader.readAsText(fileToLoad, "UTF-8");
	
}

function randomElementOf(theArray) {
  return theArray[Math.floor(Math.random() * theArray.length)];
}

function couch(p) {
  let output = "<div class='bellwork'>";
  couchRoster = [];
  let personOnCouch = "No one";
  for (let i = 0; i < classes[p].students.length; i++) {
    let student = classes[p].students[i];
    if (student.powerUp == 3){
      couchRoster.push(student.name);
    }
  }
  if (couchRoster.length > 0) {
   personOnCouch = randomElementOf(couchRoster);
  } 
  output += personOnCouch + reward;

  output += '</div>'; 
  document.getElementById("couch").innerHTML = output;
}

function showSeatingChart(p) {
  output = '<img id="seatChartImg" src ="images/seatingCharts/period' + classes[p].period + '.png" width=100%>';
  output += '<br><img id="hintImg" src ="images/seatingCharts/hint.png" width=100%>';
  document.getElementById('seatingChart').innerHTML = output;
  document.getElementById('seatingChart').style.display='block';
  document.getElementById('seatingChartButton').innerHTML = "<button onclick='hideSeatingChart()'>Hide Seating Chart</button>";
}

function hideSeatingChart() {
  document.getElementById('seatingChart').style.display='none';
  output = "";
  for (i = 0; i < classes.length; i++){
   output += "<button onclick='showSeatingChart(" + i + ")'>SC" + 	classes[i].period + "</button>";
  }
  document.getElementById('seatingChartButton').innerHTML = output;
}


start();

// start timer


function showTime() {
  minute = Math.floor(seconds / 60);
  second = Math.floor(seconds % 60 * 10) / 10;
  if (second < 10) {
    time = minute.toString() + ":0" + second.toString();
  } else {
    time = minute.toString() + ":" + second.toString();
  }
  document.getElementById("timer").innerHTML = time;
}

function breakMinus(n) {
  /*
  if (brk > n-1) {
    brk -= n;
  }
  */
  for(let i = 0; i < agenda.length; i++) {
    if (agenda[i].mode === "Break") {
      agenda[i+1].min += agenda[i].min;
      agenda[i].min = 0;
      document.getElementById("breakButt").innerHTML = "No Break";
      if (mode=='Break'){
        seconds = agenda[i].min * 60;
         showTime();
      }
    }
  }
}

function changeTimer() {
  if (seconds > 0) {
    seconds -= 1;
  } else {
    agendaItem += 1;
    if (agendaItem === agenda.length) {
      //getPeriod();
    } else {
    mode = agenda[agendaItem].mode;
    seconds = agenda[agendaItem].min * 60;
    timeSound.play();
    }
  }
  document.getElementById("test").innerHTML = mode;
  showTime();  
}

function startTimer() {
  countdown = window.setInterval(changeTimer, 1000);
  document.getElementById('timerButts').style.display='none';
}

function stop() {
  running = false;
  clearInterval(countdown);
  document.getElementById('timerButts').style.display='inline';
}

function getPeriod() {
  for(let i = 0; i < agenda.length; i++) {
    if (agenda[i].mode === "Break") {
      agenda[i].min = agenda[i].const;
      agenda[i+1].min = agenda[i+1].const;
      document.getElementById("breakButt").innerHTML = "Break";
     }
    }
  Period = 3;
  let dt = new Date();
  let hour = dt.getHours();
  let minute = dt.getMinutes();
  let TIM = hour*60 + minute; // Time in Minutes
  for(let i = 0; i < bellSchedule.length; i++) {
    let PS = bellSchedule[i].SH*60 + bellSchedule[i].SM;
    let PE = bellSchedule[i].EH*60 + bellSchedule[i].EM;
    if (TIM > PS && TIM < PE) {
      periodIndex = i;
      Period = bellSchedule[i].period;
      TIP = TIM - PS;
    }
  }
  let sumOfTheTimes = 0;
  let check = TIP;
  for (let i = 0; i < agenda.length; i++) {
  if (check < agenda[i].min) {
    agendaItem = i;
    mode = agenda[i].mode;
    seconds = (agenda[i].min - check)*60;

    startTimer();
    document.getElementById('timerButts').style.display='none';
    for(let j = 0; j < classes.length; j++){
      if(parseInt(classes[j].period) == Period){
         //couch(j);
         loadClass(j);
         showSeatingChart(j);
         return;
      }
    }
    return;
  }
  sumOfTheTimes += agenda[i].min;
  check = TIP - sumOfTheTimes;
  }
}

hideSeatingChart();
