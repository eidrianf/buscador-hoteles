///////////////////////////////////// PRIMERA PRE ENTREGA ///////////////////////////////////////////


/*
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


if (huespedes != "") {
    solicitarNombres();
    
    let habitaciones = prompt("Cuántas habitaciones (en números) desea reservar?");
        while (habitaciones == "") {
            habitaciones = prompt("Por favor ingrese un número válido:")
        }
        while (habitaciones > huespedes) {
            habitaciones = prompt("No puede reservar más habitaciones que la cantidad de huéspedes. Vuelva a ingresar el número de habitaciones:");
            while (habitaciones == "") {
                habitaciones = prompt("Por favor ingrese un número válido:")
            }
        };

    let noches = prompt("Ingrese la cantidad de noches de la estadía (en números):");
        while (noches == "") {
            noches = prompt("Por favor ingrese un número válido:");
        }

    alert("Usted ha reservado " + noches + " noches en " + habitaciones + " habitaciones para los siguientes pasajeros: " + nombresHuespedes + "! Los esperamos!");
};
*/


///////////////////////////////////// SEGUNDA PRE ENTREGA ///////////////////////////////////////////


/*

class Hotel {
    constructor(id, nombre, ciudad, tarifaNoche){
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.tarifaNoche = tarifaNoche;
    }
};

const hoteles = [];

hoteles.push(new Hotel(01, "Melia", "Buenos Aires", 15000));
hoteles.push(new Hotel(02, "NH Florida", "Buenos Aires", 23000));
hoteles.push(new Hotel(03, "Faena Buenos Aires", "Buenos Aires", 38000));

hoteles.push(new Hotel(04, "531 Hostel", "Córdoba", 8000));
hoteles.push(new Hotel(05, "Amerian Executive Córdoba Hotel", "Córdoba", 18000));
hoteles.push(new Hotel(06, "Azur Real Hotel Boutique", "Córdoba", 27000));

hoteles.push(new Hotel(07, "Hotel Tres Reyes", "Bariloche", 12000));
hoteles.push(new Hotel(08, "Peninsula Petit Hotel", "Bariloche", 24000));
hoteles.push(new Hotel(09, "Llao LLao Hotel Resort", "Bariloche", 44000));

hoteles.push(new Hotel(10, "Lujan de Cuyo B&B", "Mendoza", 10000));
hoteles.push(new Hotel(11, "Posada El Encuentro", "Mendoza", 20000));
hoteles.push(new Hotel(12, "Park Hyatt Mendoza", "Mendoza", 26000));

hoteles.push(new Hotel(13, "Hotel Posada del Sol", "Salta", 14000));
hoteles.push(new Hotel(14, "Sheraton Salta Hotel", "Salta", 22000));
hoteles.push(new Hotel(15, "Hotel Solar de la Plaza", "Salta", 28000));

hoteles.push(new Hotel(16, "Hosteria Valle Frio", "Ushuaia", 16000));
hoteles.push(new Hotel(17, "Hotel Los Nires", "Ushuaia", 25000));
hoteles.push(new Hotel(18, "Los Cauquenes Resort & Spa", "Ushuaia", 40000));


alert("Bienvenido a Hadrianus! El sistema más completo de reservas de hoteles en Argentina!")

let ciudadElegida;

function filtrarCiudad(hoteles, ciudadElegida){
    return hoteles.filter((hotel) => hotel.ciudad == ciudadElegida);
};

do {
    ciudadElegida = prompt("Elija la ciudad donde quiere reservar el alojamiento: \n Buenos Aires \n Córdoba \n Bariloche \n Mendoza \n Salta \n Ushuaia");
} while ((ciudadElegida == "") || (ciudadElegida == null) || ((ciudadElegida != "Buenos Aires") && (ciudadElegida != "Córdoba") && (ciudadElegida != "Bariloche") && (ciudadElegida != "Mendoza") && (ciudadElegida != "Salta") && (ciudadElegida != "Ushuaia")));

const filtroCiudad = filtrarCiudad(hoteles, ciudadElegida);

const hotelesFiltrados = [];

for (const hotel of filtroCiudad){
    hotelesFiltrados.push("\n" + hotel.nombre);
};

alert("Se encontraron los siguientes hoteles en " + ciudadElegida + ":" + hotelesFiltrados);


let presupuesto;

function filtrarPresupuesto(ciudadElegida, presupuesto){
    return ciudadElegida.filter((hotel) => hotel.tarifaNoche <= presupuesto);
};

do {
    presupuesto = Number(prompt("Por favor ingrese cual es su presupuesto en pesos por noche:")) 
} while ((presupuesto == "") || (presupuesto == null));

let tarifasFiltradas = 0;

for (const tarifa of filtroCiudad){
    if (tarifa.tarifaNoche <= presupuesto){
        tarifasFiltradas += 1;
    };
};

if (tarifasFiltradas > 0) {
    const filtroPresupuesto = filtrarPresupuesto(filtroCiudad, presupuesto);

    const hotelesPresupuesto = [];

    for (const hotel of filtroPresupuesto){
        hotelesPresupuesto.push("\n" + hotel.nombre + " - Tarifa por noche: " + "$" + hotel.tarifaNoche);  
    };

    let respuesta = confirm("Se encontraron los siguientes hoteles según su presupuesto por noche: " + hotelesPresupuesto + "\n \nDesea reservar un alojamiento?");

    let eleccion;

    if (respuesta) {
        do {
            eleccion = prompt("Ingrese el nombre del alojamiento en el que desear reservar:" + "\n" + hotelesPresupuesto); //si ingresas mal el nombre se rompe.
        } while ((eleccion == "") || (eleccion == null)); 
        
        const eleccionReserva = hoteles.find((hotel) => hotel.nombre == eleccion);

        function calcularTotal (tarifaNoche, cantidadNoches) {
            return tarifaNoche * cantidadNoches;
        };

        let cantidadNoches = Number(prompt("Por favor ingrese la cantidad de noches que desea hospedarse:"));

        let total = calcularTotal(eleccionReserva.tarifaNoche, cantidadNoches);
        console.log(total);

        alert("Felicitaciones! Ha reservado en el alojamiento " + eleccionReserva.nombre + " por " + cantidadNoches + " noches, sumando un total de: " + "$" + total + ".");
    } else {
        alert("Muchas gracias por utilizar nuestro sistema de bùsqueda!");
    };
} else{
    alert("No se encontraron alojamientos para su presupuesto por noche.")
};

*/

