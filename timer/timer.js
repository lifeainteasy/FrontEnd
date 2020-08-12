const  h = document.getElementById("h");
const  m = document.getElementById("m");
const  s = document.getElementById("s");

const  start = document.getElementById("start");
const  stop  = document.getElementById("stop");
const  reset = document.getElementById("reset");




let a = 0;
let b = 0;
let c = 0;


//3600000000
start.onclick(StartTimer)
const StartTimer = () =>{
    
   setInterval(()=>{

        a++;
        s.value = a;
        if(a===60){
            a=0;
        }
    },10)
    
    
    
    const mf = setInterval(()=>{
    
        b++;
        m.value=b;
        if(b===60){
            b=0;
        }
    },600)
    
    
    const hf = setInterval(()=>{
    
        c++;
        h.value=c;
       
    },36000)

}

stop.onclick(()=>{
    clearInterval(hf);
console.log("123");
})

reset.onclick(()=>{
    h.value, m.value, s.value = 0;
})