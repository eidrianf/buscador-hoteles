///////////////////////////////////// PROYECO FINAL ///////////////////////////////////////////

document.getElementById("registro").style.display = 'none';
document.getElementById("ingresar").style.display = 'none';

// NAVEGACION

let botonRegistro = document.getElementById("botonRegistro");
botonRegistro.addEventListener('click', show => {
    document.getElementById("registro").style.display = 'block';
    document.getElementById("index").style.display = 'none';
    document.getElementById("ingresar").style.display = 'none';
});

let botonIngresar = document.getElementById("botonIngresar");
botonIngresar.addEventListener('click', show => {
    document.getElementById("ingresar").style.display = 'block';
    document.getElementById("index").style.display = 'none';
    document.getElementById("registro").style.display = 'none';
});


class Usuario{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
};

let usuarios = [];


// REGISTRO

let registro = document.getElementById("formularioRegistro");

function registroUsuario (e) {
    e.preventDefault();
    e.target.value;
    let email = document.getElementById("emailRegistro").value;
    let password = document.getElementById("passwordRegistro").value;

    usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados"));

    if (usuarios == null){
        usuarios = [];
    };

    const emailExistente = usuarios.some((usuario) => usuario.email === email);

    if (emailExistente != true){
        usuarios.push(new Usuario(email, password));
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));
        Swal.fire({
            icon: 'success',
            text: `Registro completado con exito.`,
            showConfirmButton: false,
            timer: 3000
          });
        setTimeout( () => { 
            document.getElementById("registro").style.display = 'none';
            document.getElementById("ingresar").style.display = 'block';
         }, 3000 );
    } else{
        let mensaje = document.getElementById("mensajeRegistro");
        mensaje.innerHTML = `Ya existe un usuario con el e‑mail ${email}`;
    }

    setTimeout( () => { 
        let mensaje = document.getElementById("mensajeRegistro");
        mensaje.innerHTML = ``;
     }, 3000 );

    formularioRegistro.reset();

};

registro.addEventListener('submit',registroUsuario);


// INICIO DE SESION

let inicioSesion = document.getElementById("formularioInicio");

function inicioSesionUsuario (e) {
    e.preventDefault();
    e.target.value;
    let email = document.getElementById("emailInicio").value;
    let password = document.getElementById("passwordInicio").value;

    formularioInicio.reset();

    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));
    //?//

    let existeEmail;
    if (usuariosRegistrados != null){
        existeEmail = usuariosRegistrados.filter(usuario => usuario.email === email);
    }else{
        let mensaje = document.getElementById("mensajeInicioSesion");
        mensaje.innerHTML = `Usuario inexistente. Por favor regístrese primero.`
    };
    
    if ((existeEmail.length == 0)) {
        let mensaje = document.getElementById("mensajeInicioSesion");
        mensaje.innerHTML = `Usuario inexistente. Por favor regístrese primero.`
    }else {
        for (const usuario of existeEmail){
            let emailUsuario = usuario.email;
            let passwordUsuario = usuario.password;

            if ((emailUsuario == email) && (passwordUsuario == password)){
                Swal.fire({
                    icon: 'success',
                    text: `Bienvenido ${email}! Usted ha iniciado sesión correctamente.`,
                    showConfirmButton: false,
                    timer: 3000
                  });
                setTimeout( () => { 
                    document.getElementById("ingresar").style.display = 'none';
                    document.getElementById("index").style.display = 'block';
                    let headerIndex__menu = document.getElementById("headerIndex__menu");
                    headerIndex__menu.innerHTML = `<li>Bienvenido <strong>${email}</strong>!</li>`
                 }, 3000 );
            } else {
                let mensaje = document.getElementById("mensajeInicioSesion");
                mensaje.innerHTML = `Contraseña incorrecta.`
            }
        } 
    }   

    setTimeout( () => { 
        let mensaje = document.getElementById("mensajeInicioSesion")
        mensaje.innerHTML = ``;
     }, 3000 );

};

inicioSesion.addEventListener('submit', inicioSesionUsuario);


// FILTRO HOTELES

class Hotel {
    constructor(id, imagen, nombre, ciudad, tarifaNoche){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.tarifaNoche = tarifaNoche;
    }
};

const hoteles = [];

hoteles.push(new Hotel(01, "./img/01.jpg","Melia", "Buenos Aires", 15000));
hoteles.push(new Hotel(02, "./img/02.jpeg", "NH Florida", "Buenos Aires", 23000));
hoteles.push(new Hotel(03, "./img/03.jpeg", "Faena Buenos Aires", "Buenos Aires", 38000));

hoteles.push(new Hotel(04, "./img/04.jpeg", "531 Hostel", "Córdoba", 8000));
hoteles.push(new Hotel(05, "./img/05.jpeg", "Amerian Executive Córdoba", "Córdoba", 18000));
hoteles.push(new Hotel(06, "./img/06.jpeg", "Azur Real Hotel Boutique", "Córdoba", 27000));

