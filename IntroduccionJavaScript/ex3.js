

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está calculado
    estaCaducado() {
        /*if(caducidad < Date){
            return true
        }
        else{
            return false
        }*/
        let date = new Date();
        let idDate = Date.parse(this.caducidad);
        if (date > idDate){
            return true;
        }else{
            return false;
        }
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
        let valorDni = /^[0-9]{8,8}[A-Z]/;
        if (valorDni.test(this.numero)==true){
            return true;
        } else{
            return false;
        }      
    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
        var evaluarLetra = "TRWAGMYFPDXBNJZSQVHLCKET";
        let letra = 0;
        let letraResultado= Math.trunc(parseInt(dni)/23);
        let numeros = letraResultado *23;
        letra = parseInt(dni) - numeros;
        return `Tu letra és la ${evaluarLetra.charAt(letra)}`;
  
    }
}

const midni = new DNI("Pedro Vallés", "1234567A", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());
console.log(midni.calculaLetraDni("45963053"));


