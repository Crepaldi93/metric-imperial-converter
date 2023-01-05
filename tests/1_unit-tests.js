const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Function convertHandler.getNum(input)', () => {
        test('Whole number input', (done) => {
            let input = '7km';
            assert.equal(convertHandler.getNum(input), 7);
            done();
        });

        test('Decimal input', (done) => {
            let input = '9.4kg';
            assert.equal(convertHandler.getNum(input), 9.4);
            done();
        });

        test('Fractional input', (done) => {
            let input = '3/2L';
            assert.equal(convertHandler.getNum(input), 1.5);
            done();
        });

        test('Fractional input with decimal', (done) => {
            let input = '8.4/2KM';
            assert.equal(convertHandler.getNum(input), 4.2);
            done();
        });

        test('Double Fraction', (done) => {
            let input = '4/3/2kg';
            assert.equal(convertHandler.getNum(input), "invalid number");
            done();
        });

        test('No number input', (done) => {
            let input = 'Km';
            assert.equal(convertHandler.getNum(input), 1);
            done();
        });
    });

    suite('Function convertHandler.getUnit(input)', () => {
        test('For each valid input', (done) => {
            let input = ["gal", "GAL", "l", "L", "mi", "MI", "km", "KM", "lbs", "LBS", "kg", "KG"];

            input.forEach((item) => {
                if (item == "l" || item == "L") {
                    assert.equal(convertHandler.getUnit(item), "L");
                } else {
                    assert.equal(convertHandler.getUnit(item), item.toLowerCase());
                }
            });

            done();
        });

        test('Invalid input', (done) => {
            let input = '64abc';
            assert.equal(convertHandler.getUnit(input), "invalid unit");
            done();
        });
    });

    suite('Function convertHandler.getReturnUnit(initUnit)', () => {
        test('For each valid input unit', (done) => {
            let input = ["gal", "L", "mi", "km", "lbs", "kg"];
            let expect = ["L", "gal", "km", "mi", "kg", "lbs"];

            input.forEach((i,j) => {
                assert.equal(convertHandler.getReturnUnit(i), expect[j]);
            });

            done();
        });
    });

    suite('Function convertHandler.spellOutUnit(unit)', () => {
        test('For each valid input unit', (done) => {
            let input = ["gal", "L", "mi", "km", "lbs", "kg"];
            let expect = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"];

            input.forEach((i,j) => {
                assert.equal(convertHandler.spellOutUnit(i), expect[j]);
            });

            done();
        });
    });

    suite('Function convertHandler.convert(initNum, initUnit)', () => {
        test('For input "gal"', (done) => {
            let input = "gal";
            assert.equal(convertHandler.convert(1,input), 3.78541);
            done();
        });

        test('For input "L"', (done) => {
            let input = "L";
            assert.equal(convertHandler.convert(1,input), 0.26417);
            done();
        });

        test('For input "mi"', (done) => {
            let input = "mi";
            assert.equal(convertHandler.convert(1,input), 1.60934);
            done();
        });

        test('For input "km"', (done) => {
            let input = "km";
            assert.equal(convertHandler.convert(1,input), 0.62137);
            done();
        });

        test('For input "lbs"', (done) => {
            let input = "lbs";
            assert.equal(convertHandler.convert(1,input), 0.45359);
            done();
        });

        test('For input "kg"', (done) => {
            let input = "kg";
            assert.equal(convertHandler.convert(1,input), 2.20462);
            done();
        });
    })
});