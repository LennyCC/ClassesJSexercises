//Solución Oscar MIras
class AddressBook {
    constructor() {
        this.contacts = []
    }
 
    store(name, mail) {
        this.contacts.push({
            name: name,
            mail: mail
        })
    }
 
    lookup(name) {
        let indexContactFound = this.contacts.findIndex(contact => {
            return contact.name == name
        })
 
        if (indexContactFound == -1) {
            return 'address not found'
        }
 
        return this.contacts[indexContactFound].mail
    }
  }
 
  const myAddressBook = new AddressBook();
 
  myAddressBook.store("bart", "bart@simpsons.com");
  myAddressBook.store("maggie", "maggie@simpsons.com");
 
  console.log(myAddressBook.lookup("bart"));
  // 'bart@simpsons.com'
 
  console.log(myAddressBook.lookup("homer"));
  // 'address not found'