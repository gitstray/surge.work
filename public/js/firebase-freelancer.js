


firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//Listen for submit
document.getElementById('freelanceForm').addEventListener('sumbit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    // Get Values
    var projectType = getInputVal('projectType');
    var projectDis = getInputVal('projectDis');
    var fileupload = getInputVal('fileupload');
    var budget = getInputVal('budget');
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var telephone = getInputVal('telephone');

    //Save Message
    saveMessage(projectType, projectDis, fileupload, budget, firstName, lastName, email, telephone);
    
    //show alert
    document.querySelector('.alert').getElementsByClassName.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').getElementsByClassName.display = 'none';
    },3000);

    //console.log(name);

}
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(projectType, projectDis, fileupload, budget, firstName, lastName, email, telephone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        projectType: projectType,
        projectDis: projectDis,
        fileupload: fileupload,
        budget: budget,
        firstName: firstName,
        lastName: lastName,
        email: email,
        telephone: telephone

    })
}
