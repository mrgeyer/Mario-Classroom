Thank you for checking out the Mario Classroom web app. While I have used this in my classroom, I would still classify this as being in the alpha stage. There are still some bugs that I am aware of. I am not currently planning on updating this version of the app. In the future, I plan on making a more robust system that will run on a server instead of simply using JavaScript. However, it may be a while until I can make that. 


I made this app mostly for my own use. While it is a simple app, it may not be intutitive for people who are not familiar with JSON and basic web development. Hopefully, the following instructions are succificient for you to use the app. 

Some features I may consider adding if there are demand for them: a reset button for the timer and a way to upload and download agendas and bell schedules.

Note: Currently, the blackboard does not work in Chrome unless you set up a localhost server on your computer, and the download button does not work in Firefox. 

If you want to leave feedback or suggestions, please use the Issues tap at the top of the page. Then click New issue unless you see the issue listed.

Demo: https://mrgeyer.github.io/Mario-Classroom/

# Getting Started

## Download

Click Clone or Download and then Download ZIP. Extract the ZIP file.



If you have a Github account, you could also fork it and then use Github.io. However, you may need to change the code to load the seating chart images on your computer if you do not want them to be public. 

If you do not want to use the timer or the seating chart features, you can use the github.io page: https://mrgeyer.github.io/Mario-Classroom/

## Run

To run the program, double click on the index.htm file.

## Create a CSV file

To expedite the creation of the CSV file, you can click Spreadsheet Log and then click Save Log. This will make the headers for you. You can open this in a spreadsheet program.

If you make a CSV file from scratch using spreadsheet software, use the following headers: Period,	 Student,	 First Name,	 Last Name,	 Power Up,	 lives,	 coins,	 calculatorNumber,	 sex,	 grade,	  incidents,	 race,	 tardies,	 special programs,	  reasons,	 comments,	 red coins


You only need to fill out Period, Student, First Name, Last Name, Power Up, lives, coins, incidents, tardies, and red coins. 

- Enter the class period for each student under Period.
- Enter the student's name as you want it to appear on the screen. If your student goes by a nickname, this is where you would put the nick name.
- Enter the student's first and last name as you want them to appear on the discipline report under First Name and Last Name.
- Put 1 for PowerUp unless you want the student to start with a powerup. Put 2 if you want them to start with the mushroom. Put 3 if you want them to start with the fire flower
- Enter 3 for lives unless you want them to start with more than 3 lives. Any amount of lives less than 3 will be changed to 3.
- Enter 0 for coins unless you want them to start with extra coins.
- Enter 0 for incidents and tardies unless the student has previous incidents or tardies. These are for the discipline report.
- Enter 0 for red coins unless the class has earned red coins already. The red coins are for class wide rewards. However, red coins are tracked by individual students because of the set up of the data system. These will be added up, so only add it to one student's total.

You can leave the other fields blank. These are mostly for the discipline report. Fill out Sex, Grade, and Special Programs if you want those to populate on the discipline report. Seperate special programs using a colon: i.e. band, chior, basketball.

The calculator number field is not being used at this time, but it is on the spreadsheet in case I want to add that feature later. This could be used for a pick a random calculator number feature. If you assigned calculator numbers, you can enter them here, but it is not necessary.

Do not enter anything in the reasons or comments columns.

Make sure to save your spreadsheet as a CSV file.

## Load your CSV file. 

Click Choose File and select your file (If you downloaded it, it should be in your downloads folder). Then, click Import. Then, click Show Buttons to update the buttons.

## Save

To save, click Spreadsheet Log and then click Save Log. 

Note: If you're using FireFox, you may have to copy the text box and paste it into a text editor. Save it as a .csv file if you want to open it in a spreadsheet program. It will still work in Mario Classroom if you save it as a text file.

Save periodically throughout the day in case the computer crashes.

## Seating Chart

To add seating charts, create an image of your seating chart and save it as a png. It should be named period#.png and saved in the seatingCharts folder in the images folder. i.e. period1.png, period2.png, etc.

To add a hint for the bellwork to display with the seating chart, save it as hint.png in the images/seatingCharts folder

