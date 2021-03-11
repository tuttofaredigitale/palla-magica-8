let tuoNome = 'Mario';

tuoNome != '' ? console.log('Ciao ' + tuoNome + '!') : console.log('Ciao!');

let tuaDomanda = 'Sono fortunato?';

console.log(`L'umano chiede: ${tuaDomanda}`);

const numeroRandom = Math.floor(Math.random() * 8);

let pallaMagica = '';

switch (numeroRandom) {
    case 0:
        pallaMagica = 'Alla grande!';
        break;
    case 1:
        pallaMagica = 'Certamente';
        break;
    case 2:
        pallaMagica = 'Probabilmente verso fine giornata';
        break;
    case 3:
        pallaMagica = 'Ci vuole ancora un po\' di tempo';
        break;
    case 4:
        pallaMagica = 'Non può piovere per sempre';
        break;
    case 5:
        pallaMagica = 'Io starei tranquillo oggi';
        break;
    case 6:
        pallaMagica = 'Oggi può piovere non solo acqua...';
        break;
    case 7:
        pallaMagica = 'No!';
        break;
};

console.log(`La palla magica ha detto: ${pallaMagica}`);