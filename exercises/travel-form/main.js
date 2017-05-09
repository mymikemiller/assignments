function clickSubmit() {
    var str = "";

    var firstName = document.getElementsByName("first-name")[0].value;
    var lastName = document.getElementsByName("last-name")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var genderElements = document.getElementsByName('gender');
    var gender = "";

    for (var i = 0, length = genderElements.length; i < length; i++) {
        if (genderElements[i].checked) {
            // do whatever you want with the checked radio
            gender = genderElements[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    var destination = document.getElementsByName("destination")[0].value;

    var diets = document.getElementsByName("diet");
    var diet = "";

    for (var i = 0; i < diets.length; i++) {
        if (diets[i].checked) {
            if (diet.length > 0) {
                diet += ', ';
            }
            diet += diets[i].value;
        }
    }


    str = "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Age: " + age + "\n" +
        "Gender: " + gender + "\n" +
        "Destination: " + destination + "\n" +
        "Diet: " + diet;


    alert(str);
}
