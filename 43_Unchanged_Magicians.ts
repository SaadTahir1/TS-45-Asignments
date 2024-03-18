// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name

let magician : string[] = ['Harry Potter', 'Hermione Granger', ' Ron Weasley','Albus Dumbledore'];


function copy_array(arr:string[],) {
    return [...arr]
}


function makeGreat(arrayMagicians: string[],){
    
    for(let i=0; i<arrayMagicians.length; i++){

     arrayMagicians[i] =  ' The Great ' + arrayMagicians[i]

    }
}

function show_magicians(magicians: string[] ) {
    magicians.forEach(Element => {
        console.log(Element);
    })
}

const copyMagicianArray = copy_array(magician);


makeGreat(copyMagicianArray)

console.log(`\n\n This is my original array:`);
show_magicians(magician);

console.log(`\n\n This is my modified copy of the array:`);
show_magicians(copyMagicianArray);


