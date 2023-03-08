
function success() {

    var name = document.getElementById("name").value;
    if (name.length > 30) {
        alert("Name field is limited to 30 characters.");

    }

    var phNum = document.getElementById("phnum").value;
    for (let i = 0; i < phNum.length; i++) {
        if (isNaN(phNum.charAt(i))) {
            alert("Please enter correct phone number.")
            return false;
        }
        else {
            return true;
        }
    }
}

