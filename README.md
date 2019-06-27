Thank you for checking out the Mario Classroom web app. While I have used this in my classroom, I would still classify this as being in the alpha stage. There are still some bugs that I am aware of. I am not currently planning on updating this version of the app. In the future, I plan on making a more robust system that will run on a server instead of simply using JavaScript. However, it may be a while until I can make that. I

f you want to leave feedback or suggestions, please use the Issues tap at the top of the page. Then click New issue unless you see the issue listed.

Demo: https://mrgeyer.github.io/Mario-Classroom/

# Getting Started

## Download

Click Clone or Download and then Download ZIP. Extract the ZIP file.

Note: Currently, the blackboard does not work in Chrome, and the download button does not work in Firefox. 

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

To add a hint for the bellwork to display with the seating chart, save it as hint.png in the images/seatingCharts folder.

## Timer Feature

To use the timer feature, you need to edit the agenda and bell schedule in the mario.js file in the scripts folder.
Make sure to maintain the JSON format. 

### Bell Schedule
- The bell schedule is an array called BellSchedule
- It should start with <code>BellSchedule = [</code>
- and end with with ];
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


