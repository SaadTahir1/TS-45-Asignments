let personname : string = '';

personname = prompt('What is your name?') || '';

if(personname !== null  && personname !== '' ) {
    alert(`Hello ${personname}, would you like to learn python today?`)
}
else{
    alert(`you have to fill something`)
}