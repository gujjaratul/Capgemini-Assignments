let names = ['Tom', 'Ivan', 'Jerry'];
const objectArray = names.map((str) => ({ name: str, length: str.length }))
console.log(objectArray);
