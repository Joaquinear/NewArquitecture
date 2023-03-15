const {I} = inject()

class Usuario{

    IngresaA(){
        I.amOnPage("")
    }

    verificaSiVisitaPagina(){
        I.seeInCurrentUrl("")
    }

    verificaElementoExiste(selector){
        I.waitForElement(selector)
    }

    espera(tiempoMsegundos){
        I.wait(tiempoMsegundos)
    }

    cliqueaEn(selector){
        I.waitForElement(selector)
        I.click(selector)
    }

    aceptaCookiesEn(selector){
        const cookie = tryTo(()=>I.click(selector))
    }

    escribe(texto,selector){
        I.waitForElement(selector)
        I.fillField(selector,texto)
    }
    selecciona(opcion,selector){
        I.waitForElement(selector)
        I.selectOption(selector,opcion)
    }
    chekeaEn(selector){
        I.waitForElement(selector)
        I.checkOption(selector)
    }
    capturaEn(lugar){
        I.saveScreenshot("CapturaDe"+lugar+".jpg")
    }
    veElemento(texto,selector){
        I.waitForElement(selector)
        I.see(texto,selector)
    }
}

module.exports = new Usuario()
module.exports.Usuario = Usuario