let turno = false;
let victoria = false;
let contador = 0;

const handleClick = (event) => {
    const { id } = event.target;
    const div = document.getElementById(id);

    if (div.innerText === "" && victoria === false){
        div.innerText = turno ? "O" : "X";
        
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
            

    
    if (forma1 || forma2 || forma3 || forma4 || forma5 || forma6 || forma7 || forma8) {
        
        //Dibujar línea roja
        const linea = document.getElementById("linea");
        
        linea.style.height = "10px";
        linea.style.width = "600px";
        linea.style.top = "80px";
        linea.style.left = "0px";
        
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

};

