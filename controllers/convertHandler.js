const { init } = require("create-react-app/createReactApp");

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    // Define regular expression to extract integer, float or fraction numbers
    let regEx = /[\d\.\/]+/;

    // Extract number from string
    let numberString;
    let numberArray = input.match(regEx);
    if (numberArray) {
      numberString = numberArray[0];
    } else {
      numberString = null;
    }

    // Check if number is null, integer, decimal or fraction and return result accordingly
    if (numberString === null) {
      result = 1
    } else if (numberString.includes("/")) {
      let divisionNumbers = numberString.split("/");

      if (divisionNumbers.length > 2 || divisionNumbers[1] == 0) {
        result = "invalid number";
      } else {
        result = divisionNumbers[0] / divisionNumbers[1];
      }
    } else {
      result = numberString * 1
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;

    // Define regular expression to extract integer, float or fraction numbers
    let regEx = /[\d\.\/]+/;

    // Get string without the characters defined in the regular expression
    let myUnit = input.replace(regEx, "").toLowerCase()

    // Switch "l" to "L"
    if (myUnit === "l") {
      myUnit = "L";
    }

    // Create array of units supported by the app
    let unitsArray = ["gal", "L", "mi", "km", "lbs", "kg"]

    // Return unit string if valid or error message if invalid
    if (unitsArray.includes(myUnit)) {

      result = myUnit
    } else {
      result = "invalid unit"
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    // Evaluate initUnit and return unit accordingly
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = "invalid unit"
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    let lowerCaseUnit = unit.toLowerCase()

    // Get  unit spelling according to output from this.getReturnUnit "gal", "l", "mi", "km", "lbs", "kg"
    switch (lowerCaseUnit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        result = "invalid unit"
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    // Convert numbers based on units "gal", "L", "mi", "km", "lbs", "kg"
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = "invalid input";
    }

    if (result !== "invalid input" && result % 1 !== 0) {
      result = parseFloat(result.toFixed(5));
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    // Set string for output
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
