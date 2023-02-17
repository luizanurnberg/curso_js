//dispara uma mensagem de erro genérica que é utilizada em outras partes do código
function genericErrorMessage(){
    window.alert('[ERROR] Please, make sure that you typed the correct information and try again');
}

function finalAge(){
    const finalAge = currentYear - Number(yearFromUser.value);
}

function finalGender(){
    const genderFromUser = document.getElementsByName('radGender');
    if (genderFromUser[0].checked && finalAge() < 10){
        const showGender = "Young boy";
    } else if (genderFromUser[0].checked && finalAge > 10 && finalAge < 20){
        const showGender = "Teenage boy";
    } else if (genderFromUser[0].checked && finalAge > 20 && finalAge < 80){
        const showGender = "Man";
    } else if (genderFromUser[0].checked && finalAge > 80){
        const showGender = "Old man";
    } else if (genderFromUser[1].checked && finalAge < 10){
        const showGender = "Young girl";
    }else if (genderFromUser[1].checked && finalAge > 10 && finalAge < 20){
        const showGender = "Teenage girl";
    } else if (genderFromUser[0].checked && finalAge > 20 && finalAge < 80){
        const showGender = "Woman";
    } else if (genderFromUser[0].checked && finalAge > 80){
        const showGender = "Old lady";
    }

}

//define as regras e validacoes a serem realizadas ao clicas no botão "Guess Age"
function guessAge(){
    const date = new Date();
    const currentYear = date.getFullYear();
    const yearFromUser = document.getElementById('txtyearOfBirth');
    const res = document.getElementById('response');
    if (Number(yearFromUser.value.length) == 0 || Number(yearFromUser.value) < 0 || Number(yearFromUser.value) > currentYear){
       genericErrorMessage();
    } else { 
        const agePrint = finalAge();
        const genderPrint = finalGender()
        switch(agePrint){
            default:
             res.innerHTML = `We dected a ${agePrint} with ${genderPrint} years old`;
             break;
            case 1:
            res.innerHTML = `We dected a ${finalGender()} with ${finalAge()} year old`;
            break;
    }
}

}