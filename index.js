
const core = require('@actions/core');

const name = core.getInput('name');
const greeting = `Hello, ${name}!`;

console.log(greeting);
core.setOutput('greeting', greeting);
