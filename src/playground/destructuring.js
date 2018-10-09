const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name, age} = person;
console.log(`${name} is ${age}.` );

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);

const item = ['coffee(hot)','$2.00','$2.50','$2.75'];
const [hot,,medium]=item;
console.log(`A medium ${hot} costs ${medium}`);