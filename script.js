let huespedes;
let nombresHuespedes = "";

function solicitarNombres() {
    for (i = 1; i < huespedes; i++) {
        nombresHuespedes += prompt("Ingrese nombre y apellido de un pasajero") + ", "; 
        if (i == huespedes-1) {
            nombresHuespedes += prompt("Ingrese nombre y apellido de un pasajero"); 
        }
    }
}

alert("Bienvenido al sistema de reservas del Hotel Hadrianus!")

do {
    huespedes = Number(prompt("Ingrese la cantidad de huespedes (en números):"));
} while (huespedes == "");


if (huespedes != "") /*acá me falta una condición para que en el prompt sólo se puedan ingresar números*/ {
    solicitarNombres();
    
    let habitaciones = prompt("Cuántas habitaciones (en números) desea reservar?");
        while (habitaciones == "") /*acá me falta una condición para que en el prompt sólo se puedan ingresar números*/ {
            habitaciones = prompt("Por favor ingrese un número válido:")
        }
        while (habitaciones > huespedes) {
            habitaciones = prompt("No puede reservar más habitaciones que la cantidad de huéspedes. Vuelva a ingresar el número de habitaciones:");
            while (habitaciones == "") {
                habitaciones = prompt("Por favor ingrese un número válido:")
            }
        };

    let noches = prompt("Ingrese la cantidad de noches de la estadía (en números):");
        while (noches == "") /*acá me falta una condición para que en el prompt sólo se puedan ingresar números*/ {
            noches = prompt("Por favor ingrese un número válido:");
        }

    alert("Usted ha reservado " + noches + " noches en " + habitaciones + " habitaciones para los siguientes pasajeros: " + nombresHuespedes + "! Los esperamos!");
};

