
let res= document.getElementById("result");

let operator='';
let operand1 ='';
let operand2 ='';

function add(value)
{
    if(operator){
        operand2 +=value;
    }
    else
    operand1 +=value;

    answer();
}

function clr()
{
    operand1='';
    operand2='';
    operator='';

    answer();
}
function op(o)
{
    operator = o;
    answer();
}

function equal(){

    operand1=Number(operand1);
    operand2=Number(operand2);

    switch(operator){
        case'+':
            operand1 += operand2;
            break;
        case'-':
            operand1 -= operand2;
            break;
        case'*':
            operand1 *= operand2;
            break;
        case'/':
            operand1 /= operand2;
            break;
        case'%':
            operand1 %= operand2;
            break;
        default:
            break;
    }

    operand1=operand1.toString();
    operand2='';
    operator='';
    answer();
}
function answer(){
    res.innerHTML = operand1 + operator + operand2;
}

