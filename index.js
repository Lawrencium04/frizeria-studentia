function setFocus() {
    var element = document.getElementById("cover-inactive") || document.getElementById("start-cover-inactive");
    element.id = "cover"
}

function removeFocus(el) {
    el.id = "cover-inactive";
}

function openMenu() {
    var el = document.getElementById("navbar")

        if (el.className == null || el.className == "")
            el.className = "menu-open";
        else
            el.className = "";
}