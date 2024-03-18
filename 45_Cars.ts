// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctty

type Car = {
    manufacturer: string,
    model: string,
    [key: string]: any 
}
function create_car(manufacturer:string, model:string, optional:Record<string,any>): Car {
    return{
        manufacturer,
        model,
        ...optional

    }
}
const myCar: Car = create_car("Honda", "Civic", {color: 'silver', year: '2023'})

console.log(myCar) ;
