// El principio de Sustitución de Liskov establece que los objetos de una clase base deben poder ser sustituidos por objetos de sus clases derivadas sin afectar la integridad del programa. Aquí tienes un ejemplo para ilustrar este principio:

// Supongamos que tenemos una clase base llamada Rectangle que representa un rectángulo, con propiedades para el ancho y la altura, y un método para calcular el área:

class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    getArea() {
      return this.ancho * this.alto;
    }
  }

//   Ahora, creamos una clase derivada llamada Square que hereda de Rectangle, pero con una restricción especial: el ancho y la altura siempre deben ser iguales, ya que se trata de un cuadrado. Podemos implementar la clase Square de la siguiente manera:

  class Cuadrado extends Rectangulo {
    constructor(lado) {
      super(lado, lado);
    }
  }

//   En este ejemplo, la clase Square respeta el principio de Sustitución de Liskov, ya que un objeto Square puede ser utilizado en lugar de un objeto Rectangle sin causar ningún problema. A pesar de que Square es una clase derivada de Rectangle y tiene una restricción adicional en cuanto al ancho y la altura, sigue cumpliendo todas las expectativas de un Rectangle y puede ser tratado como tal.

  function imprimirArea(figura) {
    console.log(`Area: ${figura.getArea()}`);
  }
  
  const Rectangulo = new Rectangulo(4, 5);
  imprimirArea(Rectangulo);  // Imprime "Area: 20"
  
  const Cuadrado = new Cuadrado(3);
  imprimirArea(Cuadrado);  // Imprime "Area: 9"

//   En este ejemplo, tanto Rectangle como Square pueden ser pasados como argumentos a la función printArea() sin ningún problema. Esto demuestra que el principio de Sustitución de Liskov se cumple, ya que los objetos derivados pueden ser utilizados en lugar de los objetos de la clase base sin afectar el comportamiento esperado del programa.
      