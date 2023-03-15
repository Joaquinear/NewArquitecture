
class UnirInformacionUnir{
    constructor(){
        this.confirmacionPagina= "//h1[normalize-space()='Solicita Información']"
        this.tipoDeEstudio = "#productType" //select
        this.areaDeProducto = "#productArea"//select
        this.tituloDeInteres = "#product" //selec
        this.nombreEstudiante = "#name"
        this.apellidoEstudiante = "#last-name"
        this.correo = "#email"
        this.seleccionPais = "(//select[@id='country'])[1]"//select
        this.seleccionProvincia = "(//select[@id='states'])[1]"//select
        this.telefono = "#phone"
        this.whtppSi = "(//input[@id='unir_acepta_wa_c-1'])[1]"
        this.whtppNo = "//label[@class = 'form__label  is_ok']/input[@name='unir[acepta_wa_c]'][2]"
        this.ultimosEstudios = "#lastStudies"
        this.comentario = "#comments"
        this.autorizacionRecibirInformacion = "//label[@class='form__label form__text-small']//span[contains(text(),'Deseo recibir información de UNIR, así como del re')]"
        this.botonEnviar = "#submitProduct"
        this.confirmacionEnvio = "//h3[contains(text(),'Hemos recibido tu solicitud correctamente')]"
    }
    ConfirmacionPaginaE(){
        return this.confirmacionPagina
    }
    tipoDeEstudioE(){
        return this.tipoDeEstudio
    }
    areaDeProductoE(){
        return this.areaDeProducto
    }
    tituloDeInteresE(){
        return this.tituloDeInteres
    }
    nombreEstudianteE(){
        return this.nombreEstudiante
    }
    apellidoEstudianteE(){
        return this.apellidoEstudiante
    }
    correoE(){
        return this.correo
    }
    seleccionPaisE(){
        return this.seleccionPais
    }
    seleccionProvinciaE(){
        return this.seleccionProvincia
    }
    telefonoE(){
        return this.telefono
    }
    whtppSiE(){
        return  this.whtppSi
    }
    whtppNoE(){
        return this.whtppNo
    }
    ultimosEstudiosE(){
        return this.ultimosEstudios
    }
    comentarioE(){
        return this.comentario
    }
    autorizacionRecibirInformacionE(){
        return this.autorizacionRecibirInformacion
    }
    botonEnviarE(){
        return this.botonEnviar
    }
    confirmacionEnvioE(){
        return this.confirmacionEnvio
    }
}
module.exports = new UnirInformacionUnir()
module.exports.UnirInformacionUnir = UnirInformacionUnir 