var email = document.getElementById('email');
var country = document.getElementById('country');
var zip = document.getElementById('zip');
var pw = document.getElementById('password');

var messageBox = document.getElementById('messageBox');

email.addEventListener('focus', inputFocus);
country.addEventListener('focus', inputFocus);
zip.addEventListener('focus', inputFocus);
pw.addEventListener('focus', inputFocus);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.style.display = "none";

    messageBox.textContent = "Thank you for submitting. Please wait to be redirected..."

    setTimeout(() => form.submit(), 2000);
});

function passwordVerify()
{
    const password = document.frm.password.value;

    var regexParam = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}")

    if (password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/))
    {
        pw.style.boxShadow = "none";
    }

    else
    {
        pw.style.border = "1px solid red";

        pw.style.boxShadow = "0 0 10px 5px rgba(200,0,0,.8)";

        messageBox.textContent = "Password must be 8 characters, contain at least 1 number, 1 uppercase letter, and 1 lowercase letter.";
    }
}

function emailVerify()
{
    const emailVal = document.frm.email.value;

    if (emailVal.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
    {
        email.style.boxShadow = "none";
    }

    else
    {
        email.style.border = "1px solid red";

        email.style.boxShadow = "0 0 10px 5px rgba(200,0,0,.8)";

        messageBox.textContent = "Invalid email address.";
    }
}

function countryVerify()
{
    const countryVal = document.frm.country.value;

    if (countryVal.match(/^[A-Za-z]+$/))
    {
        country.style.boxShadow = "none";
    }

    else
    {
        country.style.border = "1px solid red";

        country.style.boxShadow = "0 0 10px 5px rgba(200,0,0,.8)";

        messageBox.textContent = "Country name must only contain letters.";
    }
}

function zipVerify()
{
    const zipVal = document.frm.zip.value;

    if (zipVal.length < 5)
    {
        zip.style.border = "1px solid red";

        zip.style.boxShadow = "0 0 10px 5px rgba(200,0,0,.8)";

        messageBox.textContent = "Zip-Code must be 5 characters."
    }

    else if (zipVal.match(/^\d+$/))
    {
        zip.style.boxShadow = "none";
    }

    else
    {
        zip.style.border = "1px solid red";

        zip.style.boxShadow = "0 0 10px 5px rgba(200,0,0,.8)";

        messageBox.textContent = "Zip-Code must only contain numbers.";
    }
}

function inputFocus(e)
{
    email.style.boxShadow = "none";
    country.style.boxShadow = "none";
    zip.style.boxShadow = "none";
    pw.style.boxShadow = "none";

    email.style.border = "1px solid black";
    country.style.border = "1px solid black";
    zip.style.border = "1px solid black";
    pw.style.border = "1px solid black";

    e.target.style.boxShadow = "0 0 10px 10px rgba(0,0,0,.1)";

    messageBox.textContent = null;
}