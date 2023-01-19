import React, { useEffect, useState } from "react";
import { CardImage } from "../components/cards/CardImage";
import { NextPage } from "next";
import { Grid } from "@mui/material";
import { CardImageData } from "../interfaces";

const CARD_IMAGES: CardImageData[] = [
  {
    img: "/images/img1.jpeg",
    text: "Diseño",
  },
  {
    img: "/images/img1.jpeg",
    text: "Prospeccion",
  },
  {
    img: "/images/img1.jpeg",
    text: "Publicidad",
  },
  {
    img: "/images/img1.jpeg",
    text: "Pagina Web",
  },
];

const Trials: NextPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
   <>
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <CardImage data={CARD_IMAGES} />
      </Grid>
    </Grid>
     <div className="top-to-btm">
     {" "}
     {showTopBtn && (
       <div className="icon-position icon-style" onClick={goToTop} />
     )}{" "}
   </div>
   </>
  );
};

export default Trials;
