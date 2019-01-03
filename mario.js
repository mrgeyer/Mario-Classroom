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
        comments: ""
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
        comments: ""
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
        comments: ""
      }
    ] // close students
  }
];

height = 64;
var d = Date();
var dv = d.valueOf();

var dieSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_mariodie.wav');
var powerUpSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_powerup.wav');
var gameOverSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_gameover.wav');
var coinSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_coin.wav');
var hitSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_pipe.wav');
var oneUpSound = new Audio('https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/sounds/smb_1-up.wav');

log = document.getElementById("inputTextToSave");
buttons = document.getElementById("buttons");
butt2 = document.getElementById("butt2");

function start() {
  let output = "";
  for (let i = 0; i < classes.length; i++) {
    output +=
      "<button onClick='loadClass(" + i + ")'> " + classes[i].period + " </button>";
  }
  butt2.innerHTML = output;
}

function loadClass(n) {
  let output = "";
  
  for (let i = 0; i < classes[n].students.length; i++) {
    let student = classes[n].students[i];
    output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/images/powerUps/";
    output += student.powerUp + ".png' height="+ height + "> ";
    output += student.name + " x " + student.lives;
    output += " $";
    if (student.coins < 10){
      output += " ";
    }
    output += student.coins;
    
    if (student.lives < 1) {
      output += " <button class='picButt' onClick='gameOver(" + n + ", " + i + ")'>";
      output += " GAME OVER</button> ";

     output += " <button class='picButt' onClick='downloadReport(" + n + ", " + i + ")'>";
      output += " DR</button> ";
      
      
    } else {
       output += " <button class='picButt' onClick='item(" + n + ", " + i + ")'>";
       output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
       output += "Classroom/master/images/buttons/";
       output += student.lastItem + ".png' height="+ height + "></button> ";

      output += " <button class='picButt' onClick='enemy(" + n + ", "  + i + ", 1)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/images/buttons/goomba.png' height=";
      output += height + "></button> ";

      output += " <button class='picButt' onClick='enemy(" + n + ", " + i + ", 2)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/greenTurtle.png' height=" + height + "></button>  ";

      output += " <button class='picButt' onClick='enemy(" + n + ", " + i + ", 3)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/redTurtle.png' height=" + height + "></button>  ";

      output += " <button class='picButt' onClick='enemy(" + n + ", " + i + ", 4)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-";
      output += "Classroom/master/images/buttons/beetle.png' height=" + height + "></button>  ";    

      output += " <button class='picButt' onClick='pit(" + n + ", " + i + ", 1)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/images/buttons/lava.png' height=";
      output += height + "></button>  ";

      output += " <button class='picButt' onClick='pit(" + n + ", " + i + ", 2)'>";
      output += "<img src='https://raw.githubusercontent.com/mrgeyer/Mario-Classroom/master/images/buttons/water.png' height=";
      output += height + "></button>  ";
    }
    output += "<br />";
  }
  buttons.innerHTML = output;
}

function item(p,s){
  let student = classes[p].students[s];
  let number = Math.floor(Math.random()*100);
  if (number > 95) {
    student.lastItem = "1up";
    student.lives += 1; 
    oneUpSound.play();
  } else if(number > 70) {
     switch (student.powerUp){
       case 0:
        break;
       case 1:
        student.lastItem = "mushroom";
        student.powerUp = 2;
        break;
       case 2:
       case 3:
        student.lastItem = "flower";
        student.powerUp = 3;
        break;
     }
    powerUpSound.play();
  } else if(number > 60) {
     student.lastItem = "20coin";
     student.coins += 20;
     coinSound.play();
  } else if(number > 40) {
     student.lastItem = "5coin";
     student.coins += 5;
     coinSound.play();
  } else {
     student.lastItem = "coin";
     student.coins += 1;
     coinSound.play();
  }
  if (student.coins > 100) {
    student.lives += 1;
    student.coins = student.coins%100;
  }
  student.comments += student.name + " was participating in class. ";
  student.comments += "The teacher recognized the student's contribution to class. ";
  loadClass(p);
}

