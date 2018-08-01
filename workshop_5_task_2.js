'use strict';

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
const count = Object.values(salaries);
const total = count.reduce((acc, count) => acc + count, 0);
console.log(total)
