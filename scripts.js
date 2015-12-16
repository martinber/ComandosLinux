function colapsar(elem) {
    if (elem.parentNode.style.height == "inherit") {
        elem.parentNode.style.height = "2rem";
    }
    else {
        elem.parentNode.style.height = "inherit";
    } 
}
function colapsarTodo() {
    if (document.getElementsByTagName('H2')[0].parentNode.style.height == 
            "inherit") {
        for (var i = 0; i < document.getElementsByTagName('H2').length; i++) {
            document.getElementsByTagName('H2')[i].parentNode.style.height = 
                    "2rem";
        }
    }
    else {
        for (var i = 0; i < document.getElementsByTagName('H2').length; i++) {
            document.getElementsByTagName('H2')[i].parentNode.style.height = 
                    "inherit";
        }
    }
}
