/* Calculator  */
const num1 = parseFloat(prompt("Insert first number"))
const num2 = parseFloat(prompt("Insert second number"))
const opr =  prompt("Insert any operator from the following +, -, *, /")

if(isNaN(num1) || isNaN(num2)){
    alert('Fill all inputs and insert number values only!')
}else{
    if(opr){
        if(opr == '+'){
            var result = num1 + num2;
            alert('Result is ' + result)
        }
        else if(opr == '-'){
            var result = num1 - num2;
            alert('Result is ' + result)
        }
        else if(opr == '*'){
            var result = num1 * num2;
            alert('Result is ' + result)
        }
        else if(opr == '/'){
            var result = num1 / num2;
            alert('Result is ' + result)
        }
    }
    else{
        alert('Invalid operator')
    }
}


