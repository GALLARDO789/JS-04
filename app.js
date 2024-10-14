function sumResistance(resistors) {
    // Suma el valor absoluto de cada resistencia en el arreglo
    let totalResistance = resistors.reduce((acc, curr) => acc + Math.abs(curr), 0);
    
    // Retorna la suma de las resistencias con la unidad "ohms"
    return `${totalResistance} ohms`;
}

// Ejemplos de uso:
console.log(sumResistance([-1, 5, 6, 3]));     // "15 ohms"
console.log(sumResistance([14, 3.5, 6]));      // "23.5 ohms"
console.log(sumResistance([8, 15, 100]));      // "123 ohms"

function numDiv(num){
    let half = num / 2; 
    return [half, half];
}

function askForNumber() {
    // Solicita un número al usuario
    let input = prompt("Ingresa un número para dividir en mitades:");
    
    // Convierte el input en número y realiza la operación
    let number = parseFloat(input);
    
    if (!isNaN(number)) {
        // Llama a numDiv y muestra el resultado en la consola
        let result = numDiv(number);
        console.log(`El número ${number} dividido en mitades es: [${result[0]}, ${result[1]}]`);
    } else {
        console.log("Por favor, ingresa un número válido.");
    }

}

function secretName(names) {
    return names.map(name => name[0]).sort().join('');
}

function createSecretSociety() {
    let members = [];
    let numberOfMembers = prompt("¿Cuántos miembros tiene la sociedad secreta?");

    numberOfMembers = parseInt(numberOfMembers);
    
    if (isNaN(numberOfMembers) || numberOfMembers <= 0) {
        console.log("Por favor, ingresa un número válido de miembros.");
        return;
    }

    for (let i = 0; i < numberOfMembers; i++) {
        let name = prompt(`Ingresa el nombre del miembro ${i + 1}:`);
        if (name) {
            members.push(name);
        } else {
            console.log("El nombre no es válido. Intenta de nuevo.");
            return;
        }
    }

    let societyName = secretName(members);
    console.log(`El nombre de la sociedad secreta es: ${societyName}`);
}

function onlineStatus(users) {
    let numUsers = users.length;

    if (numUsers === 0) {
        return 'No one is online';
    } else if (numUsers === 1) {
        return `${users[0]} is online`;
    } else if (numUsers === 2) {
        return `${users[0]} and ${users[1]} are online`;
    } else {
        return `${users[0]}, ${users[1]} and ${numUsers - 2} more online`;
    }
}


function getOnlineStatus() {
    let users = [];
    let numUsers = prompt("¿Cuántos usuarios están en línea?");


    numUsers = parseInt(numUsers);

    if (isNaN(numUsers) || numUsers < 0) {
        console.log("Por favor, ingresa un número válido.");
        return;
    }


    for (let i = 0; i < numUsers; i++) {
        let name = prompt(`Ingresa el nombre del usuario ${i + 1}:`);
        if (name) {
            users.push(name);
        } else {
            console.log("Nombre no válido. Intenta de nuevo.");
            return;
        }
    }

    let status = onlineStatus(users);
    console.log(status);
}

function arrayMultiplos(number, length) {
    let multiples = [];
    for (let i = 1; i <= length; i++) {
        multiples.push(number * i);
    }
    return multiples;
}

function getMultiples() {
    let number = prompt("Ingresa un número para generar sus múltiplos:");
    let length = prompt("¿Cuántos múltiplos deseas generar?");
    
    number = parseFloat(number);
    length = parseInt(length);

    if (isNaN(number) || isNaN(length) || length <= 0) {
        console.log("Por favor, ingresa valores válidos.");
        return;
    }

    let result = arrayMultiplos(number, length);
    console.log(`Los primeros ${length} múltiplos de ${number} son: [${result.join(', ')}]`);
}

function isPositivelyDominant(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        }
    });

    return positiveCount > negativeCount;
}

console.log(isPositivelyDominant([1, -2, 3, -4, 5]));  // true
console.log(isPositivelyDominant([-1, -2, -3, 4, 5])); // false
console.log(isPositivelyDominant([1, 2, 3, 4, -1]));   // true
console.log(isPositivelyDominant([-1, -2, -3]));       // false

function antipodalAverage(arr) {
    let length = arr.length;

    if (length % 2 !== 0) {
        arr.splice(Math.floor(length / 2), 1);
    }

    let half = arr.length / 2;
    let result = [];

    for (let i = 0; i < half; i++) {
        let sum = (arr[i] + arr[arr.length - 1 - i]) / 2;
        result.push(sum);
    }

    return result;
}

function getAntipodalAverage() {
    let numbers = [];
    let length = prompt("¿Cuántos números deseas ingresar?");

    length = parseInt(length);
    if (isNaN(length) || length <= 0) {
        console.log("Por favor, ingresa un número válido.");
        return;
    }

    for (let i = 0; i < length; i++) {
        let num = prompt(`Ingresa el número ${i + 1}:`);
        num = parseFloat(num);
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            console.log("Entrada no válida. Intenta de nuevo.");
            return;
        }
    }

    let result = antipodalAverage(numbers);
    console.log(`El Antipodal Average del arreglo es: [${result.join(', ')}]`);
}