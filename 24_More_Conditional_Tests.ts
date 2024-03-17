//Equality and Inequality test 1
console.log("Equality test with strings: ", "Apple"==="Apple") ;
console.log("Inequality test with strings: ", ("Apple" as string) != "orange")

// Tests using the lowercase function 
console.log("Tests using the lowercase: ", "HELLO".toLowerCase() === "hello") ;

// Numerical tests involving Equality and Inequality
console.log("Equality tests with numbers: ", 66===66);
console.log("Inequality test with numbers: ", (25 as number) != 34) ;

// greater than and less than
console.log("greater than test: ", 12>9);
console.log("less than test: ", 9<12)

//greater than and equal to
console.log("greater than and equal to test: ", 10>=10) ;

 // ,, and less than or Equal to
 console.log("less than and equal to: ",5<=10 ) ;

 //Test using "and" & "or" operators
 console.log("And operator test: ", 10===10 && 12>10) ;
 console.log("Or operator test: ", 10===10 || false) ;

 //Test wether an item  is in array
 const cars :string[] = ['Hyundai','Toyota','Honda']
 console.log('Test "Hyundai" in the array: ', cars.includes("Hyundai")) ;

 //Test wether an item is not in array
 console.log('Testing "Mercedes" is not in array: ', !cars.includes("Mercedes")) ;

