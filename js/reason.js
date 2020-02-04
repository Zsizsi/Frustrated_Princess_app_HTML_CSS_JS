const reasonsArr = ["My nails got broken.",
                "The weather forecast said tomorrow will be raninig.",
                "The weather forecast said tomorrow the sun will shine.",
                "Tomorrow I know I will have a headache.",
                "I got one kilogram more.",
                "My boyfriend did not do what I wanted.",
                "I know tomorrow I just have to be depressed but do not know why.",
                "My hair color did not turn out to be how I wanted.",
                "I am just attracted to drama and I am hungry for more.",
                "I can not imagine my life without drama, because I do not want to face with my frustrated personality.",
                "My mother is depressed so I have to be too.",
                "I just want to be depressed because it is cool and fashionable.",
                "I have too much freetime, so I need to be depressed because would be too boring to be normal, and to be happy for something.",
                "I am really forcing people to do what I want, but they do not seem to do, and it makes me really depressed.",
                "My voices said in my head that I have to be depressed tomorrow.",
                "I want to be depressed tomorrow because everyone else will be like usually.",
                "I want to be depressed because someone smiled at me in the shop.",
                "I want to be depressed because I have to sorrow myself I do not know why.",
                "Fake is the new trend and everyone seems to be in style.",
                "I do not have anyone to blame today for I do not know why.",
                "I think I am so smart and pretty, but I am too blond to undersand people do not do what I want.",
                "The next episode in my extra blond head soap opera is to be dramatic and depressed.",
                "I can not be a Brasilian soap opera star like Natalia Oreiro. It is so depressing.",
                "No one understand me because I do not know what for to be depressed tomorrow.",
                "Someone started to talk to me at the bus stop.",
                "Someone asked from me: How are you?"
             ];   


//=========== random generators =============================================================


const reasonGenerator = (reasonsArr) => {
    let reason = reasonsArr[(Math.floor(Math.random() * reasonsArr.length))];
    return reason;
}

//========= print method =========================

 
const print_reason = (reasonGenerator) => {
    const div_id = document.querySelector("#reason_text");
    if(div_id.hasChildNodes() === false) {
        const inner_div = document.createElement("div");
        inner_div.innerHTML = reasonGenerator + "<br />";
        div_id.appendChild(inner_div);
    } else {
        div_id.querySelectorAll("*").forEach(n => n.remove());
        const inner_div = document.createElement("div");
        inner_div.innerHTML = reasonGenerator + "<br />";
        div_id.appendChild(inner_div);
    }
};

//======= event listener ==================================================

const set_up_reason_gen = (print_reason) => {
    const btn_id = document.querySelector("#depi_btn");
    btn_id.addEventListener("click", print_reason);
}

//======= call methods======================================
window.onload = () => {
   set_up_reason_gen(() => print_reason(reasonGenerator(reasonsArr)));
};


