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
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
