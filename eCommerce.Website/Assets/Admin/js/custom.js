/////* When the user clicks on the button,
////toggle between hiding and showing the dropdown content */
////function myFunction(a) {
////    //alert(a.nextElementSibling.id);
////    var divId = a.nextElementSibling.id;
////    document.getElementById(divId).classList.toggle("show");
////}

////// Close the dropdown if the user clicks outside of it
////window.onclick = function (e) {
////    if (!e.target.matches('.dropbtn')) {
////        var dropdowns = document.getElementsByClassName("dropdown-content");
////        for (var d = 0; d < dropdowns.length; d++) {
////            var openDropdown = dropdowns[d];
////            if (openDropdown.classList.contains('show')) {
////                openDropdown.classList.remove('show');
////            }
////        }
////    }
////}

function myFunction() {
    var element = document.getElementById('dropdown1');
    //var element = a.nextElementSibling.id;
    console.log(element)
    //element.classList.add("menu-is-opening menu-open");
    if (element.className === "nav-item menu-is-opening menu-open") {
        element.className = "nav-item";
    }
    else {
        element.className += " menu-is-opening menu-open";
    }
    console.log(element);
}
//document.getElementById("dropdown1").classList.toggle("nav-item menu-is-opening menu-open");

function myFunction2() {
    var element = document.getElementById('dropdown2');
    //var element = a.nextElementSibling.id;
    console.log(element)
    //element.classList.add("menu-is-opening menu-open");
    if (element.className === "nav-item system menu-is-opening menu-open") {
        element.className = "nav-item system";
    }
    else {
        element.className += " menu-is-opening menu-open";
    }
    console.log(element);

    //document.getElementById("dropdown1").classList.toggle("nav-item menu-is-opening menu-open");
}

function myFunction3() {
    var element = document.getElementById('dropdown3');
    //var element = a.nextElementSibling.id;
    console.log(element)
    //element.classList.add("menu-is-opening menu-open");
    if (element.className === "nav-item statistic menu-is-opening menu-open") {
        element.className = "nav-item statistic";
    }
    else {
        element.className += " menu-is-opening menu-open";
    }
    console.log(element);

    //document.getElementById("dropdown1").classList.toggle("nav-item menu-is-opening menu-open");
}

///* When the user clicks on the button,
//toggle between hiding and showing the dropdown content */
//function myFunction(a) {
//    //alert(a.nextElementSibling.id);
//    var divId = a.nextElementSibling.id;
//    document.getElementById(divId).classList.toggle("show");
//}

//// Close the dropdown if the user clicks outside of it
//window.onclick = function (e) {
//    if (!e.target.matches('.dropbtn')) {
//        var dropdowns = document.getElementsByClassName("dropdown-content");
//        for (var d = 0; d < dropdowns.length; d++) {
//            var openDropdown = dropdowns[d];
//            if (openDropdown.classList.contains('show')) {
//                openDropdown.classList.remove('show');
//            }
//        }
//    }
//}