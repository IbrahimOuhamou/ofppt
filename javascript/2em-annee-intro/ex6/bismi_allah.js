// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah
spanHeure=document.getElementById("spHeure") 
spanMinute=document.getElementById("spMinute") 
spanSecond=document.getElementById("spSecond") 
let initTime={heure:10,minute:23,second:5} 
let currentTime=initTime 
let timer=null 

function incrementer(temps){ 
    time={...temps} 
    return function(){ 
        time.second++ 
        if(time.second>=60){ 
            time.second=0 
            time.minute++ 
            if(time.minute>=60){ 
                time.minute=0 
                time.heure++ 
            } 
        } 
        affiche(time) 
        currentTime=time 
        return time 
    } 
} 

function decrementer(temps){ 
    time={...temps} 
    return function(){ 
        time.second-=1
        if(time.second<=0){ 
            time.second=59 
            time.minute-=1
            if(time.minute<=0){ 
                time.minute=59
                time.heure-=1
            } 
        } 
        affiche(time) 
        currentTime=time 
        return time 
    } 
} 

function affiche(time){ 
    spanHeure.innerHTML=time.heure; 
    spanMinute.innerHTML=time.minute; 
    spanSecond.innerHTML=time.second; 
} 
function stopTimer() { 
    if(timer){ 
      clearInterval( timer);   
    } 
    timer = null; 
} 
function incrementerTimer() { 
    stopTimer() 
    let next=incrementer(currentTime)   
    timer=setInterval(next,1000);      
}
function decrementerTimer() { 
    stopTimer() 
    let next=decrementer(currentTime)   
    timer=setInterval(next,1000);      
}
