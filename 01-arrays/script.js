const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
for (let i = 0; i < teachers.length; i++){
  if (i === 4){
    teachers[i] = 'Patrick';
  }
}

// Verifica
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length - 1];
// Riduco per tagliare ultimo elemento
teachers.length = teachers.length - 1;
// Verifica
// Stampa nome rimosso
console.log('lastTeacher:', lastTeacher); 
// Stampa array aggiornato
console.log('updated:', teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
for (let i = 0; i < teachers.length - 1; i++){
  teachers[i] = teachers[i + 1];
}
// Riduco length per eliminare ultimo elemento duplicato
teachers.length = teachers.length - 1;
// Verifica
// Elemento rimosso
console.log('firstTeacher:', firstTeacher);
// Array aggiornato        
console.log('array aggiornato:', teachers); 

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;