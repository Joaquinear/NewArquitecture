Feature: Formularios Unir
    @Prueba
    Scenario: Envio de solicitud de informacion

    Given Cliente ingrese a la pagina principal de UNIR
    When Cliente hace click barra del menu
    And Ingresa Grado Pedagogico
    Then La pagina manda la informacion, mostrando mensaje de confirmacion

    @PruebaFormulario
    Scenario Outline: Envio de solicitud de informacion

    Given Cliente ingrese a la pagina principal de UNIR
    When Cliente hace click en boton solicitar informacion
    And La pagina de UNIR envia al cliente a el formulario de solicitud de informacion
    And Cliente seleciona el tipo de estudio <Estudio>
    And Cliente seleciona el area de estudio <Area>
    And Cliente seleciona el titulo que le interesa <TituloInteres>
    And Cliente escribe su nombre <nombre>
    And Cliente escribe su apellido <Apellido>
    And Cliente escribe su Email <CorreoElectronico>
    And Cliente selecciona su el pais <Pais>
    And Cliente selecciona su la provincia <Provincia>
    And Cliente selecciona sus Ultimos estudios <UltimoEstudio>
    And Cliente escribe su numero de telefono <numeroTelf>
    And Cliente selecciona si quiere recibir informacion por whtpp 
    And Cliente escribe comentario <Comentario>
    And Cliente acepta que quiere recibir informacion de UNIR
    And Cliente hace click en el boton solicita informacion
    Then La pagina manda la informacion del formulario, mostrando mensaje de confirmacion
    
    Examples:
        | nombre    | Apellido|numeroTelf|Comentario          | Estudio                              | Area      |TituloInteres                                             |Pais|Provincia| CorreoElectronico              | UltimoEstudio |   
        | JoaquinQA | AlconQA | 74600101 | esto es una prueba | Grados                               | Ingeniería|Curso de Adaptación Ingeniería Informática                | BO | BO-S    | JoaquinQaUnir@unirqacupon.com  | Diplomado     |
        | JoaquinQA2| AlconQA2| 74600111 | esto es prueba 2   | Postgrados - Masters Universitarios  | MBA       |MBA + Curso Universitario Avanzado en Gestión Inmobiliaria| BO | BO-S    | JoaquinQatest2@unirqacupon.com | Postgrado     |
        | JoaquinQA3| AlconQA3| 74600121 | esto es prueba 3   | Idiomas                              | Inglés    |Inglés B2                                                 | CO | CO-ARA  | JoaquinQatest3@unirqacupon.com | tecnologo   |

