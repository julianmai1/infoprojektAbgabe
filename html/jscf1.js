let gesamtpreis = 0; // deklariert Variable gesamtpreis

window.onload=function(){ //es lädt erst die Website und dann deklariert es die Variablen
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {

        gesamtpreis += parseFloat(document.getElementById("product1").ariaLabel);
        console.log(gesamtpreis);
document.getElementById("Warenkorb").innerHTML = `ihr Warenkorb: ${gesamtpreis.toFixed (2)}`; // rundet nur auf 2 Kommastellen
    });
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => {

        gesamtpreis += parseFloat(document.getElementById("product2").ariaLabel);
        console.log(gesamtpreis);
        document.getElementById("Warenkorb").innerHTML = `ihr Warenkorb beträgt: ${gesamtpreis.toFixed (2)}`;
    });
    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", () => {

        gesamtpreis += parseFloat(document.getElementById("product3").ariaLabel);
        console.log(gesamtpreis);
        document.getElementById("Warenkorb").innerHTML = `ihr Warenkorb beträgt: ${gesamtpreis.toFixed (2)}`;
    });
    let btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", () => {

        gesamtpreis += parseFloat(document.getElementById("product4").ariaLabel);
        console.log(gesamtpreis);
        document.getElementById("Warenkorb").innerHTML = `ihr Warenkorb beträgt: ${gesamtpreis.toFixed (2)}`;


});
    let btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", () => {

        gesamtpreis += parseFloat(document.getElementById("product5").ariaLabel);
        console.log(gesamtpreis);
        document.getElementById("Warenkorb").innerHTML = `ihr Warenkorb beträgt: ${gesamtpreis.toFixed (2)}`;


    });
    let btn6 = document.getElementById("btn6");
    btn6.addEventListener("click", () => {

        gesamtpreis += parseFloat(document.getElementById("product6").ariaLabel);
        console.log(gesamtpreis);
        document.getElementById("Warenkorb").innerHTML = `ihr Warenkorb beträgt: ${gesamtpreis.toFixed (2)}`;


    });

    }





    function produktAnzeigen(nr) {

    if (nr === 0) {
        document.getElementById("product1").style.display = "block"; //klick auf Button0 -> nur product 0 wird angezeigt
        document.getElementById("product2").style.display = "block";
        document.getElementById("product3").style.display = "block";
        document.getElementById("product4").style.display = "block";
        document.getElementById("product5").style.display = "block";
        document.getElementById("product6").style.display = "block";
    }



    if (nr === 1) {
        document.getElementById("product1").style.display = "block"; //klick auf Button1 -> nur product 1 wird angezeigt
            document.getElementById("product2").style.display = "none";
            document.getElementById("product3").style.display = "none";
            document.getElementById("product4").style.display = "none";
            document.getElementById("product5").style.display = "none";
            document.getElementById("product6").style.display = "none";
    }
    if (nr === 2) {
        document.getElementById("product1").style.display = "none";//klick auf Button2 -> nur product 2 wird angezeigt
        document.getElementById("product2").style.display = "block";
        document.getElementById("product3").style.display = "none";
        document.getElementById("product4").style.display = "none";
        document.getElementById("product5").style.display = "none";
        document.getElementById("product6").style.display = "none";
    }
        if (nr === 3) {
            document.getElementById("product1").style.display = "none";//klick auf Button3 -> nur product 3 wird angezeigt
            document.getElementById("product2").style.display = "none";
            document.getElementById("product3").style.display = "block";
            document.getElementById("product4").style.display = "none";
            document.getElementById("product5").style.display = "none";
            document.getElementById("product6").style.display = "none";
            }
        if (nr === 4) {
            document.getElementById("product1").style.display = "none";//klick auf Button4 -> nur product 4 wird angezeigt
            document.getElementById("product2").style.display = "none";
            document.getElementById("product3").style.display = "none";
            document.getElementById("product4").style.display = "block";
            document.getElementById("product5").style.display = "none";
            document.getElementById("product6").style.display = "none";
        }
        if (nr === 5) {
            document.getElementById("product1").style.display = "block";//klick auf Button4 -> nur product 4 wird angezeigt
            document.getElementById("product2").style.display = "block";
            document.getElementById("product3").style.display = "none";
            document.getElementById("product4").style.display = "none";
            document.getElementById("product5").style.display = "none";
            document.getElementById("product6").style.display = "none";
            }
        if (nr === 6) {
            document.getElementById("product1").style.display = "none";//klick auf Button4 -> nur product 4 wird angezeigt
            document.getElementById("product2").style.display = "none";
            document.getElementById("product3").style.display = "block";
            document.getElementById("product4").style.display = "block";
            document.getElementById("product5").style.display = "none";
            document.getElementById("product6").style.display = "none";
        }
        if (nr === 7) {
            document.getElementById("product1").style.display = "none";//klick auf Button4 -> nur product 4 wird angezeigt
            document.getElementById("product2").style.display = "none";
            document.getElementById("product3").style.display = "none";
            document.getElementById("product4").style.display = "none";
            document.getElementById("product5").style.display = "block";
            document.getElementById("product6").style.display = "block";
            }


        if (nr === 8) {
            document.getElementById("product1").style.display = "none";//klick auf Button4 -> nur product 4 wird angezeigt
            document.getElementById("product2").style.display = "none";
            document.getElementById("product3").style.display = "none";
            document.getElementById("product4").style.display = "none";
            document.getElementById("product5").style.display = "block";
            document.getElementById("product6").style.display = "none";
        }
        if (nr === 9) {
            document.getElementById("product1").style.display = "none";//klick auf Button4 -> nur product 4 wird angezeigt
            document.getElementById("product2").style.display = "none";
            document.getElementById("product3").style.display = "none";
            document.getElementById("product4").style.display = "none";
            document.getElementById("product5").style.display = "none";
           document.getElementById("product6").style.display = "block";
            }

        }