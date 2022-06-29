
let element=document.getElementById("entra");
console.log(element.value);

let output=document.getElementById("Bye");
let checkButton = document.getElementById('clickButton');
checkButton.addEventListener('click',change);

let num=document.getElementById("numberid");

const pattern=/e1b[0-9]{5}[=|\-|(|!|*]*>/;
const noise=/\\r/;
const M1=/P/
const M1_n=/PK/
const M2=/PMK/

const P=/P/g;
function change(){
    output.value="";
    let text=document.getElementById("entra").value
    let lines=text.split('\n');
    for(let i=0;i<lines.length;i++){
        console.log(i);
        let chst=lines[0];
        
        chst=chst.split('P').join("MP").split('K').join("MK")+"\n";
        chst=chst.replaceAll("PMK","PK")
        output.value=chst;
        num.value=0;
        let number;
        let numberP=0;let numberK=0;let numberH=0;let numberM=0;

        let number2=0;
        number=chst.match(/P/g);
        if(number!=null)numberP=number.length;
         number=chst.match(/K/g);
        if(number!=null)numberK=number.length;
        number=chst.match(/M/g);
        if(number!=null)numberM=number.length;
        number=chst.match(/H/g);
        if(number!=null)numberH=number.length;
        num.value+=numberP*1.1+numberK*0.2+numberM*1.35+numberH*0.4;
    }
    
}