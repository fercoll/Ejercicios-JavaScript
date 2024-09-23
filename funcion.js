
function contraseñasegura(contraseña) {
    const hasMinimumLength = contraseña.length >= 8;    //Da un minimo que la contraseña debe tener como minmo 8 caracteres
    const hasNumber = /\d/.test(contraseña); // Verifica si tiene un número
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña); // Verifica si tiene un carácter especial
    
    if (hasMinimumLength && hasNumber && hasSpecialChar) {
        return true;
    } else {
        return false
    }
}

function solicitarcontraseña() {
    const contraseña = prompt("Digite su contraseña");
    
    if (contraseñasegura(contraseña)) {
        alert("La contraseña es fuerte.");
    } else {
        alert("La contraseña es muy debil");
    }
}

// Llamar a la función
solicitarcontraseña();

