var  usuario  = require("../acciones/Usuario");
var unirPrincipal  = require("../pages/UnirPrincipal");
var unirInformacionUnir  = require("../pages/UnirInformacionUnir");


Given('Cliente ingrese a la pagina principal de UNIR', () => {
    usuario.IngresaA()
    usuario.verificaSiVisitaPagina()
  });
  When('Cliente hace click barra del menu',()=>{
    usuario.cliqueaEn(unirPrincipal.menuBarE())
  })
  Then('Ingresa Grado Pedagogico',()=>{
    usuario.cliqueaEn(unirPrincipal.opcionGradosE())
    usuario.cliqueaEn(unirPrincipal.tituloGradoPedago())
  })
  Then('La pagina manda la informacion, mostrando mensaje de confirmacion',()=>{
    usuario.verificaElementoExiste(unirPrincipal.cofirmPagPedagogia())
  })
  When(/^Cliente hace click en boton solicitar informacion$/,()=>{
    usuario.cliqueaEn(unirPrincipal.botonSolicitaInformacion())
  })
  Then(/^La pagina de UNIR envia al cliente a el formulario de solicitud de informacion$/,()=>{
    usuario.espera(5)
    usuario.verificaElementoExiste(unirInformacionUnir.ConfirmacionPaginaE())
  })
  Then(/^Cliente seleciona el tipo de estudio (.*)$/,(estudio)=>{
    usuario.cliqueaEn(unirInformacionUnir.tipoDeEstudioE())
    usuario.espera(5)
    usuario.aceptaCookiesEn(unirPrincipal.aceptacionCookies())
    usuario.selecciona(estudio,unirInformacionUnir.tipoDeEstudioE())
  })
  Then(/^Cliente seleciona el area de estudio (.*)$/,(area)=>{
    usuario.selecciona(area,unirInformacionUnir.areaDeProductoE())
  })
  Then(/^Cliente seleciona el titulo que le interesa (.*)$/,(tituloInteres)=>{
    usuario.aceptaCookiesEn(unirPrincipal.aceptacionCookies())
    usuario.selecciona(tituloInteres,unirInformacionUnir.tituloDeInteresE())
  })
  Then(/^Cliente escribe su nombre (.*)$/,(nombre)=>{
    usuario.espera(5)
    usuario.escribe(nombre,unirInformacionUnir.nombreEstudianteE())
  })
  Then(/^Cliente escribe su apellido(.*)$/,(apellido)=>{
    usuario.escribe(apellido,unirInformacionUnir.apellidoEstudianteE())
  })
  Then(/^Cliente escribe su Email (.*)$/,(correoEle)=>{
    usuario.escribe(correoEle,unirInformacionUnir.correoE())
  })
  Then(/^Cliente selecciona su el pais (.*)$/,(pais)=>{
    usuario.selecciona(pais,unirInformacionUnir.seleccionPaisE())
  })
  Then(/^Cliente selecciona su la provincia (.*)$/,(provinciaV)=>{
    usuario.selecciona(provinciaV,unirInformacionUnir.seleccionProvinciaE())
  })
  Then(/^Cliente selecciona sus Ultimos estudios (.*)$/,(ultimosEstudiosV)=>{
    usuario.selecciona(ultimosEstudiosV,unirInformacionUnir.ultimosEstudiosE())
  })
  Then(/^Cliente escribe su numero de telefono (.*)$/,(telefonoV)=>{
    usuario.escribe(telefonoV,unirInformacionUnir.telefonoE())
  })
  Then(/^Cliente selecciona si quiere recibir informacion por whtpp$/,()=>{
    usuario.cliqueaEn(unirInformacionUnir.whtppSiE())
  })
  Then(/^Cliente escribe comentario (.*)$/,(comentarioV)=>{
    usuario.escribe(comentarioV,unirInformacionUnir.comentarioE())
  })
  Then(/^Cliente acepta que quiere recibir informacion de UNIR$/,()=>{
    usuario.cliqueaEn(unirInformacionUnir.autorizacionRecibirInformacionE())
  })
  Then(/^Cliente hace click en el boton solicita informacion$/,()=>{
    usuario.cliqueaEn(unirInformacionUnir.botonEnviarE())
    usuario.espera(25)
  })
  Then(/^La pagina manda la informacion del formulario, mostrando mensaje de confirmacion$/,()=>{
    usuario.verificaElementoExiste(unirInformacionUnir.confirmacionEnvioE())
  })
  