function enemy(p,s,e) {
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
      student.comments += " The teacher gave the student a direct warning. ";
      student.reasons.push(3);
      break;
    case 2:
      student.comments += student.firstName + " was off task and refused to participate in class. ";
      student.comments += "The teacher gave the student a direct warning. ";
      student.reasons.push(9);
      break;
    case 3:
      student.comments += student.firstName + " was talking about an unrelated topic during the lesson ";
      student.comments += "and disrupting class. ";
      student.comments += "The teacher gave the student a direct warning. ";
      student.reasons.push(8); // Excessive talking
      student.reasons.push(2); // Class disruption
      break;
    case 4:
      student.tardies += 1;
      student.comments += student.firstName + " was tardy for the " + student.tardies;
      if (student.tardies === 1) {
        student.comments += "st ";
      }
      if (student.tardies ===2) {
        student.comments += "nd ";
      }
      if (student.tardies === 3){
        student.comments += "rd ";
      }
      if (student.tardies > 3){
        student.comments += "th ";
      }
      student.comments += "time today. ";
      student.comments += " The teacher gave the student a direct warning. ";
      break;
    default:
      student.comments += "The teacher gave the student a direct warning. ";
  }
}


function pit(p,s,e) {
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
      student.comments += student.name + " used profanity toward the teacher. ";
      student.comments += " The teacher gave the student a direct warning. ";
      break;
    case 2:
      student.comments += student.name + " used profanity toward a student. ";
      student.comments += " The teacher gave the student a direct warning. ";
      break;
    default:
      student.comments += " The teacher gave the student a direct warning. ";
  }
}

function exportData() {
  let output = "Period, Student, First Name, Last Name, Power Up, lives, coins, calculatorNumber, sex,";
  output += " grade,  incidents, race, tardies, special programs,  reasons, comments";
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
	var fileNameToSaveAs = student.lastName + '_' + student.firstName + '_' + da + ".csv";

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
  let output = "BROWNFIELD HIGH SCHOOL STUDENT CONFERENCE REPORT,,,,,,,,,,,,,,,,,,\n";
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
      output += "[√] Cheating ";
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
  output += ",,,,,,,,  \\              |   |   |     |  ,\n";

  output += ",";
  if (student.reasons.includes(8)) {
    output += "[X] Excessive talking ";
  }
  output += ",,,,,,,,  |\\.         -|--|-  |\\_/|     _                 _      _,\n";
  
  
  output += ",";
    if (student.reasons.includes(9)) {
    output += "[X] Excessive Tardies ";
  }
  output += ",,,,,,,, /  |   /  /\\ |   |   |_    |   /_\\             /_\\    |\\,\n";
  
   output += ",";
   if (student.reasons.includes(10)) {
    output += "[X] Failure to participate in class ";
  }
  output += ",,,,,,Teacher Signature,,|__/`\\_\\/  \\   \\  / ___/_/\\___|_|_/\\___| ,\n"; 
  
  output += ",";
   if (student.reasons.includes(11)) {
    output += "[X] Failure to return forms ";
  }
  output += ",,,,,,,,                                                 ___/,\n";
  
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
        powerUp: spShAr[i][4],
        lives: spShAr[i][5],
        coins: spShAr[i][6],
        calculatorNumber: spShAr[i][7],
        lastItem: "block",
        sex: spShAr[i][8],
        grade: spShAr[i][9],
        incidents: spShAr[i][10], 
        race: spShAr[i][11],
        tardies: spShAr[i][12],
        specialPrograms: spShAr[i][12].split(";"),
        reasons: [],
        otherReasons: "",
        comments: ""
      };
      if (student.lives < 3) {
        student.lives = 3;
      }
      if (student.powerUp < 1) {
        student.powerUp = 1;
      }
       for (let j = 0; j < classes.length; j++) {
         if (classes[j].period === spShAr[i][0]) {
           classes[j].students.push(student);
         }
       }
    }
    console.log(classes);
    start();
  };
	fileReader.readAsText(fileToLoad, "UTF-8");
	
}

start();
