var menu = window.pageYOffset;

window.onscroll = function() {scrollFunction()} 
    
function scrollFunction() {

    
    var myMenu = window.pageYOffset;



    if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
        if (menu > myMenu) {
            document.getElementById("jungle").style.display = "block";
            document.getElementById("myMenu").style.display = "block";
        } else {
            document.getElementById("jungle").style.display = "none";
            document.getElementById("myMenu").style.display = "none";
        }
        menu = myMenu;
    } else {
        document.getElementById("jungle").style.display = "none";
        document.getElementById("myMenu").style.display = "none";
     
    }

    if (document.body.scrollTop > 19 || document.documentElement.scrollTop > 19) {
        document.getElementById("th1").style.opacity = "1";
        document.getElementById("th2").style.opacity = "1";
        document.getElementById("th3").style.opacity = "1";
        document.getElementById("th4").style.opacity = "1";
        document.getElementById("th5").style.opacity = "1";
        document.getElementById("th6").style.opacity = "1";
        document.getElementById("th1").style.pointerEvents = "all";
        document.getElementById("th2").style.pointerEvents = "all";
        document.getElementById("th3").style.pointerEvents = "all";
        document.getElementById("th4").style.pointerEvents = "all";
        document.getElementById("th5").style.pointerEvents = "all";
        document.getElementById("th6").style.pointerEvents = "all";
    } else {
        document.getElementById("th1").style.opacity = "0";
        document.getElementById("th2").style.opacity = "0";
        document.getElementById("th3").style.opacity = "0";
        document.getElementById("th4").style.opacity = "0";
        document.getElementById("th5").style.opacity = "0";
        document.getElementById("th6").style.opacity = "0";
        document.getElementById("th1").style.pointerEvents = "none";
        document.getElementById("th2").style.pointerEvents = "none";
        document.getElementById("th3").style.pointerEvents = "none";
        document.getElementById("th4").style.pointerEvents = "none";
        document.getElementById("th5").style.pointerEvents = "none";
        document.getElementById("th6").style.pointerEvents = "none";
    }

}
