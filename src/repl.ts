import { createInterface } from "node:readline";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ", 
  });

  rl.prompt();

  rl.on("line", (input) => {
    const words = cleanInput(input);

    if (words.length === 0) {
      rl.prompt();
      return;
    }

    console.log(`Your command was: ${words[0]}`);

    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
    const lowerCased = input.toLowerCase()
    const stripped = lowerCased.trim()
    const splitted = stripped.split(" ")
    const filteredArray = splitted.filter(str => str !== "");
    return filteredArray
}