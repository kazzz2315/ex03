// 課題03-2の回答

const html = `
I'm learning JavaScript.

JavaScript says "Hello, world!"
`
console.log(html)

// 課題03-3の回答

const array = [1, 2, 3]

// console.log(array) => [2,3]
array.splice(0, 1)
console.log(array)

// console.log(array) => [2,3,5]
array.push(5)
console.log(array)

// console.log(array) => [2]
array.splice(1, 2)
console.log(array)

// console.log(array) => [100]
array[0] = 100
console.log(array)