const quotesArr = ["You think I want to be like you? Princess please!! I would have to drop 10 IQ points, and look like a cracked out clown to be like you",
                  "Put me in a room with the same person who talk shit about me and watch how friendly they become.",
                  "Why are you so quiet? \n me: I do not feel connected to a damn thing that ain\'t got nothing to do with me.",
                  "You do not have to expose the fakeness in girls. In due time they will expose themselves",
                  "Sweetie I am not frustrated and laugh at your bad luck. I am merely cheering on Karma for doing such a great job of biting you in the ass..",
                  "Many Princess swears her ex is missing out and he is dumb for letting her go...They do not care about you and they are the most lucky mans on Earth",
                  "One thing I know I can make. Everyone feel crazy around me.",
                  "Some girl will never like me. And I will never care.",
                  "To have a wife with no commitment is like going to work and not getting paid.Poor mans doing too much for nothing.",
                  "Yeah Princess it is totally realistic to think it is everyone else...when your dumb soap opera in your head is the common denominator in every situation.",
                  "Lord, give me the strength to tolerate these fake Princesses.",
                  "I can not say the word sorry, because I was all the time too busy to find out why to be depressed tommorow, and I have never learned to have any empathy",
                  "Sometimes I question my sanity but the unicorns and gummy bears told me I am fine."
                ];
const div_id = document.querySelector("#quote_text");
   
const quoteGenerator = (quotesArr) => {
    let quote = quotesArr[(Math.floor(Math.random() * quotesArr.length))];
    return quote;
};

const print_quote = (quoteGenerator) => {
    const div_id = document.querySelector("#quote_text");
    if(div_id.hasChildNodes() === false) {
        const inner_div = document.createElement("div");
        inner_div.id = "innerQuote";
        inner_div.innerHTML = quoteGenerator + "<br />" ;
        div_id.appendChild(inner_div);
    } else {
        div_id.querySelectorAll('*').forEach(n => n.remove());
        const inner_div = document.createElement("div");
        inner_div.id = "innerQuote";
        inner_div.innerHTML = quoteGenerator + "<br />" ;
        div_id.appendChild(inner_div);
   }
};

const set_up_quote_gen = (print_quote) => {
    const btn_id = document.querySelector("#quote_btn");
    btn_id.addEventListener("click", print_quote);
};

window.onload = () => {
    set_up_quote_gen(() => print_quote((quoteGenerator(quotesArr))));
};


