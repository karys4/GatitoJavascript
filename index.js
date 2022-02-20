let turno = false;
let victoria = false;
let contador = 0;
let turnoX = document.getElementById("turnoX");
let turnoO = document.getElementById("turnoO");
turnoX.style.backgroundColor = "green";



const handleClick = (event) => {
    const { id } = event.target;
    const div = document.getElementById(id);
 
    if (div.innerText === "" && victoria === false){
        div.innerText = turno ? "O" : "X";

        if (div.innerText == "X") {
            turnoX.style.backgroundColor = "black";
            turnoO.style.backgroundColor = "green";
        
        } else {
            turnoX.style.backgroundColor = "green";
            turnoO.style.backgroundColor = "black";

        } 
        verificarVictoria();
        turno = !turno;
    }    
};

const verificarVictoria = () => {
    contador++;
    //Obtiene el id de cada contenedor
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    //Verificar las diversas combinaciones para ganar
            const forma1 = 
            div1.innerText === div2.innerText && 
            div1.innerText === div3.innerText &&
            div1.innerText !== "";

            const forma2 = 
            div4.innerText === div5.innerText && 
            div4.innerText === div6.innerText &&
            div4.innerText !== "";

            const forma3 = 
            div7.innerText === div8.innerText && 
            div7.innerText === div9.innerText &&
            div7.innerText !== "";

            const forma4 = 
            div1.innerText === div4.innerText && 
            div1.innerText === div7.innerText &&
            div1.innerText !== "";

            const forma5 = 
            div2.innerText === div5.innerText && 
            div2.innerText === div8.innerText &&
            div2.innerText !== "";

            const forma6 = 
            div3.innerText === div6.innerText && 
            div3.innerText === div9.innerText &&
            div3.innerText !== "";

            const forma7 = 
            div1.innerText === div5.innerText && 
            div1.innerText === div9.innerText &&
            div1.innerText !== "";

            const forma8 = 
            div3.innerText === div5.innerText && 
            div3.innerText === div7.innerText &&
            div3.innerText !== "";

        //let formas = [forma1,forma2,forma3,forma4,forma5,forma6,forma7,forma8];    
            

    
    if (forma1 || forma2 || forma3 || forma4 || forma5 || forma6 || forma7 || forma8) {
        
        //Dibujar línea 
        const linea = document.getElementById("linea");

        if (forma1) {
            linea.style.height = "10px";
            linea.style.width = "600px";
            linea.style.top = "270px";
            linea.style.left = "0px";
        } else if (forma2) {
            linea.style.height = "10px";
            linea.style.width = "600px";
            linea.style.top = "470px";
            linea.style.left = "0px";
        }  else if (forma3) {
            linea.style.height = "10px";
            linea.style.width = "600px";
            linea.style.top = "670px";
            linea.style.left = "0px";
        }  else if (forma4) {
            linea.style.height = "600px";
            linea.style.width = "10px";
            linea.style.top = "200px";
            linea.style.left = "90px";
        }  else if (forma5) {
            linea.style.height = "600px";
            linea.style.width = "10px";
            linea.style.top = "200px";
            linea.style.left = "290px";
        }  else if (forma6) {
            linea.style.height = "600px";
            linea.style.width = "10px";
            linea.style.top = "200px";
            linea.style.left = "500px";

            //TODO: Agregar líneas diagonales para forma7 y forma8
        }  else if (forma7) {
            linea.style.height = "600px";
            linea.style.width = "10px";
            linea.style.top = "200px";
            linea.style.left = "90px";
            linea.style.rotate("80");
        }  else if (forma8) {
            linea.style.height = "600px";
            linea.style.width = "10px";
            linea.style.top = "200px";
            linea.style.left = "90px";
            linea.style.rotate("80");
        }  

        
        
        //TODO: Intentar hacerlo con un switch usando el array formas.
        /*switch(formas){

            case formas[0]:
            linea.style.height = "10px";
            linea.style.width = "600px";
            linea.style.top = "270px";
            linea.style.left = "0px";
            break;

            case forma2:
            linea.style.height = "10px";
            linea.style.width = "600px";
            linea.style.top = "400px";
            linea.style.left = "0px";
            break;
        }*/
        
        
        alert(`Los ganadores son las ${turno ? "O" : "X"}`);
        victoria = true;
    } else {
        if (contador == 9) {
            alert("Fin de la partida, empate");
        }
    }
};

const reload = () => {
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    linea.style.height = "0px";
    linea.style.width = "0px";
    linea.style.top = "0px";
    linea.style.left = "0px";

    turno = false;
    victoria =false;
    contador = 0;
    turnoX.style.backgroundColor = "green";
    turnoO.style.backgroundColor = "black";

};

