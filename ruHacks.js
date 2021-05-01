//event listener for when the user presses the submit button
document.getElementById("submit").addEventListener("click", getUserInput);

var dataList = []

var data = {
    sugarLevels : "",
    dates : "",
    carbs : false,
    protein : false,
    fats : false,
    timeAte : ""
}

var checkListSubmit = false;
var levelSubmit = false;
var calendar = false;

var error = "";

//gets values for carbs, fats, and protein and stores it
function collectData() {
    if(document.getElementById("yes").checked) {
        if(document.getElementById("carb").checked == false && document.getElementById("fat").checked == false && document.getElementById("protein").checked == false) {
            error += "Please indicate what you ate.\n";
        } else {
            data.carbs = document.getElementById("carb").checked;
            data.fats = document.getElementById("fat").checked;
            data.protein = document.getElementById("protein").checked;
            checkListSubmit = true;
        }
    } else if (document.getElementById("no").checked) {
        var strDate = document.getElementById("foodTime").value;
        if(strDate !== "") {
            data.timeAte = strDate;
            checkListSubmit = true;
        } else {
            error += "Please select a time for when you last ate.\n";
        }
    } else {
        error += "Please indicate whether you ate before you tested for your sugar level.\n";
    }
}

function collectDate() {
    var strDate = document.getElementById("date").value;
    if(strDate !== "") {
        data.dates = strDate;
        calendar = true;
    } else {
        error += "Please select a date.\n";
    }
}

//sets to the original display once all the information are submitted
function clearing() {
    if(checkListSubmit && levelSubmit && calendar) {
        dataList.push(data);

        document.getElementById("date").value = "";
        document.getElementById("sugar level").value = "";
        document.getElementById("carb").checked = false;
        document.getElementById("fat").checked = false;
        document.getElementById("protein").checked = false;

        checkListSubmit = false;
        levelSubmit = false;
        calendar = false;
    }
}

//function is called when user pressed the submit button
function getUserInput() {
    collectDate();
    collectData();
    
    //gets the sugar level and date that the user entered
    var strSugar = document.getElementById("sugar level").value;

    //checks whether the values entered by the user is valid
    if(isNaN(strSugar) == false && strSugar !== "" && levelSubmit == false) {
        visible = true;

        //stores the sugar level and date
        data.sugarLevels = strSugar;

        levelSubmit = true;
        clearing();
    } else {
        error += "Value entered for the sugar level is invalid.\n";
        checkListSubmit = false;
        calendar = false;
    }

    if(error !== "") {
        alert(error);
        error = "";
    }
}

function getData() {
    return dataList;
}

//submits form
function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
 }