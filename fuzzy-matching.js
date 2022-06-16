const Fuse = require('fuse.js')
 
const people = [
    {
        name: "John",
        city: "New York"
    },
    {
        name: "Steve",
        city: "Seattle"
    },
    {
        name: "Bill",
        city: "Omaha"
    }
]
 
const fuse = new Fuse(people, {
    keys: ['name', 'city']
})
 
// Search
const result = fuse.search('jon')
 
console.log(result)