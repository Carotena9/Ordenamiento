/*1.- Crea una función que ordene de forma descendente un arreglo de números.
Entrada -> [9,3,1,6,5,88,-1,2,7]
Salida -> [88,9,7,6,5,3,1,-1]*/

function ordenarDescendente(array) {
    return array.sort(function(a, b) {
      return b - a;
    });
  }
  

  var numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
  var numerosOrdenados = ordenarDescendente(numeros);
  
  console.log('Arreglo ordenado descendente:', numerosOrdenados);
  

/*2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]*/

function ordenarPorValorAscii(lista) {
    return lista.sort(function(a, b) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    });
  }
  

  var caracteres = ['b', 'h', 'w', 'e', 'a'];
  var caracteresOrdenados = ordenarPorValorAscii(caracteres);
  
  console.log('Lista ordenada por valor ASCII:', caracteresOrdenados);
  


/*3.- Crear una clase Alumno con los siguientes datos:
Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.*/

class Alumno {
    constructor(nombre, calificaciones) {
      this.nombre = nombre;
      this.calificaciones = calificaciones;
    }
  
    obtenerPromedio() {
      const suma = this.calificaciones.reduce((a, b) => a + b, 0);
      return suma / this.calificaciones.length;
    }
  }
  
  class Salon {
    constructor() {
      this.alumnos = [];
    }
  
    agregarAlumno(alumno) {
      this.alumnos.push(alumno);
    }
  
    ordenarAlumnosPorPromedio() {
      this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
  }
  
  
  const alumno1 = new Alumno('Juan', [9, 7, 7, 7, 7]);
  const alumno2 = new Alumno('María', [8, 7, 6, 9, 10]);
  const alumno3 = new Alumno('Carlos', [7, 6, 8, 7, 9]);
  
  const salon = new Salon();
  salon.agregarAlumno(alumno1);
  salon.agregarAlumno(alumno2);
  salon.agregarAlumno(alumno3);
  
  salon.ordenarAlumnosPorPromedio();
  
  console.log('Alumnos ordenados por promedio:', salon.alumnos);
  


/*4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]*/

function ordenarPorLongitud(palabras) {
    return palabras.sort(function(a, b) {
      return a.length - b.length;
    });
  }
  
  
  var palabras = ['adios', 'hola', 'maximo', 'uno', 'despedida'];
  var palabrasOrdenadas = ordenarPorLongitud(palabras);
  
  console.log('Palabras ordenadas por longitud:', palabrasOrdenadas);
  

/*5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
Entrada -> [[7,3],[2,2],[1,0],[4,3]]
Salida -> [[1,0],[2,2],[4,3],[7,3]]*/

function ordenarPorDistancia(coordenadas) {
    return coordenadas.sort(function(a, b) {
      var distanciaA = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
      var distanciaB = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
      return distanciaA - distanciaB;
    });
  }
  

  var coordenadas = [[7, 3], [2, 2], [1, 0], [4, 3]];
  var coordenadasOrdenadas = ordenarPorDistancia(coordenadas);
  
  console.log('Coordenadas ordenadas por distancia:', coordenadasOrdenadas);
  


