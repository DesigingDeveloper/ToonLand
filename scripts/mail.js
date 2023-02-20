const firebaseConfig = {
    apiKey: "AIzaSyCbt4rBvunzD7E20FDr_8mMPEnyItHVY2U",
    authDomain: "subscription-form-toonland.firebaseapp.com",
    databaseURL: "https://subscription-form-toonland-default-rtdb.firebaseio.com",
    projectId: "subscription-form-toonland",
    storageBucket: "subscription-form-toonland.appspot.com",
    messagingSenderId: "799639193063",
    appId: "1:799639193063:web:1ff45ac807c5a6686ce942",
    measurementId: "G-B78S456ZW3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactFormv2");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    // var msgContent = getElementVal("msgContent");
    var contactNo = getElementVal("contactNo");

    saveMessages(name, emailid, contactNo);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, tel) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        // msgContent: msgContent,
        // tel: contactNo,
        contactNo: tel,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

function submitBtn() {
    location.href = "/download.html"
}

$(document).ready(function () {
    $('#myform').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
            },
            contactNo: {
                required: true,
            },

        },
        messages: {
            name: {
                required: 'Please enter a valid name <br/>',
            },
            email: {
                required: 'Please enter a valid email <br/>',
            },
            contactNo: {
                required: 'Please enter a valid email <br/>',
            },
        },
    });

    //Removes the default checked radio button, setting it to false
    // $('input[name=radio]').attr('checked', false);
});