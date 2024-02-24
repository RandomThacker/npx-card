#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Send an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:thackeraryan.dev@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye, See ya soon!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Aryan Thacker"),
    handle: chalk.white("@randomThacker"),
    fact: chalk.hex('#B10000')('           A Lazy Self-Taught Programmer'),
    website: chalk.hex('#2B65EC')("https://www.aryanthacker.tech/"),
    github: chalk.hex('#2B65EC')("https://github.com/RandomThacker"),
    linkedin: chalk.hex('#2B65EC')("https://www.linkedin.com/in/aryan-thacker/"),
    email: chalk.hex('#2B65EC')("thackeraryan.dev@gmail.com"),


    labelFact: chalk.hex('#FF6262').bold(""),
    labelWebsite: chalk.hex('#EAC117').bold("        Website:"),
    labelGitHub: chalk.hex('#EAC117').bold("        GitHub:"),
    labelLinkedin: chalk.hex('#EAC117').bold("        Linkedin:"),
    labelEmail: chalk.hex('#EAC117').bold("        Email:"),

};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `  ${data.fact}`,
        ``,
        `${data.labelWebsite}   ${data.website}`,
        `${data.labelGitHub}    ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelEmail}     ${data.email}`,

        ``,
        `${chalk.bold(
            "  Hello World! I'm Aryan, a final year student "
        )}`,
        `${chalk.bold("  Full Stack Web Developer with a expertise on")}`,
        `${chalk.bold(
            "  frontend developement with React Js and Next Js"
        )}`,
        `${chalk.bold(
            "  Got a project? Hit me over email and let's catch "
        )}`,
        `${chalk.bold(
            "  up over coffee"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "red"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your browser.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());