function viewFunction(z) {
    if (z.matches) {

        window.onscroll = function() {mobileFunction()}

        var mobile = window.pageYOffset;

        function mobileFunction() {

            
            
            
            var myMobile = window.pageYOffset;

            if (mobile > myMobile) {
                document.getElementById("menu").style.display = "block";
                document.getElementById("jungle").style.transform = "scale(1)";
                
                document.getElementById("jungle").style.opacity = "0.5";
                document.getElementById("dungle").style.opacity = "0.5";
                document.getElementById("dungle").style.transform = "scale(1)";


                
            } else {
                document.getElementById("menu").style.display = "none";
                document.getElementById("dungle").style.opacity = "0";
                document.getElementById("dungle").style.transform = "scale(0)";

                document.getElementById("jungle").style.opacity = "0";
                document.getElementById("jungle").style.transform = "scale(0)";
                
                
            }
            mobile = myMobile;
        }  
    } else {
        window.onscroll = function() {scrollFunction()}

        var menu = window.pageYOffset;
        function scrollFunction() {

            
            if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
                document.getElementById("myStreet").style.display = "none";
                document.getElementById("jungle").style.display = "block";
                document.getElementById("dungle").style.display = "block";

            } else {
                document.getElementById("jungle").style.display = "none";
                document.getElementById("dungle").style.display = "none";

                document.getElementById("myStreet").style.display = "block";
            }

            if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
                document.getElementById("army1").style.opacity = "1";
                document.getElementById("army2").style.opacity = "1";
                document.getElementById("army3").style.opacity = "1";
                document.getElementById("army1").style.transform = "scale(1)";
                document.getElementById("army2").style.transform = "scale(1)";
                document.getElementById("army3").style.transform = "scale(1)";

                
            } else {
                document.getElementById("army1").style.opacity = "1";
                document.getElementById("army2").style.opacity = "1";
                document.getElementById("army3").style.opacity = "1";
                document.getElementById("army1").style.transform = "scale(1)";
                document.getElementById("army2").style.transform = "scale(1)";
                document.getElementById("army3").style.transform = "scale(1)";
            }


            if (document.body.scrollTop > 820 || document.documentElement.scrollTop > 820) {
                document.getElementById("c1").style.opacity = "1";
                document.getElementById("c2").style.opacity = "1";
                document.getElementById("c3").style.opacity = "1";
                document.getElementById("c4").style.opacity = "1";

                document.getElementById("c1").style.transform = "scale(1)";
                document.getElementById("c2").style.transform = "scale(1)";
                document.getElementById("c3").style.transform = "scale(1)";
                document.getElementById("c4").style.transform = "scale(1)";
            } else {
                document.getElementById("c1").style.opacity = "1";
                document.getElementById("c2").style.opacity = "1";
                document.getElementById("c3").style.opacity = "1";
                document.getElementById("c4").style.opacity = "1";

                document.getElementById("c1").style.transform = "scale(1)";
                document.getElementById("c2").style.transform = "scale(1)";
                document.getElementById("c3").style.transform = "scale(1)";
                document.getElementById("c4").style.transform = "scale(1)";
            }


            if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
                document.getElementById("game1").style.opacity = "1";
                document.getElementById("game2").style.opacity = "1";
                document.getElementById("game3").style.opacity = "1";
                document.getElementById("game4").style.opacity = "1";
                document.getElementById("game5").style.opacity = "1";
                document.getElementById("game6").style.opacity = "1";
                document.getElementById("game7").style.opacity = "1";
                document.getElementById("game8").style.opacity = "1";
            } else {
                document.getElementById("game1").style.opacity = "1";
                document.getElementById("game2").style.opacity = "1";
                document.getElementById("game3").style.opacity = "1";
                document.getElementById("game4").style.opacity = "1";
                document.getElementById("game5").style.opacity = "1";
                document.getElementById("game6").style.opacity = "1";
                document.getElementById("game7").style.opacity = "1";
                document.getElementById("game8").style.opacity = "1";
            }
            

            if (document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700) {
                document.getElementById("cup1").style.opacity = "1";
                document.getElementById("cup2").style.opacity = "1";
                document.getElementById("cup3").style.opacity = "1";
            } else {
                document.getElementById("cup1").style.opacity = "1";
                document.getElementById("cup2").style.opacity = "1";
                document.getElementById("cup3").style.opacity = "1";
            }





            if (document.body.scrollTop > 5200 || document.documentElement.scrollTop > 5200) {
                document.getElementById("web1").style.opacity = "1";
                document.getElementById("web2").style.opacity = "1";
                document.getElementById("web3").style.opacity = "1";
                document.getElementById("web4").style.opacity = "1";
                document.getElementById("web5").style.opacity = "1";
                document.getElementById("web6").style.opacity = "1";
            } else {
                document.getElementById("web1").style.opacity = "1";
                document.getElementById("web2").style.opacity = "1";
                document.getElementById("web3").style.opacity = "1";
                document.getElementById("web4").style.opacity = "1";
                document.getElementById("web5").style.opacity = "1";
                document.getElementById("web6").style.opacity = "1";
            }
            
            
            var myMenu = window.pageYOffset;

            if (menu > myMenu) {
                document.getElementById("jungle").style.opacity = "0.5";
                document.getElementById("jungle").style.transform = "scale(1)";
                document.getElementById("dungle").style.opacity = "0.5";
                document.getElementById("dungle").style.transform = "scale(1)";
            } else {
                document.getElementById("jungle").style.opacity = "0";
                document.getElementById("jungle").style.transform = "scale(0)";
                document.getElementById("dungle").style.opacity = "0";
                document.getElementById("dungle").style.transform = "scale(0)";
            }
            menu = myMenu;
        }
    }
}

