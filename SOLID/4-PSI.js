class Computadora {
    marca;
    modelo;
  
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    obtenerMarca() {
      return this.marca;
    }
  
    obtenerModelo() {
      return this.modelo;
    }
  
    guardarMarca(marca) {
      this.marca = marca;
    }
  
    guardarModelo(modelo) {
      this.modelo = modelo;
    }
  }
  
  const Portatil = (clasePadre) => {
    return (
      class extends clasePadre {
        constructor(marca, modelo){
          super(marca, modelo);
        }
  
        guardarTamanioPantalla(tamanio) {
          this.tamanio = tamanio;
        }
  
        obtenerTamanioPantalla() {
          return this.tamanio;
        }
  
      }
    )
  }
  
  class PortatilAsus extends Portatil(Computadora) {
    
  }