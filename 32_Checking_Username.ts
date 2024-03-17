// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let currentUsers: string[] = ['Taha','umar','AlI', 'Mohammad','John'];

let newUsers: string[] = ['hussain','Hasan','Taha','Abdullah','AlI'];

newUsers.forEach(new_user_Name => {
    let lowercase: string = new_user_Name.toLowerCase() ;

    if(currentUsers.map(c_user =>  c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${new_user_Name} is not available. Please write a different username`)
        
}
else {
    console.log(`The username is ${new_user_Name} available`)
}
})