var z = window.matchMedia("(max-width:720px)");

viewFunction(z);

z.addListener(viewFunction);

function barFunction() {
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("leftMenu").style.display = "block";
    document.getElementById("paper").style.display = "block";
    document.getElementById("fine").style.opacity = "0";
    document.body.style.overflow = "hidden";
}

function paperFunction() {
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("leftMenu").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("fine").style.opacity = "1";
    document.body.style.overflow = "auto";
}

var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("our").click();
    }
});

function ourFunction() {
    document.getElementById("input").value = ""
}


function moreFunction() {
    document.getElementById("more").innerHTML = "to allow my users to run them on any modern devices.";
    document.getElementById("more").style.opacity = "1";
    document.getElementById("armor").style.display = "none";
}


function switchFunction() {
    var elem = document.body;
    elem.classList.toggle("onoff");
}

function boFunction() {
    document.getElementById("demo").scrollIntoView()
}

function skillFunction() {
    document.getElementById("bully").style.display = "block";
}


function bullyFunction() {
    document.getElementById("bully").style.display = "none";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}

function bgFunction() {
    document.getElementById("bozorg").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
}

function bozorgFunction() {
    document.getElementById("bozorg").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
}

function poFunction() {
    document.getElementById("polo").style.display = "block";
}

function poloFunction() {   
    document.getElementById("polo").style.display = "none";
}

function rapFunction() {
    document.getElementById("rap").style.display = "none";
}

function rpFunction() {
    document.getElementById("rap").style.display = "block";
}

function frFunction() {
    document.getElementById("faster").style.display = "block";
}

function fasterFunction() {
    
    document.getElementById("faster").style.display = "none";
}



function vloneFunction() {
    document.getElementById("risk").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
}

function riskFunction() {
    var risk = setInterval(riskFunction, 1000);

    function riskFunction() {       
        document.getElementById("risk").style.display = "none";
        
        document.getElementById("body").style.overflow = "auto";
        clearInterval(risk);
    }
}


var aud = document.getElementById("myAudio");

function playFunction() {
    aud.play()

}


function addAltAtrr() {
    //get the images
    let grabImage = document.querySelectorAll("img"); 
     
    //loop through all images
    for (let i = 0; i < grabImage.length; i++) {  
        grabImage[i].setAttribute("alt", "mehtisup");   
    }

}

addAltAtrr();

function hoFunction() {
    document.getElementById("aval").classList.toggle("lava");
    document.getElementById("hi1").classList.toggle("rain");
    document.getElementById("ho1").classList.toggle("yeah");
    document.getElementById("fl1").classList.toggle("pa1");

}

function jeezFunction() {
    document.getElementById("dovom").classList.toggle("movod");
    document.getElementById("hi2").classList.toggle("jeez");
    document.getElementById("ho2").classList.toggle("weed");
    document.getElementById("fl2").classList.toggle("pa2");
}

function thisFunction() {
    document.getElementById("sevom").classList.toggle("moves");
    document.getElementById("hi3").classList.toggle("this");
    document.getElementById("fl3").classList.toggle("pa3");
}

function soldierFunction() {
    document.getElementById("coke").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    var tr = setInterval(trFunction, 3000);
    
    function trFunction() {
        document.getElementById("coke").style.display = "none";
        document.getElementById("body").style.overflow = "auto";
        clearInterval(tr);
    }
}

