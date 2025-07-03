const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

//Completamento esercizio senza totale utilizzo di metodi array


// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--){
  reversedTeachers.push(teachers[i]);
}
 //Verifica
 console.log('reversedTeachers:', reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++){
  if (teachers[i].length >= 5){
    longNames.push(teachers[i]);
  }
}
 // Verifica
console.log('longNames:', longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const edIndex = teachers.indexOf('Ed');
if (edIndex !== -1){
  teachers.splice(edIndex, 1);
}
 // Verifica
console.log('without Ed:', teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio') !== -1;

 // Verifica
 console.log('Fabio present:', isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(',');
 // Verifica
console.log('joined string:', teachersString);

// OR

let teachersString = '';
for (let i = 0; i < teachers.length; i++){
  teachersString += teachers[i];
  if (i < teachers.length - 1){
    teachersString += ',';
  }
}

 // Verifica
console.log('joined string:', teachersString);