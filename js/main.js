const firstName = 'Michał';
const age = 32;


console.log(firstName);
console.log(age)
console.log(`Cześć! Mam na imię ${firstName} i mam ${age} lata.`);







function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`)
    return myNumber*7;
}

const myResult = calculate(5);

console.log(myResult);



const humanOne = {
    name: 'Maciek',
    age: 32,
    address: 'Warszawa'
};

const humanTwo = {
    name: 'Ryszard',
    age: 35,
    address: humanOne.address
};


if (humanOne.age > humanTwo.age) {
    console.log('Human one jest starszy');
} else if (humanOne.age === humanTwo.age) {
        console.log('Są tego samego wieku');
} else {
    console.log('Human two jest starszy');
}




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


const button = document.querySelector('.action--js');

console.log(button)

const myClick =() => {
    console.log('Kliknąłeś')
    const heading = document.querySelector('.main__heading--js');
    console.log(heading);
    heading.innerHTML = `Zonk hahahaha`
}

button.addEventListener('click', myClick );


