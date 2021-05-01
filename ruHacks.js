//event listener for when the user presses the submit button
document.getElementById("submit").addEventListener("click", getUserInput);

var dataList = []

var data = {
    sugarLevels : "",
    dates : "",
    carbs : false,
    protein : false,
    fats : false
}

//gets values for carbs, fats, and protein and stores it
function collectData() {
    data.carbs = document.getElementById("carb").checked;
    data.fats = document.getElementById("fat").checked;
    data.protein = document.getElementById("protein").checked;

    dataList.push(data);
    hideCheckList();
}

//hides checklist
// function hideCheckList() {
//     var carb = document.getElementById('carb');
//     carb.outerHTML = '<input type="checkbox" id="carb" style="visibility: hidden;"></input>';
//     var carbLabel = document.getElementById('carbLabel');
//     carbLabel.outerHTML = '<label for="carb" " id="carbLabel" style="visibility: hidden;">Carbs</label>';

//     var protein = document.getElementById('protein');
//     protein.outerHTML = '<input type="checkbox" id="protein" style="visibility: hidden;"></input>';
//     var proteinLabel = document.getElementById('proteinLabel');
//     proteinLabel.outerHTML = '<label for="protein" " id="proteinLabel" style="visibility: hidden;">Protein</label>';

//     var fat = document.getElementById('fat');
//     fat.outerHTML = '<input type="checkbox" id="fat" style="visibility: hidden;"></input>';
//     var fatLabel = document.getElementById('fatLabel');
//     fatLabel.outerHTML = '<label for="fat" " id="fatLabel" style="visibility: hidden;">Fats</label>';

//     var submission = document.getElementById('submitCheckList');
//     submission.outerHTML = '<input type="submit" id="submitCheckList" style="visibility: hidden;"></input>';

//     //reset the date and sugar level textbox
//     document.getElementById("date").value = "";
//     document.getElementById("sugar level").value = "";

//     //shows the original submit button and adds an event listener to it
//     var submit = document.getElementById("submit");
//     submit.outerHTML = '<input type="submit" id="submit"></input>';
//     document.getElementById("submit").addEventListener("click", getUserInput);
// }

//function is called when user pressed the submit button
function getUserInput() {
    //gets the sugar level and date that the user entered
    var strSugar = document.getElementById("sugar level").value;
    var strDate = document.getElementById("date").value;

    //checks whether the values entered by the user is valid
    if(isNaN(strSugar) == false && strDate !== "" && strSugar !== "") {
        visible = true;
        var submit = document.getElementById("submit");
        submit.outerHTML = '<input type="submit" id="submit" style="visibility: hidden;"></input>';

        //stores the sugar level and date
        data.sugarLevels = strSugar;
        data.dates = strDate;

        var br = document.createElement('br');
        document.body.appendChild(br);

        displayCheckList();  
    } else {
        if(strDate === "" && (isNaN(strSugar) != false || strSugar === "")) {
            alert("Please select a value for the date.\nValue entered for the sugar level is invalid.");
        } else if (strDate === "") {
            alert("Please select a value for the date.");
        } else {
            alert("Value entered for the sugar level is invalid.");
        }
    }
}

function displayCheckList(){
    //outputs a checklist containing carbs, portien, and fats
    var carb = document.getElementById('carb');
    carb.outerHTML = '<input type="checkbox" id="carb"></input>';
    var carbLabel = document.getElementById('carbLabel');
    carbLabel.outerHTML = '<label for="carb" " id="carbLabel">Carbs</label>';

    var protein = document.getElementById('protein');
    protein.outerHTML = '<input type="checkbox" id="protein"></input>';
    var proteinLabel = document.getElementById('proteinLabel');
    proteinLabel.outerHTML = '<label for="protein" " id="proteinLabel">Protein</label>';

    var fat = document.getElementById('fat');
    fat.outerHTML = '<input type="checkbox" id="fat"></input>';
    var fatLabel = document.getElementById('fatLabel');
    fatLabel.outerHTML = '<label for="fat" " id="fatLabel">Fats</label>';

    var submission = document.getElementById('submitCheckList');
    submission.outerHTML = '<input type="submit" id="submitCheckList"></input>';
    document.getElementById('submitCheckList').addEventListener("click", collectData); //adds event listener to the new submit button
}

// form reset

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