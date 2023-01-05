'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    let myInput = req.query.input

    let myNumber = convertHandler.getNum(myInput);
    let myUnit = convertHandler.getUnit(myInput);

    if (myNumber == "invalid number" && myUnit == "invalid unit") return res.send("invalid number and unit")
    
    if (myNumber == "invalid number") return res.send(myNumber)
    
    if (myUnit == "invalid unit") return res.send(myUnit)
    
    // If input doesn't fall into case above, continues
    let myReturnNumber = convertHandler.convert(myNumber,myUnit);

    let myReturnUnit = convertHandler.getReturnUnit(myUnit);

    let myString = convertHandler.getString(myNumber,myUnit,myReturnNumber,myReturnUnit);

    return res.json({initNum: myNumber, initUnit: myUnit, returnNum: myReturnNumber, returnUnit: myReturnUnit, string: myString});
  });
};
