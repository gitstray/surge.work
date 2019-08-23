
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//Listen for submit
document.getElementById('contactForm').addEventListener('sumbit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    // Get Values
    let projectType = getInputVal('projectType');
    let projectDis = getInputVal('projectDis');
    let fileupload = getInputVal('fileupload');
    let budget = getInputVal('budget');
    let firstName = getInputVal('firstName');
    let lastName = getInputVal('lastName');
    let email = getInputVal('email');
    let telephone = getInputVal('telephone');

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
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        projectType: projectType,
        projectDis: projectDis,
        fileupload: fileupload,
        budget: budget,
        firstName: firstName,
        lastName: lastName,
        email: email,
        telephone: telephone,

    })
}
