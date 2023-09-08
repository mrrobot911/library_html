export class User {
    firstName = '';
    lastName = '';
    Email = '';
    Password = '';
    Books = [];
    visits = 0;
    cardNumber = 0;
    hasCard = false;
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
    set visits(visits){
        this.visits = visits;
    }
    set cardNumber(cardNumber){
        this.cardNumber = cardNumber;
    }
    set hasCard(hasCard){
        this.hasCard = hasCard;
    }
    constructor(){
    }
    
}