angular.module("ReviewApp")

.filter("contactFilter", function() {
    return function(contacts, type) {
        var filteredContacts = [];
        angular.forEach(contacts, function(contact) {
            if (contact.type === type) {
                filteredContacts.push(contact);
            }
        });
        
        return filteredContacts;
    }
});