import React from "react";
import { CardImage } from "../components/cards/CardImage";
import { NextPage } from "next";
import { Grid } from "@mui/material";
import { CardImageData } from "../interfaces";
import { ContactForm } from "../components/forms/ContactForm";
import { VideoText } from "../components/v&t/VideoText";

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
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <CardImage data={CARD_IMAGES} />
      </Grid>
      <Grid item>
            <VideoText/>
        </Grid>
        <Grid item>
            <ContactForm/>
        </Grid>
    </Grid>
  );
};

export default Trials;
