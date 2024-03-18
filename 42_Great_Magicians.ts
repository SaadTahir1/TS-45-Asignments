// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician : string[] = ['Harry Potter', 'Hermione Granger', ' Ron Weasley','Albus Dumbledore'];

function makeGreat(arrayMagicians: string[],){
    
    for(let i=0; i<arrayMagicians.length; i++){

     magician[i] =  ' The Great ' + arrayMagicians[i]

    }
}

function show_magicians(magicians: string[] ) {
    magicians.forEach(Element => {
        console.log(Element);
    })
}

makeGreat(magician)
show_magicians(magician)


