let pantalla = document.getElementById("pantalla"); 
let operacionActual = ""; /// para guardar la operacion actual
let numeroEnPantalla = ""; /// para guardar el numero que se muestra en pantalla
let resultado = 0;

function agregarNumero(numero) { /// funcion para agregar un numero a la pantalla
    numeroEnPantalla += numero; /// concatenamos el numero que se presiono a la variable numeroEnPantalla
    pantalla.value = numeroEnPantalla; /// mostramos el numero presionado en pantalla
}


function limpiar() {  /// funcion para limpiar la pantalla luego de presionar el boton C
    operacionActual = ""; /// limpiamos la operacion actual
    numeroEnPantalla = ""; /// limpiamos el numero en pantalla
    resultado = 0; /// limpiamos el resultado de la operacion
    pantalla.value = "0"; /// mostramos un 0 en pantalla
}


function operacion(operador) { /// funcion para agregar un operador a la operacion actual
    if (operador === "=") { /// si el operador es igual a = entonces se realiza la operacion
        resultado = eval(operacionActual + numeroEnPantalla); /// se realiza la operacion y se guarda en la variable resultado
        pantalla.value = resultado; /// se muestra el resultado en pantalla
        operacionActual = ""; /// se limpia la operacion actual
        numeroEnPantalla = resultado; /// se guarda el resultado en la variable numeroEnPantalla
    } else if (operador === "C") { /// si el se presiono el boton C se limpia la pantalla
        limpiar(); 
    } else {
        operacionActual += numeroEnPantalla + operador; /// se guarda el numero en pantalla y el operador en la variable operacionActual
        numeroEnPantalla = ""; /// se limpia el numero en pantalla
    } 
}

function elevarAlCuadrado() { /// funcion para elevar al cuadrado el numero en pantalla
    resultado = Math.pow(parseFloat(numeroEnPantalla), 2); /// se eleva al cuadrado el numero en pantalla y se guarda en la variable resultado
    pantalla.value = resultado; /// se muestra el resultado en pantalla
    operacionActual = ""; /// se limpia la operacion actual
    numeroEnPantalla = resultado.toString(); /// se guarda el resultado en la variable numeroEnPantalla por si se quiere seguir operando con el resultado
}

function elevarAlCubo() { /// funcion para elevar al cubo el numero en pantalla
    resultado = Math.pow(parseFloat(numeroEnPantalla), 3); /// se eleva al cubo el numero en pantalla y se guarda en la variable resultado
    pantalla.value = resultado; /// se muestra el resultado en pantalla
    operacionActual = ""; /// se limpia la operacion actual
    numeroEnPantalla = resultado.toString(); /// se guarda el resultado en la variable numeroEnPantalla por si se quiere seguir operando con el resultado
}


function fibonacci(n) { /// funcion para calcular que numero de fibonacci corresponde a la posicion del numero ingresado en pantalla
    if (n <= 1) { /// si el numero es menor o igual a 1 entonces se retorna el mismo numero (ya que los primeros numeros de fibonacci son 0 y 1)
        return n; 
    }
    let a = 0; /// se inicializan las variables a y b en 0 y 1 respectivamente
    let b = 1;
    let aux; /// variable auxiliar para guardar el resultado de la suma de a y b
    for (let i = 2; i <= n; i++) { /// se realiza un ciclo for, se inicializa i en 2 ya que los primeros numeros de fibonacci ya los tenemos y se realiza el ciclo hasta que i sea menor o igual al numero ingresado
        aux = a + b; /// se guarda en aux la suma de a y b, aux = 0 + 1 = 1, aux = 1 + 1 = 2, aux = 2 + 1 = 3, sucesivamente
        a = b; /// se guarda en a el valor de b, a = 1, a = 1, a = 2, sucesivamente
        b = aux; /// se guarda en b el valor de aux (la suma de a y b), b = 1, b = 2, b = 3, sucesivamente
    }
    return a; /// se retorna el valor de a, que es el numero de fibonacci
}

function calcularFibonacci() { /// funcion para mostrar el numero de fibonacci en pantalla que corresponde a la posicion del numero en pantalla
    let numero = parseInt(numeroEnPantalla); /// se convierte el numero en pantalla a entero para poder pasarlo como parametro a la funcion fibonacci
    let resultadoFibonacci = fibonacci(numero); /// se guarda el resultado de la funcion fibonacci en la variable resultadoFibonacci
    pantalla.value = resultadoFibonacci; /// se muestra el resultado en pantalla
    operacionActual = ""; /// se limpia la operacion actual
    numeroEnPantalla = resultadoFibonacci.toString(); /// se guarda el resultado en la variable numeroEnPantalla por si se quiere seguir operando con el resultado
}



