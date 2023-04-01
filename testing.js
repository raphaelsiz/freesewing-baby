//import axios from 'axios';
import dotenv from 'dotenv';
import {Brian} from '@freesewing/brian';
import {Aaron} from '@freesewing/aaron';
import {Charlie} from '@freesewing/charlie'
import {pluginTheme as theme} from '@freesewing/plugin-theme'
import fs from 'fs'

dotenv.config()

export function createBrian(measurements,url) {
    const svg = new Brian({
        sa: 10,
        measurements
    }).use(theme).draft().render()
    fs.writeFile(url, svg, err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
      });
}
export function createAaron(measurements,url) {
    const svg = new Aaron({
        sa: 10,
        measurements
    }).use(theme).draft().render()
    fs.writeFile(url, svg, err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
      });
}
export function createCharlie(measurements,url) {
    const svg = new Charlie({
        sa: 10,
        measurements
    }).use(theme).draft().render()
    fs.writeFile(url, svg, err => {
        if (err) {
            console.error(err);
        }
        else console.log("File written successfully!")
      });
}
export default {createBrian,createAaron,createCharlie}