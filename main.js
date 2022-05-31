const firstName = 'Michał';
const age = 32;


console.log(firstName);
console.log(age)
console.log(`Cześć! Mam na imię ${firstName} i mam ${age} lata.`);


const heading = document.querySelector('.main-heading--js');

heading.innerHTML = `Cześć! Mam na imię ${firstName} i mam ${age} lata.`