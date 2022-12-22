let text = "";
let result = "";
let toggle = false;

buttons = $(".btn");
for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", func);
}

function func(e) {
    clicked = e.target.id;

    $("#calc-output").css("font-size","2rem");

    if(toggle == true) {
        text = $("#calc-output").text();
        $("#calc-output").text("");
    }

    for(let i=0; i<=9; i++) {
        if(toggle == true && (parseInt(clicked.slice(3)) == i)) {
            text = "";
        }
    }
    toggle = false;
    if(clicked == "CE") {
        text = "";
        $("#calc-input").text("");
        $("#calc-output").text("");
        return;
    }
    else if(clicked == "CL") {
        if(toggle == true) {
            text = "";
        }
        if(text.length > 0) {
            text = text.slice(0,-1);
        }
    }
    else if(clicked == "equal") {
        $("#calc-input").text("");
        toggle = true;
        $("#calc-output").css("font-size","3.5rem");
        return;
    }
    else {
        text += clicked.slice(3);
    }

    $("#calc-input").text(text); 

    if(text != "") {
        result = eval(text);
    }   
    else {
        result = "";
    }
    $("#calc-output").text(result);
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

