import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Card from "./card/Card";
import Hero from "../hero/Hero";
import Bombilla from "../../../assets/images/foto-bombilla-luz.jpg";
import "./Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    centerPadding: "60px",
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Hero />

      <div className="section quote">
        <h4>
          «Hay dos tipos de artistas, unos son los que construyen y desarrollan
          una cosa de forma razonable […], y los otros, a los que les invade una
          idea…»
        </h4>
        <h5 style={{ textAlign: "right", fontStyle: "normal" }}>
          JOSEF HOFFMANN
        </h5>
      </div>

      <div className="section about">
        <h3 className="section__header">Quienes somos</h3>
        <div className="about__container">
          <div className="about__container--imgFrame">
            <img
              className="about__container--img"
              src={Bombilla}
              alt="Imagen About"
            />
          </div>
          <div className="about__containerText">
            <div className="about__containerText--text">
              <p style={{ marginTop: "unset" }}>Cada espacio es un mundo.</p>
              <p>
                Pasan los años y no perdemos la ilusión cada vez que afrontamos
                un nuevo proyecto.
              </p>
              <p>
                Es un honor poder ayudar a nuestros clientes a conseguir el
                espacio de sus sueños. Es emocionante ver como con el fin de una
                obra, comienza un nuevo capítulo en sus vidas, formando parte de
                ello.
              </p>
              <p>
                La clave de nuestros trabajos es saber adaptar cada espacio a
                las necesidades y costumbres de cada cliente. Ponte en contacto
                con nosotros, dinos qué necesitas, y lo haremos realidad.
              </p>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <h5 style={{ paddingBottom: "25px" }}>
            <span
              className="fontMossaico"
              style={{
                fontSize: "20px",
              }}
            >
              Mossaico Arquitectura y Diseño
            </span>{" "}
            es un estudio de arquitectura especializado en el sector reformas
          </h5>
          <Link className="button">+ info</Link>
        </div>
      </div>

      <div className="section who">
        <h3 className="section__header">Servicios</h3>
        <div className="who__container">
          <div className="who__section"></div>
          <Slider {...settings}>
            <Card
              name={"Name"}
              description={"description"}
              path={"path"}
              image={"image"}
            >
              <h3>1</h3>
            </Card>
            <Card
              name={"Name"}
              description={"description"}
              path={"path"}
              image={"image"}
            >
              <h3>2</h3>
            </Card>
            <Card
              name={"Name"}
              description={"description"}
              path={"path"}
              image={"image"}
            >
              <h3>3</h3>
            </Card>
            <Card
              name={"Name"}
              description={"description"}
              path={"path"}
              image={"image"}
            >
              <h3>4</h3>
            </Card>
            <Card
              name={"Name"}
              description={"description"}
              path={"path"}
              image={"image"}
            >
              <h3>5</h3>
            </Card>
            <Card
              name={"Name"}
              description={"description"}
              path={"path"}
              image={"image"}
            >
              <h3>6</h3>
            </Card>
          </Slider>
          <div className="who__section"></div>
        </div>
        <div>
          <strong>¿Tú también quieres regalar diversión?</strong>
          <br />
          <br />
          <Link
            to="/servicios"
            name="link-service"
            title="Ir a servicios"
            className="button"
          >
            Sí, llévame al catálogo
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
