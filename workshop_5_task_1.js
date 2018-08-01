'use strict';

//solution#1

const user = {
    name: 'John',
    surname: 'Smith',
};

for (const [key, value] of Object.entries(user)) {
    console.log(`${value}`);
}

//solution#2

const user1 = {
    name: 'John',
    surname: 'Smith'
};
Object.entries(user1).forEach(([key, value]) => console.log(`${value}`))

//solution#3 
const user2 = {
    name: 'John',
    surname: 'Smith'
};
console.log(Object.entries(user2))