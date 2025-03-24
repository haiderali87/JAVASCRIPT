const user_id = 1;
var user_name = "Haider Cheema";
let user_age = 25;
let user_state;
user_city = "Sahiwal";

// user_id = 2; //  you cannot reassign a value to a const variable once it's initialized. if you log it, it will through the error.
user_name = "Hadi Cheema";
user_age = 24;
user_city = "Lahore";


/*
prefer not to use var
because of issue with the block scope and functional scope
*/
console.table([user_id, user_name, user_age, user_city, user_state]);