hoteles.push(new Hotel(07, "./img/07.jpeg", "Hotel Tres Reyes", "Bariloche", 12000));
hoteles.push(new Hotel(08, "./img/08.jpeg", "Península Petit Hotel", "Bariloche", 24000));
hoteles.push(new Hotel(09, "./img/09.jpeg", "Llao LLao Hotel Resort", "Bariloche", 44000));

hoteles.push(new Hotel(10, "./img/10.jpeg", "Luján de Cuyo B&B", "Mendoza", 10000));
hoteles.push(new Hotel(11, "./img/11.jpeg", "Posada El Encuentro", "Mendoza", 20000));
hoteles.push(new Hotel(12, "./img/12.jpeg", "Park Hyatt Mendoza", "Mendoza", 26000));

hoteles.push(new Hotel(13, "./img/13.jpeg", "Hotel Posada del Sol", "Salta", 14000));
hoteles.push(new Hotel(14, "./img/14.jpeg", "Sheraton Salta Hotel", "Salta", 22000));
hoteles.push(new Hotel(15, "./img/15.jpeg", "Hotel Solar de la Plaza", "Salta", 28000));

hoteles.push(new Hotel(16, "./img/16.jpeg", "Hostería Valle Frío", "Ushuaia", 16000));
hoteles.push(new Hotel(17, "./img/17.jpeg", "Hotel Los Nires", "Ushuaia", 25000));
hoteles.push(new Hotel(18, "./img/18.jpeg", "Los Cauquenes Resort & Spa", "Ushuaia", 40000));


let formularioFiltro = document.getElementById("formularioFiltro");
let contenedorHoteles = document.getElementById("contenedor-hoteles");

formularioFiltro.addEventListener("submit", filtrarHotel);

function filtrarHotel(e){

    e.preventDefault();
    e.target.value;
    const ciudadElegida = document.getElementById("ciudad").value;
    ciudadFiltrada = hoteles.filter((hotel) => hotel.ciudad == ciudadElegida);

    let presupuesto = document.getElementById("presupuesto").value;
    const filtroPresupuesto = ciudadFiltrada.filter((hotel) => hotel.tarifaNoche <= presupuesto);

    let cantidadHuespedes = document.getElementById("cantidadHuespedes").value;
    let cantidadHabitaciones = document.getElementById("cantidadHabitaciones").value;
    if((cantidadHabitaciones > cantidadHuespedes) || (cantidadHuespedes > cantidadHabitaciones*3)){
        formularioFiltro.reset();
        Swal.fire({
            icon: 'error',
            text: "No puede reservar más habitaciones que la cantidad de huéspedes ni alojar a más de 3 huéspedes por habitación.",
            showConfirmButton: true,
            confirmButtonColor: '#006ce4'
          })
    }else{
        if (filtroPresupuesto.length > 0) {
            contenedorHoteles.innerHTML = '';
            filtroPresupuesto.forEach(hotel =>{
                let div = document.createElement("div");
                div.classList.add("hotel");
                div.setAttribute("id", `${hotel.id}`);
                div.innerHTML = `
                    <img class="hotel-imagen" src="${hotel.imagen}" alt="${hotel.nombre}">
                    <div class="hotel-detalles">
                        <h3 class="hotel-titulo">${hotel.nombre}</h3>
                        <p class="hotel-tarifa">Tarifa por noche: $${hotel.tarifaNoche}</p>
                        <button class="hotel-reservar" id="${hotel.id}">Reservar</button>
                    </div>
                `;
                contenedorHoteles.append(div);

                
                div.addEventListener("click", reservar);
    
                function reservar() {
                    hoteles.forEach(hotel => {
                        if(div.id == hotel.id){
                            let cantidadNoches = document.getElementById("cantidadNoches").value;
                            if((cantidadHabitaciones > 1)){
                                mensajeHabitaciones = (`Usted ha reservado ${cantidadHabitaciones} habitaciones `)
                            }else {
                                mensajeHabitaciones = (`Usted ha reservado ${cantidadHabitaciones} habitación `)
                            };
                            
                            if((cantidadHuespedes > 1)){
                                mensajeHuespedes = (`para ${cantidadHuespedes} huéspedes `)
                            }else {
                                mensajeHuespedes = (`para ${cantidadHuespedes} huésped `)
                            };
    
                            if((cantidadNoches > 1)){
                                mensajeNoches = (`por ${cantidadNoches} noches `)
                            }else {
                                mensajeNoches = (`por ${cantidadNoches} noche `)
                            };

                              Swal.fire({
                                icon: 'success',
                                title: '¡Reserva confirmada!',
                                text: `${mensajeHabitaciones + mensajeHuespedes + mensajeNoches} en ${hotel.nombre}`,
                                showConfirmButton: true,
                                confirmButtonColor: '#006ce4'
                              })
                        }
                    });
                };
            });
        }else{
            formularioFiltro.reset();
            Swal.fire({
                icon: 'error',
                text: `No se encontraron alojamientos para su presupuesto por noche de: $${presupuesto}`,
                showConfirmButton: true,
                confirmButtonColor: '#006ce4'
              })
        };
    };
};




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

