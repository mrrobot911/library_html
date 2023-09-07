export class User {
    firstName = '';
    lastName = '';
    Email = '';
    Password = '';
    Books = [];
    set firstName(firstName){
        this.firstName = firstName;
    }
    set lastName(lastName){
        this.lastName = lastName;
    }
    set Email(Email){
        this.Email = Email;
    }
    set Password(Password){
        this.Password = Password;
    }
    set Books(Books) {
        this.Books = Books;
    }
    constructor(){
    }
    
}