///////////////////////////////////// TERCERA PRE ENTREGA (PRUEBA) ///////////////////////////////////////////

/*
class Hotel {
    constructor(id, nombre, ciudad, tarifaNoche){
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.tarifaNoche = tarifaNoche;
    }
};

const hoteles = [];

hoteles.push(new Hotel(01, "Melia", "Buenos Aires", 15000));
hoteles.push(new Hotel(02, "NH Florida", "Buenos Aires", 23000));
hoteles.push(new Hotel(03, "Faena Buenos Aires", "Buenos Aires", 38000));

hoteles.push(new Hotel(04, "531 Hostel", "Córdoba", 8000));
hoteles.push(new Hotel(05, "Amerian Executive Córdoba Hotel", "Córdoba", 18000));
hoteles.push(new Hotel(06, "Azur Real Hotel Boutique", "Córdoba", 27000));

hoteles.push(new Hotel(07, "Hotel Tres Reyes", "Bariloche", 12000));
hoteles.push(new Hotel(08, "Peninsula Petit Hotel", "Bariloche", 24000));
hoteles.push(new Hotel(09, "Llao LLao Hotel Resort", "Bariloche", 44000));

hoteles.push(new Hotel(10, "Lujan de Cuyo B&B", "Mendoza", 10000));
hoteles.push(new Hotel(11, "Posada El Encuentro", "Mendoza", 20000));
hoteles.push(new Hotel(12, "Park Hyatt Mendoza", "Mendoza", 26000));

hoteles.push(new Hotel(13, "Hotel Posada del Sol", "Salta", 14000));
hoteles.push(new Hotel(14, "Sheraton Salta Hotel", "Salta", 22000));
hoteles.push(new Hotel(15, "Hotel Solar de la Plaza", "Salta", 28000));

hoteles.push(new Hotel(16, "Hosteria Valle Frio", "Ushuaia", 16000));
hoteles.push(new Hotel(17, "Hotel Los Nires", "Ushuaia", 25000));
hoteles.push(new Hotel(18, "Los Cauquenes Resort & Spa", "Ushuaia", 40000));


let ciudadElegida = document.getElementById("ciudadElegida");

ciudadElegida.addEventListener('change', (e) => {
    let filtro = e.target.value;
    let ciudadFiltrada;
    if (filtro === "Buenos Aires") {
        ciudadFiltrada = hoteles.filter((hotel) => hotel.ciudad === "Buenos Aires")
    } else if (filtro === "Córdoba") {
        ciudadFiltrada = hoteles.filter((hotel) => hotel.ciudad === "Córdoba")
    } else if (filtro === "Bariloche") {
        ciudadFiltrada = hoteles.filter((hotel) => hotel.ciudad === "Bariloche")
    } else if (filtro === "Mendoza") {
        ciudadFiltrada = hoteles.filter((hotel) => hotel.ciudad === "Mendoza")
    } else if (filtro === "Salta") {
        ciudadFiltrada = hoteles.filter((hotel) => hotel.ciudad === "Salta")
    } else if (filtro === "Ushuaia") {
        ciudadFiltrada = hoteles.filter((hotel) => hotel.ciudad === "Ushuaia")
    };
    console.log(ciudadFiltrada)
});
*/


