// Declare global variables
let sides;
let shape;

//Test function
let testscript = function()
{
    alert("Hey my script is running!");
}

/**
 * This function takes in an input and alerts the name of the polygon to the browser.
 * @returns nothing, this was to end the program if there is no entry 
 */
let nameThatPolygon = function()
{
    sides = prompt("The Purple Trusting Hydra would like to know how many sides the polygon has (Please enter a number between 0 and 19):");

    if (sides === null || sides === "") {
        alert("No enrty!");
        return;
    }

    shape = getShape(validateEntry(sides));
    alert(shape);
}

/**
 * This method checks to see if the input is a numeric value and returns it to the main function.
 * If it is not a number, it will loop and ask for a new entry. If the value is out of range, it will loop until an entry is in range.
 * @param {The number of sides the polygon has} sides 
 * @returns the number of sides the polygon has
 */
let validateEntry = function(sides)
{
    if (isNaN(sides))
    {
        do
        {
            sides = prompt("That is not a number! Please enter a number between 0 and 19!");
        } while (isNaN(sides) || sides === "")
    }

    if (Math.round(sides) > 19 || Math.round(sides) < -19)
    {
        do
        {
            sides = prompt("That number is not in range! Please enter a number between 0 and 19");
        } while ((Math.round(sides) > 19 || Math.round(sides) < -19) || sides === "")
    }

    sides = Math.round(sides);

    if (sides < 0)
    {
        sides = Math.abs(sides);
    }

    return sides;
}

/**
 * This method takes the number of side a polygon has and returns the string that contains the name of the polygon.
 * @param {The number of sides the polygon has} sides 
 * @returns a string of the name of the polygon.
 */
let getShape = function (sides)
{
    switch(parseInt(sides))
    {
        case 0:
            return "No sides, not a polygon!";
        case 1:
            return "1 side, this is just a line!";
        case 2:
            return "This is a digon!";
        case 3:
            return "This is a triangle or trigon!";
        case 4:
            return "This is a quadrilateral or tetragon!";
        case 5:
            return "This is a pentagon!";
        case 6:
            return "This is a hexagon!";
        case 7:
            return "This is a heptagon or septagon!";
        case 8:
            return "This is a octagon!";
        case 9:
            return "This is a nonagon or eneagon!";
        case 10:
            return "This is a decagon!";
        case 11:
            return "This is a hendecagon!";
        case 12:
            return "This is a dodecagon!";
        case 13:
            return "This is a tridecagongon!";
        case 14:
            return "This is a tetradecagon!";
        case 15:
            return "This is a pentadecagon!";
        case 16:
            return "This is a hexadecagon!";
        case 17:
            return "This is a heptadecagon!";
        case 18:
            return "This is a octadecagon!";
        case 19:
            return "This is a enneadecagon!";
        default:
            return "This should not happen.";
    }
}