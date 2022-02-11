const d = document;
const s1 = d.getElementById('s1');
const s2 = d.getElementById('s2');
const b2 = d.getElementById('b2');
const s3 = d.getElementById('s3');
const b3 = d.getElementById('b3');
const s4 = d.getElementById('s4');
const b4 = d.getElementById('b4');

const btnresult = d.getElementById('btnresult');
const result = d.getElementById('result')

let s1value,
 s2value,
 s3value,
 s4value,
 b2value,
 b3value,
 b4value;


d.addEventListener('DOMContentLoaded',()=>{
    btnresult.addEventListener('click',()=>{ calc() })

})

function calc(){
     s1value = parseInt(s1.value);
     s2value = parseInt(s2.value); 
     s3value = parseInt(s3.value); 
     s4value = parseInt(s4.value); 
     b2value = parseInt(b2.value);
     b3value = parseInt(b3.value);
     b4value = parseInt(b4.value);   

    let up = (s1value+s2value+s3value+s4value);
    let down = (b2value+b3value+b4value);  
        if(isNaN(up) || isNaN(down)) {
            result.innerHTML = 'Writing error'
            return
        } else{   
        if(up < down) result.innerHTML = "ERROR, the passengers that travel cannot be greater than those that board";
        else result.innerHTML = up-down
}
    }