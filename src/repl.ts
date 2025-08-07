export function cleanInput(input: string): string[] {
    const lowerCased = input.toLowerCase()
    const stripped = lowerCased.trim()
    const splitted = stripped.split(" ")
    const filteredArray = splitted.filter(str => str !== "");
    return filteredArray
}