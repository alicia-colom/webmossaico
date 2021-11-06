import React from "react";
import "./LegalAdvice.scss";

const LegalAdvice = () => {
  return (
    <>
      <div className="legalAdvice__container">
        <h2>
          <span className="fontMossaico">Aviso Legal</span>
        </h2>
        <div>
          <h3>DATOS IDENTIFICATIVOS</h3>
          <p>
            De acuerdo con la exigencia establecida en artículo 10 de la Ley
            34/2002, del 11 de julio, de Servicios de la Sociedad de la
            Información y del Comercio Electrónico, se cumple con la obligación
            de informar a todos los usuarios e interesados que la
            responsabilidad y titularidad del dominio web www.diverlibros.es,
            así como las redes sociales y/o cualquier sitio web asociado, en lo
            adelante el “sitio web” le pertenecen a Nuria Domínguez Martos, con
            N.I.F. 28838193B , con domicilio en Avenida de Argentina, 24, Puerto
            Real, Cádiz; en lo adelante “DIVERLIBROS”, y cuyo correo electrónico
            de contacto es librosfieltro@gmail.com
          </p>
          <h4>Formulario de pedido:</h4>
          <p>
            Diverlibros será responsable por tus datos, se enviarán a
            www.diverlibros.es para poder procesar tu pedido, así como al
            sistema del medio de pago que hayas utilizado. Este tratamiento se
            hace con base en el cumplimiento de un contrato o sus diligencias
            pre-contractuales. Conservaré esta información por el tiempo
            establecido en la ley, como comprobante de compra. Puedes ejercer
            cualquier derecho que tengas relacionado con la protección de tus
            datos según se describe en la política de privacidad. (Enlace a
            política de privacidad).
          </p>
        </div>
      </div>
    </>
  );
};

export default LegalAdvice;
