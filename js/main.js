const firstName = 'Michał';
const age = 32;


console.log(firstName);
console.log(age)
console.log(`Cześć! Mam na imię ${firstName} i mam ${age} lata.`);


const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Cześć! Mam na imię ${firstName} i mam ${age} lata.`




function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`)
    return myNumber*7;
}

const myResult = calculate(5);

console.log(myResult);


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.week-summary__description--js', 'Witaj mordeczko w moim świecie!');

const greet = (age, firtsName) => {
    console.log (`Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lata`)

}

greet(32, `Michał`);

if ('Javascript' != 'Java') {
    console.log('Java to nie Javascript');
}