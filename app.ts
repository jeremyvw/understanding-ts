// const person: {
//     name: string
//     age: number
// } = {
const person = {
    name: 'Jeremy',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase())
    // console.log(hobby.map()) // !!! ERROR !!!
}