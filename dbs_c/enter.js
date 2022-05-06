
let element=document.getElementById("entra");
console.log(element.value);

let output=document.getElementById("Bye");
let checkButton = document.getElementById('clickButton');
checkButton.addEventListener('click',change);

const pattern=/e1b[0-9]{5}[=|\-|(|!|*]*>/;
const noise=/\\r/;


function change(){
    output.value="";
    let text=document.getElementById("entra").value.replace(/\r\n|\r/g, "\n");
    let lines=text.split('\n');    
    for(let i=0;i<lines.length;i++){
        let chst=lines[i];
        
        if(pattern.test(chst)){
            if(noise.test(chst)) continue;
            console.log(chst.replace(pattern,""));
            console.log(chst.replace("a"));
            output.value+=chst.replace(pattern,"")+"\n";
        }
    }
    
}