const person = {
    name: 'Mel',
    age: 35,
    location: {
        city: 'austin',
        temp: 'it hot'
    }
};

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
};

// Object Destructuring
const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName)

// Array Destructuring
const address = ['1299 S. Juniper StaticRange.', 'Philadelphia', 'Pennsylvania', '19147']
const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice, ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`)