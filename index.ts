#! /usr/bin/env node
//This line is called shebang, it tell the OS to run it with nodejs

//import the "inquirer" module, whis is a command line interface for Node.js
import inquirer from "inquirer"
console.log("Welcome to word-counter program!")

const answers: {
    Sentence: string
} = await inquirer.prompt([{
    name: "Sentence",
    type: "input",
    message: "Enter a sentence to count the words: "
}])

const words = answers.Sentence.trim().split(" ")

console.log(words)

console.log(`Your sentence word count is ${words.length}`);
