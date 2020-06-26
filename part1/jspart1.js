//variables
const x = 1
let y = 5

console.log(x,y)
y += 10
console.log(x,y)
y = 'sometext'
console.log(x,y)

//arrays
const t = [1, 2, 3, 4]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value)
})

const v = [1,2,3]

const m1 = v.map(value => value * 2)
console.log(m1)
const m2 = v.map(value => '<li>' + value + '</li>')
console.log(m2)

const [first,second, ...rest] = t
console.log(first, second)
console.log(rest)
//objects
const obj1 = {
    name: 'Arto Hellas',
    age: 35,
    education: "PhD",
}

const obj2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const obj3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2,3,5,3],
    department: 'Stanford University',
}

console.log(obj1.name)
const fieldName = 'age'
console.log(obj1[fieldName])
obj1.address = 'Helsinki'
obj1['secret number'] = 12341

const tSquared = t.map(p => p * p)
console.log(tSquared)

//object methods
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a,b) {
        console.log(a + b)
    }
}

arto.growOlder = function() {
    this.age += 1
}
console.log(arto.age)
arto.growOlder()
console.log(arto.age)
arto.greet()

arto.doAddition(1,4)
const referenceToGreet = arto.greet.bind(arto)
referenceToGreet()

//classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is' + this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()