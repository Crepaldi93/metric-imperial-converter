const { init } = require("create-react-app/createReactApp");

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    // Define regular expression to extract integer, float or fraction numbers
    let regEx = /[\d\.\/]+/;

    // Extract number from string
    let numberString = input.match(regEx);

    // Check if number is null, integer, decimal or fraction and return result accordingly
    if (!numberString) {
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

    // Create array of units supported by the app
    let unitsArray = ["gal", "l", "mi", "km", "lbs", "kg"]

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
      case "l":
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

    // Convert numbers based on units "gal", "l", "mi", "km", "lbs", "kg"
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
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
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
