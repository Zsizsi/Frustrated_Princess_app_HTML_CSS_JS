
const select_menu = () => { 
    let urlMenu = document.querySelector("#pr_tests");
    urlMenu.onchange = function() {
    let userOption = this.options[this.selectedIndex];
    if (userOption.value != "nothing") {
    window.open(userOption.value, "Princess tests", "");
    }
  }   
}

window.onload = () => {
    select_menu();
};


