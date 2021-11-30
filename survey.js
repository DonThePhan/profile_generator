const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = {};

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  answers.nickName = answer;
  rl.question(`What's an activity you like doing? `, (answer) => {
    answers.activity = answer;
    rl.question(`What do you listen to while doing that? `, (answer) => {
      answers.listen = answer;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        answers.meal = answer;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          answers.favouriteFood = answer;
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            answers.sport = answer;
            rl.question(`What is your superpower ? In a few words, tell us what you are amazing at! `, (answer) => {
              answers.superpower = answer;

              console.log(`
              Call me ${answers.nickName}!
              I love to listen to ${answers.listen} while I ${answers.activity}. 
              My favourite meal of the day is ${answers.meal}, and my favourite thing to eat is ${answers.favouriteFood}.
              My favourite sport is ${answers.sport} and my super power is ${answers.superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
