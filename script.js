        // Generar un número aleatorio entre 1 y 100
        const numeroCorrecto = Math.floor(Math.random() * 100) + 1;

        // Número de intentos disponibles       
        const intentosMaximos = 5;
        let intentosRealizados = 0;
        let numeroIngresado = 0

        // Abrir el bucle (pista: aquí usaremos la cantidad de intentos maximos y la de intentos realizados)
        function jugar() {

        console.log('Numero correcto: ' + numeroCorrecto)

        while(intentosRealizados < intentosMaximos){
                numeroIngresado = parseInt(prompt("ingrese un numero"));    

                if(numeroIngresado > 100 && numeroIngresado < 1) {
                        alert("Porfavor ingrese un número menor que 100")
                        continue;
                        
                } else if (numeroIngresado === numeroCorrecto) {
                        console.log("¡Felicidades! Has adivinado el número correctamente, " + "Intentos Realizados: " + intentosRealizados);
                        break
                }

                intentosRealizados++
                
                console.log(`Número elegido: ${numeroIngresado} | Intentos: ${intentosRealizados}`)
                
                if (intentosRealizados === intentosMaximos) {
                        console.log(`¡Lo siento! Has agotado tus 5 intentos. El número era ${numeroCorrecto}.`);
                        break;
                }
                
}
}