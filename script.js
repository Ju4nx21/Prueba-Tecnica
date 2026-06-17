const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function toggleSign(){

    if(display.value === "") return;

    if(display.value.startsWith("-")){
        display.value = display.value.slice(1);
    }else{
        display.value = "-" + display.value;
    }
}

function calculate(){

    try{

        let result = eval(display.value);

        if(!isFinite(result)){
            display.value = "Error";
            return;
        }

        display.value = result;

    }catch{

        display.value = "Error";

    }
}

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if(!isNaN(key)){
        append(key);
    }

    else if(["+","-","*","/"].includes(key)){
        append(key);
    }

    else if(key === "."){
        append(".");
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        backspace();
    }

    else if(key === "Escape"){
        clearDisplay();
    }
});
