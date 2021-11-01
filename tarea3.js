let nombre = prompt("Ingresar un nombre, para salir escribe ESC");

while(nombre != "ESC" ){
   switch (nombre) {
       case "Juan":
            alert("Hola Juan");
            break;
        case "Pepe":
            alert("Hola Pepe");
            break;
       default:
           alert("¿QUIÉN ERES?")
           break;
   }
   nombre = prompt("Ingresar un nombre, para salir escribe ESC");
}
