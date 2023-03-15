class UnirPrincipal {

    constructor(){
        this.menuBar = "//div[@class='header__navbar l-flex--row l-flex--center -padding-lateral']"
        this.btnSolicitaformacion = "//a[normalize-space()='Solicita Información']"
        this.cookies = "//button[@id='truste-consent-button']"
        this.opcionGrados = "//a[@class='gtm_toolbar_link_cabecera'][normalize-space()='Grados']"
        this.GradoPedago = "//a[contains(text(),'Grado en Pedagogía')]"
        this.ConfirmacionGradoPedg = "//span[@class='hero__title ']"
    }   
    
    menuBarE(){
         return this.menuBar
    }
    botonSolicitaInformacion(){
        return this.btnSolicitaformacion
    }
    aceptacionCookies(){
        return this.cookies
    }
    opcionGradosE(){
        return this.opcionGrados
    }
    tituloGradoPedago(){
        return this.GradoPedago
    }
    cofirmPagPedagogia(){
        return this.ConfirmacionGradoPedg
    }
}


module.exports = new UnirPrincipal()
module.exports.UnirPrincipal = UnirPrincipal