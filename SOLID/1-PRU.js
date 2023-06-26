// En este ejemplo, la clase Usuario tiene una única responsabilidad: manejar la información y el comportamiento relacionado con un usuario. Tiene métodos para obtener y actualizar el nombre y el correo electrónico del usuario, así como para mostrar los detalles del usuario en la consola.

class Usuario {
    constructor(nombre, correo) {
      this.nombre = nombre;
      this.correo = correo;
    }
  
    getnombre() {
      return this.nombre;
    }
  
    setnombre(nombre) {
      this.nombre = nombre;
    }
  
    getcorreo() {
      return this.correo;
    }
  
    setcorreo(correo) {
      this.correo = correo;
    }
  
    mostrarDetalles() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Correo: ${this.correo}`);
      // Lógica adicional para mostrar otros detalles del usuario en la interfaz de usuario
    }
  }
  

const Liliana = new Usuario('Liliana Herrera', 'lherrera@mail.com')
Liliana.mostrarDetalles()