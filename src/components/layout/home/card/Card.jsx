import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.scss";
// import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";

// const useStyles = makeStyles(() => ({
//   paperProduct: {
//     backgroundColor: "rgba(221, 221, 221, 0.7)",
//     minWidth: "15rem",
//     height: "22rem",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     borderRadius: "1rem",
//   },
// }));

const ProductCard = ({ name, description, path, image, children }) => {
  // const cls = useStyles();

  return (
    <>
      <Paper>
        {/* <Paper className={cls.paperProduct}> */}
        <h4 className="productCard__title">{name}</h4>
        <p className="productCard__description">{description}</p>
        <Link to={path}>
          <img
            src={image}
            alt={"Producto " + name}
            className="productCard__img"
            title={"Ir a " + name}
            aria-label={"Imagen del producto " + name + " de Diverlibro"}
          />
        </Link>
        {children}
        <Link
          to={path}
          name="link-diverlibros"
          title="Ir a Diverlibros"
          className="button"
        >
          Ver {name}s
        </Link>
      </Paper>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
};
