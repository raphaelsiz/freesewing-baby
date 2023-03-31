//import axios from 'axios';
import dotenv from 'dotenv';
import {Brian} from '@freesewing/brian';
import {Aaron} from '@freesewing/aaron';
import {Charlie} from '@freesewing/charlie'
import {pluginTheme as theme} from '@freesewing/plugin-theme'
import fs from 'fs'

dotenv.config()
/*async function logIn() {
    let login = await axios.post('https://backend.freesewing.org/login',{username: process.env.USER,password: process.env.PASS})
    console.log(login.data.token)
    return login.data.token;
}
async function createPerson() {
    let token = await logIn();
    console.log(token)
    const person = await axios.post('https://backend.freesewing.org/people/jwt',
        {
          name: "Someone",
          notes: "These are some notes",
          measies: {
            "chest": 930,
            "neck": 360
          },
          public: true,
          imperial: false,
          img: 'https://static.freesewing.org/users/w/wuuxp/wuuxp.jpeg'
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    //console.log(person.data)
}
async function createApiKey() {
    let token = await logIn();
    //console.log(token)
    const key = await axios.post('https://backend.freesewing.org/apikeys/jwt', {
        name: "indiMeasurements",
        level: 3,
        expiresIn: 86400
    },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    //console.log(key)
}*/
function createBrian(measurements) {
    const svg = new Brian({
        sa: 10,
        measurements
    }).use(theme).draft().render()
    fs.writeFile('./tests/testBrian.svg', svg, err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
      });
    fs.writeFile('./tests/testMeasurements.json', Buffer.from(JSON.stringify(measurements,null, '\t')), err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
    })
}
function createAaron(measurements) {
    const svg = new Aaron({
        sa: 10,
        measurements
    }).use(theme).draft().render()
    fs.writeFile('./tests/testAaron.svg', svg, err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
      });
    fs.writeFile('./tests/testMeasurements.json', Buffer.from(JSON.stringify(measurements,null, '\t')), err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
    })
}
function createCharlie(measurements) {
    const svg = new Charlie({
        sa: 10,
        measurements
    }).use(theme).draft().render()
    fs.writeFile('./tests/testCharlie.svg', svg, err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
      });
    fs.writeFile('./tests/testMeasurements.json', Buffer.from(JSON.stringify(measurements,null, '\t')), err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
    })
}
export default {createBrian,createAaron,createCharlie}