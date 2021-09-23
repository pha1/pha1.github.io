// Declare global variables.
let companyName = "Purple Trusting Hydra";
let today = new Date();
let userName;
let howAreYou;

// Test function
let testScript = function() {

    alert("Hey my script is running!");
}

/**
 * This method returns today's date via Date object created.
 * @returns date, today's date in YYYY-MM-DD format.
 */
let showDate = function() {
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    return date;
}

/**
 * This method returns the current time.
 * @returns time, the current time in HH:MM:SS format.
 */
let showTime = function() {
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

/**
 * This method dsplays the "Welcome message".
 */
let greetingMessage = function() {
    do {
        userName = prompt("Please enter your name");
    } while(userName !== null && userName === "") 

    do {
        howAreYou = prompt("How are you doing today?");
    } while(howAreYou !== null && howAreYou === "")

    document.getElementById("display").innerHTML='<font size=20;">Welcome to the page!</font>' + "<br>Today is " + showDate() + ", and the time is: " + showTime() + "<br>The " + companyName + " welcomes you, " + userName + "!"
        + " We're glad you are doing " + howAreYou.toLowerCase() + "!";
}

/**
 * This method calculates MPG
 */
let calculateMPG = function() {

    let miles = prompt("Enter miles driven:");
    let gallonsOfGas = prompt("Enter gallons of gas used:");

    let milesPerGallon = parseInt(miles) / parseInt(gallonsOfGas);
    alert("Miles per gallon = " + milesPerGallon + "\nThanks for using the MPG Application!");
}

/**
 * This method calculates average test scores.
 */
let calculateTestScores = function() {

    let testScore1 = prompt("Enter first test score:");
    let testScore2 = prompt("Enter second test score:");
    let testScore3 = prompt("Enter third test score:");
    let testScore4 = prompt("Enter fourth test score:");

    let avgTestScore = (parseInt(testScore3) + parseInt(testScore1) + parseInt(testScore2) + parseInt(testScore4)) / 4;

    alert("Test Score 1 = " + testScore1 + "\nTest Score 2 = " + testScore2 + "\nTest Score 3 = " + testScore3 + "\nTest Score 4 = " + testScore4 + "\nAverage Test Score is: " + avgTestScore);
}

let openNewWindow = function() {
    window.open('https://webpages.uncc.edu/pha1/itis3135/brand-purple-trusting-hydra.html');
}

let calculateTheAreaOfACircle = function() {
    
    let radius = prompt("Enter the radius of the circle:");
    let areaOfCircle = Math.PI * radius * radius;

    alert("The area of the circle with " + radius + " radius is : " + areaOfCircle);
}

let openWhatIsThisPage = function() {
    window.open('https://webpages.uncc.edu/pha1/itis3135/whatisinthis/WHAT%20is%20THIS%20webP@GE&.htm', "anotherWindow", "width=300, height=150");
}