// const hotelesFiltrados = [];

/*for (const hotel of filtroCiudad){
    hotelesFiltrados.push("\n" + hotel.nombre);
};

alert("Se encontraron los siguientes hoteles en " + ciudadElegida + ":" + hotelesFiltrados);


let presupuesto;

function filtrarPresupuesto(ciudadElegida, presupuesto){
    return ciudadElegida.filter((hotel) => hotel.tarifaNoche <= presupuesto);
};

do {
    presupuesto = Number(prompt("Por favor ingrese cual es su presupuesto en pesos por noche:")) 
} while ((presupuesto == "") || (presupuesto == null));

let tarifasFiltradas = 0;

for (const tarifa of filtroCiudad){
    if (tarifa.tarifaNoche <= presupuesto){
        tarifasFiltradas += 1;
    };
};

if (tarifasFiltradas > 0) {
    const filtroPresupuesto = filtrarPresupuesto(filtroCiudad, presupuesto);

    const hotelesPresupuesto = [];

    for (const hotel of filtroPresupuesto){
        hotelesPresupuesto.push("\n" + hotel.nombre + " - Tarifa por noche: " + "$" + hotel.tarifaNoche);  
    };

    let respuesta = confirm("Se encontraron los siguientes hoteles según su presupuesto por noche: " + hotelesPresupuesto + "\n \nDesea reservar un alojamiento?");

    let eleccion;

    if (respuesta) {
        do {
            eleccion = prompt("Ingrese el nombre del alojamiento en el que desear reservar:" + "\n" + hotelesPresupuesto); //si ingresas mal el nombre se rompe.
        } while ((eleccion == "") || (eleccion == null)); 
        
        const eleccionReserva = hoteles.find((hotel) => hotel.nombre == eleccion);

        function calcularTotal (tarifaNoche, cantidadNoches) {
            return tarifaNoche * cantidadNoches;
        };

        let cantidadNoches = Number(prompt("Por favor ingrese la cantidad de noches que desea hospedarse:"));

        let total = calcularTotal(eleccionReserva.tarifaNoche, cantidadNoches);
        console.log(total);

        alert("Felicitaciones! Ha reservado en el alojamiento " + eleccionReserva.nombre + " por " + cantidadNoches + " noches, sumando un total de: " + "$" + total + ".");
    } else {
        alert("Muchas gracias por utilizar nuestro sistema de bùsqueda!");
    };
} else{
    alert("No se encontraron alojamientos para su presupuesto por noche.")
};
*/


///////////////////////////////////// TERCERA PRE ENTREGA ///////////////////////////////////////////

class Usuario{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
};

const usuarios = [];
console.log(usuarios)

// REGISTRO
let registro = document.getElementById("formularioRegistro");

function registroUsuario (e) {
    e.preventDefault();
    e.target.value;
    let email = document.getElementById("emailRegistro").value;
    let password = document.getElementById("passwordRegistro").value;

    usuarios.push(new Usuario(email, password));

    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));

    formularioRegistro.reset();

    if ((usuarios != [])){
        let mensaje = document.getElementById("mensajeRegistro");
        mensaje.innerHTML = `Registro completado con exito.`
    }
};

registro.addEventListener('submit',registroUsuario);


// INICIO DE SESION
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));

let inicioSesión = document.getElementById("formularioInicio");

function inicioSesiónUsuario (e) {
    e.preventDefault();
    e.target.value;
    let email = document.getElementById("emailInicio").value;
    let password = document.getElementById("passwordInicio").value;

    formularioInicio.reset();

    const existeEmail = usuariosRegistrados.filter(usuario => usuario.email === email);
    
   
    for (const usuario of existeEmail){
        let emailUsuario = usuario.email;
        let passwordUsuario = usuario.password;

        if ((emailUsuario == email) && (passwordUsuario == password)){
            let mensaje = document.getElementById("mensajeInicioSesion");
            mensaje.innerHTML = `Bienvenido ${email}! Usted ha iniciado sesión correctamente.`
        } else {
            let mensaje = document.getElementById("mensajeInicioSesion");
            mensaje.innerHTML = `Email o contraseña incorrectos.`
        }
    }
    
    
};

inicioSesión.addEventListener('submit', inicioSesiónUsuario);