To use the seating chart, click the SC buttons at the top of the screen. Click Hide Seating Chart to hide the seating chart and hint. The Get Period button on the timer will also automatically display the seating chart.

## Timer Feature

To use the timer feature, you need to edit the agenda and bell schedule in the mario.js file in the scripts folder.
Make sure to maintain the JSON format. 

### Bell Schedule
- The bell schedule is an array called BellSchedule
- It should start with <code>BellSchedule = [</code>
- and end with with <code>];</code>
- Start each entry for each period with { and end each entry with a },.
- Enter the period after period.
- Enter the hour the period starts after SH:.
- Enter the minute the period starts after SM:.
- Note: You may want to set the start time to be when the last period ends or when the passing period begins. 
- Enter the hour the period ends after EH:.
- Enter the minute the period ends after EM.:
It should look like this:
<code>
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
  </code>
  
  ### Agenda
- The agenda is an array called agenda
- It should start with <code>agenda  = [</code>
- and end with with <code>];</code>
- Start each entry for each period with { and end each entry with a },.
- Enter your agenda items after agenda:.
- Enter the number of minutes for each agenda item after min: and const:.
- The const property is for resetting the minutes if the break button feature is used.
- The initial property is not currently being used. It can be ommitted. 
-
It should look like this:
<code>
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
  </code>
  
## Using the timer

After you enter your bell schedule and agenda, you should be able to run the timer by clicking Get Period. As long as your clock settings on your browser match your bell schedule, it should start the timer during your class period. You can stop the timer by clicking stop. To resume the timer at the pace of your agenda, click Get Period to start it again. To start where you left off, click start. 

If Get Period does not work, then you can click Start to use the timer. However, if you need to reset the timer, you may need to refresh the Browser. Make sure you save your Spreadsheet Log by clicking Spreadsheet Log and then Export before refreshing. Then you will need to load the Spreadsheet Log again by clicking Choose File and selecting your file (If you downloaded it, it should be in your downloads folder). Then, click Import. Then, click Show Buttons to update the buttons. Then you can click Start again. 

If this becomes an issue for you, please click the Issue tab and share your issue with it and I will consider making a Reset button for the timer. 

## Set up email feature
- Ask your administrators about email policies before using this feature.
- Enter email addresses of your administrators that you want to send emails to in the quotes where it says <code>emailaddresses = "";</code>
- Make sure to seperate email addresses with a ;
- You can also use the <code>emailaddresses += "";</code> to add more email addresses on another line. 
- Enter the subject of the email in the "" where it says <code>subject = "";</code>
- Enter the message text of the email in the "" where it says <code>body = "";</code>

# Participation and Discipline Features

- If you class is not loaded, click the period number at the top to load the class.
- When a student participates in class, click the ? box.
- When a student is tardy, click the red turtle. 
- When the class earns a red coin for a whole class reward, click the red coin by an individual student. Only click one. 
- If a student is not on task, click the turtle. They will lose a power up. If they do not have a power up, they will lose a life. If they have no lives, they will be put in game over status.
- If a student is disrupting class, click the lava. They will lose a life. If they have no lives, they will be put in game over status.
- If a student is using profanity or doing something that requires being sent to the principal, click the POWER button. They will be put in game over status.
- Once a student is in game over status, click on GAME OVER to generate a report and DR to download the report. 
- To send an email to administrators, click the SEND link. However, you have to add emails and the message you want to send for this to work.

# Couch feature

- If you happen to have a couch, you can click the C# button at the top to pick a student who has a fire flower to sit on the couch. If you don't have a couch, you can edit the mario.js code to change the reward to something else where it says reward = " is on the couch today."

# Blackboard feature

-To use the blackboard feature on Chrome, you will need to set up a <a href="https://gist.github.com/jgravois/5e73b56fa7756fd00b89">local host server</a> on your computer. 
- To pick a color, click on the color on the right side.
- To make the pen bigger or smaller, click the + or - respectively. 
- To erase a portion of the screen, click the small e. Then click a color to draw again.
- To erase the whole screen, click the large E.

That should be all the features. If you have any questions, submit them using the Issues tab.
