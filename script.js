let string = ""
let buttons = document.querySelectorAll(".btns"); // It wil create an array
let fnx = document.querySelector(".t1");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if (e.target.innerHTML == "=") {
            string = eval(string);
            fnx.value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            fnx.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            fnx.value = string;
        }
    })
})