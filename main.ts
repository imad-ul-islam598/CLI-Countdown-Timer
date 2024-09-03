#! /usr/bin/env node

import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns"
console.log("\n ---- Welcome To Our Mini Countdown Timer ---- \n");

const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "PLease Enter The Amount Of Second:",
    validate: (input: number)=>{
        if(isNaN(input)){
            return "please Enter Valid Number"
        }else if (input > 60){
            return "seconds Must Be In 60"
        }else {
            return true;
        }
    }
});

let input = res.userInput

function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((()=>{
        const currTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime, currTime);

        if (timeDiff <= 0){
            console.log("\n\tTimer Has Expired");
            process.exit()
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const sec = Math.floor(timeDiff%60)
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        
    }),1000)
}
startTime(input);

console.log("\n ---- Thanks For Testing Our Project  ---- ");
console.log("\n ---- The Timer Is Started  ---- \n");
