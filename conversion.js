import currencyapi from '@everapi/currencyapi-js';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

class Length {
    constructor(unit, value) {
        this.unit = unit;
        this.value = value;
    }

    convert() {
        switch(this.unit) {
            case "inches":
                return this.value / 2.54;
            case "centimeters":
                return this.value * 2.54;
            default:
                return "Error: Unknown unit";
        }
    }
}

class Weight {
    constructor(unit, value) {
        this.unit = unit;
        this.value = value;
    }

    conversion() {
        switch(this.unit) {
            case "pounds":
                return this.value / 2.205;
            case "kilograms":
                return this.value * 2.205;
            default:
                return "Error: Unknown unit";
        }
    }
}

class Temperature {
    constructor(unit, convertTo, value) {
        this.unit = unit;
        this.convertTo = convertTo;
        this.value = value;
    }
    conversion() {
        switch (this.unit) {
            case "fahrenheit":
                if (this.convertTo == "celsius") {
                    return (this.value - 32) * 5 / 9;
                } else if (this.convertTo == "kelvin") {
                    return (this.value - 32) * 5 / 9 + 273.15;
                }
            case "celsius":
                if (this.convertTo == "fahrenheit") {
                    return this.value * 9 / 5 + 32;
                } else if (this.convertTo == "kelvin") {
                    return this.value + 273.15;
                }
            case "kelvin":
                if (this.convertTo == "fahrenheit") {
                    return (this.value - 273.15) * 9 / 5 + 32;
                } else if (this.convertTo == "celsius") {
                    return this.value - 273.15;
                }
            default:
                return "Error: Unknown unit";
        }
    }
        
}

class Currency {
    constructor(unit, value) {
        this.unit = unit;
        this.value = value;
    }
    async conversion() {
        try {
            let apiKey = "cur_live_QibFADNuLxDZ0Sd0VvxDgkOVFCHd8KE0AmfqOcWc"
            const response = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=EUR%2CUSD%2CDKK&base_currency=${this.unit}`);
            const rates = response.data.data;
            let currencyArray = Object.keys(rates).map(currencyCode => parseFloat(rates[currencyCode].value.toFixed(2)));

            return currencyArray;
        } catch (error) {
            console.log(error);
        }
    }
}

class Grades {
    constructor(unit, value) {
        this.unit = unit;
        this.value = value;
    }
    async conversion() {
        let con = mysql.createConnection({
            host: process.env.HOST, // Your database host
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        });
        let unit = this.unit;
        let value = this.value;

        let result = await con.connect(function(err) {
            if (err) throw err;
            if (unit == "US") {
                let sql = mysql.format("SELECT cDenmark FROM converter.grades WHERE cUSA=?", [value])
                con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result[0]);
                    return result[0];
                  });
            } else if (unit == "DK") {
                let sql = mysql.format("SELECT cUSA FROM converter.grades WHERE cDenmark=?", [value])
                con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result[0]);
                    return result[0];
                });
            } else {
                return "Error: Unknown unit";
            }
        })
        return result;
    }
}

const length = new Length("inches", 10);
const weight = new Weight("pounds", 10);
const temperature = new Temperature("celsius", "kelvin", 10);
const currency = new Currency("DKK");
const grades = new Grades("US", "A");

console.log(length.convert());
console.log(weight.conversion());
console.log(temperature.conversion());
console.log(await currency.conversion());
console.log(await grades.conversion());

export default { Length, Weight, Temperature, Currency, Grades };