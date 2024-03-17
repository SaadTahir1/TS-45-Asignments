
let guest_list :string[] = ['Dad','Mom','Bro'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear my '+ guest_list[i] + ',\n\nit is my pleasure to invite you in dinner.\n\nThank You!\n\n')

// }

let absent_guest :string = 'Bro' ;
let new_guest :string = 'sissie' ;
guest_list[2] = new_guest ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear my '+ guest_list[i] + ',\n\nit is my pleasure to invite you in dinner.\n\nThank You!\n\n')
// }
console.log(`My ${absent_guest} is not coming to the party.`) ;
console.log('Good news! we find big table so we are inviting 3 more guests. ') 

guest_list.unshift('Uncle') ;
guest_list.splice(2 ,0 , 'Auntie') ;
guest_list.push('nephew') ;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear my '+ guest_list[i] + ',\n\nit is my pleasure to invite you in dinner.\n\nThank You!\n\n')
}

console.log('\nSorry we can not arrange big table, only two peoples will be invited. ') ;

while(guest_list.length > 2) {
    let remove_guest =  guest_list.pop() ;
    console.log(`Sorry Mr. ${remove_guest} , you are not invited for Dinner. `) ;
}

for(let i=0; i<guest_list.length; i++){
    console.log('Dear my '+ guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}

guest_list.splice(0, 2) ;

console.log(guest_list) ;