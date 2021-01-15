class AddressBook {
  // Implement the constructor method
  // Implement the store method
  // Implement the lookup method
  const(){
    this.name = []
    this.email = []
  }
  store(name, email){
    this.elementsName.push(name)
    this.elementMail.push(email)

  }
  lookup(name){
    for(let i = 0; i < this.elementsMail.length; i++){
      if(this.elementsMail[i].substring(0, this.elementsMail[i].lastIndexOf('@')) === name){
          return this.elementsMail[i]
      }
  }
  return 'Adress not found'
}

  }

const myAddresBook = new AddressBook();

myAddressBook.store("bart", "bart@simpsons.com");
myAddressBook.store("maggie", "maggie@simpsons.com");

myAddressBook.lookup("bart");
// 'bart@simpsons.com'a

myAddressBook.lookup("homer");
// 'address not found'