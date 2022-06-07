const firstName = 'Michał';
const age = 32;


console.log(firstName);
console.log(age)
console.log(`Cześć! Mam na imię ${firstName} i mam ${age} lata.`);


const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Cześć! Mam na imię ${firstName} i mam ${age} lata.`

const emptyParagraph = document.querySelector('.week-summary__description--js');

emptyParagraph.innerHTML = 'Nawet uzupełniłem pracę domową Javascriptem!';