function fn_ValForm() {
    var sMsg = "";

    if(document.getElementById("name").value == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if(document.getElementById("email").value == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!validateEmail(document.getElementById("email").value)) {
        sMsg += "\n* Format email tidak valid";
    }
    if(document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if(sMsg != "") {
        alert("Peringatan" + sMsg);
        return false;
    } else {
        return true;
    }
}

function validateEmail(email) {
    const emailRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    return emailRegex.test(email);
}