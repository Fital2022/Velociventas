import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Rating,
  Box,
  Paper,
  Fab,
  Modal,
  IconButton,
  Button,
} from "@mui/material";
import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import BackToTopButton from "../components/buttons/BackToTopButton";
import WhatsAppButton from "../components/buttons/WhatsAppButton";
import Timer from "../components/timer/Timer";
import FormOne from "../components/forms/FormOne";
import { CardImage } from "../components/cards/CardImage";
import { CardImageData } from "../interfaces";
import { VideoText } from "../components/v&t/VideoText";
import { ContactForm } from "../components/forms/ContactForm";
import { useEffect } from "react";
import {
  BorderVerticalTwoTone,
  CloseOutlined,
  Height,
} from "@mui/icons-material";
import Image from "next/image";
import styles from "../styles/custom.module.css";
import FormModal from "../components/forms/FormModal";
import { ModalContext } from '../store/ModalContenxt';

const CARD_IMAGES: CardImageData[] = [
  {
    img: "/images/img1.jpeg",
    text: "Diseño",
  },
  {
    img: "/images/img3.jpeg",
    text: "Prospeccion",
  },
  {
    img: "/images/img4.jpeg",
    text: "Publicidad",
  },
  {
    img: "/images/img5.jpeg",
    text: "Pagina Web",
  },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "white",
  border: "0px solid #000",
  boxShadow: 0,
  // p: 4,
  outline: 0,
};

export default function Home() {


  const [value, setValue] = React.useState<number | null>(5);

  const [open, setOpen] = React.useState(true);

  return (
    <>
      {/* carousel b */}
      <Modal
        open={open }
        onClose={() => setOpen(false)}
        sx={{
          paddingTop: { xs: 10, sm: 10, md: 13 },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={50}
        >
          <Box sx={{ border: "0px solid #000", outline: 0, position: "fixed" }}>
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <IconButton
                sx={{
                  bgcolor: "#F7F7F7",
                  border: "#F7F7F7",
                  position: "absolute",
                  right: 0,
                  top: 0,
                  borderRadius: 0,
                }}
                onClick={() => setOpen(false)}
              >
                <CloseOutlined sx={{ color: "black" }} />
              </IconButton>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                columnGap={0}
                rowGap={4}
                m={0}
              >
                <Card
                  sx={{
                    width: { xs: "none", sm: "none", md: 360 },
                    height: { xs: "none", sm: "none", md: "70vh" },
                    borderRadius: "0",
                    boxShadow: "none",
                    backgroundImage:
                      "url('https://content.app-sources.com/s/23844678268074654/uploads/Images/wes-hicks-480398-unsplash-7707864.jpg') ",
                    backgroundSize: "cover",
                    backgroundPositionX: -355,
                  }}
                ></Card>
                <Card
                  sx={{
                    width: { xs: "100vw", sm: "100vw", md: 450 },
                    height: { xs: "79vh", sm: 700, md: "70vh" },
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "white",
                  }}
                >
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ height: "100%" }}
                  >
                    <Grid item xs={3}>
                      <Grid item xs={12}>
                        <Card
                          sx={{
                            height: "100%",
                            width: "100%",
                            boxShadow: "none",
                            border: "0px solid #ced4da",
                            bgcolor: "transparent",
                            borderRadius: "0",
                          }}
                        >
                          <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ height: "97%", width: "100%" }}
                          >
                            <Grid
                              container
                              spacing={0}
                              direction="column"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Grid item xs={12}>
                                <Grid
                                  container
                                  spacing={0}
                                  direction="column"
                                  alignItems="center"
                                  justifyContent="center"
                                  paddingTop={0}
                                >
                                  <Grid item xs={3}>
                                    <Typography
                                      display="block"
                                      variant="caption"
                                      align="center"
                                      sx={{
                                        fontSize: 30,
                                        color: "#EE811C",
                                        lineHeight: "100%",
                                        fontWeight: 500,
                                        maxWidth: {
                                          xs: 310,
                                          sm: 700,
                                          md: 350,
                                        },
                                      }}
                                    >
                                      ¡Regístrate ahora y obtén el diagnostico
                                      de tu página gratis! o 10% de descuento en
                                      tu proyecto (precio de lanzamiento)
                                    </Typography>
                                  </Grid>
                                  <br />
                                  <br />
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sx={{
                                  width: { xs: 300, sm: 600, md: 350 },
                                  marginRight: { xs: "0", md: 1 },
                                }}
                              >
                                <FormModal />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>

      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <CardImage data={CARD_IMAGES} />
        </Grid>
      </Grid>
      {/* formulario 1 g */}
      <Grid
        sx={{
          height: { xs: "auto", md: "100vh" },
          paddingBottom: { xs: 5 },
          backgroundImage:
            "url('https://content.app-sources.com/s/03275370429034195/uploads/Images/IMAGEN-PARA-LANDING-DE-VELOCIVENTAS-HEADER-5-0885087.jpg') ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnGap={20}
            rowGap={4}
            m={0}
            paddingTop={2}
          >
            <Card
              sx={{
                width: { xs: "360px", sm: 800, md: 410 },
                height: { xs: "99vh", sm: 850, md: "90vh" },
                borderRadius: "0",
                boxShadow: "none",
                bgcolor: "rgba(255,255,255,0.8)",
              }}
            >
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ height: "97%", width: "100%" }}
              >
                <Grid item xs={3}>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        width={"100%"}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box
                          component="img"
                          sx={{
                            height: 150,
                            width: 250,
                            maxHeight: { xs: 233, md: 230 },
                            maxWidth: { xs: 350, md: 350 },
                          }}
                          alt="Velociventas."
                          src="https://content.app-sources.com/s/03275370429034195/uploads/Images/LOGO-PARA-MARCA-NUEVA-0628120.png"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        paddingTop={5}
                      >
                        <Grid item xs={3}>
                          <Typography
                            display="block"
                            variant="caption"
                            align="center"
                            sx={{
                              fontSize: 30,
                              maxWidth: { xs: 350, sm: 700, md: 350 },
                            }}
                          >
                            Nuestro equipo comercial incrementa las
                            posibilidades de lograr tus objetivos.
                          </Typography>
                        </Grid>
                        <br />
                        <Grid item xs={3}>
                          <Typography
                            display="block"
                            variant="caption"
                            align="center"
                            maxWidth={300}
                            sx={{
                              fontSize: 17,
                              maxWidth: { xs: 350, sm: 500, md: 350 },
                            }}
                          >
                            Generamos los prospectos calificados que tu negocio
                            necesita. ¡Somos los velociraptors de las ventas!
                            ¿Quieres saber cómo lo hacemos?
                          </Typography>
                        </Grid>
                        <br />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        width: { xs: 300, sm: 600, md: 350 },
                        marginRight: { xs: "0", md: 1 },
                      }}
                    >
                      <FormOne />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
            <Card
              sx={{
                maxWidth: 450,
                maxHeight: 400,
                borderRadius: "0",
                boxShadow: "none",
                bgcolor: "transparent",
              }}
            >
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ height: "420px" }}
              >
                <Grid item xs={3}>
                  <Grid item xs={3}>
                    <Card
                      sx={{
                        height: 420,
                        width: 345,
                        boxShadow: "none",
                        border: "0px solid #ced4da",
                        bgcolor: "transparent",
                        borderRadius: "0",
                      }}
                    >
                      <Timer />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      {/* acerca de b */}
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <VideoText />
        </Grid>
      </Grid>
      {/* tarjetas de opinion g */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Paper
            style={{
              height: "auto",
              background: "lightgrey",
              paddingBottom: 70,
              boxShadow: "none",
            }}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              paddingTop={5}
            >
              <Grid item xs={3}>
                <Typography
                  display="block"
                  variant="caption"
                  align="center"
                  sx={{ fontSize: 32 }}
                >
                  Si ellos lo recomiendan, anímate tu también.
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  display="block"
                  variant="caption"
                  align="center"
                  sx={{ fontSize: 18 }}
                >
                  Por que nuestra mejor carta de presentación es la
                  recomendación.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              columnGap={4}
              rowGap={4}
              m={0}
              paddingTop={2}
            >
              <Card
                sx={{
                  maxWidth: 450,
                  maxHeight: 400,
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ height: "420px" }}
                >
                  <Grid item xs={3}>
                    <Grid item xs={3}>
                      <Card
                        sx={{
                          height: 420,
                          width: 345,
                          boxShadow: "none",
                          border: "0px solid #ced4da",
                          bgcolor: "#EE811C",
                          borderRadius: "0",
                        }}
                      >
                        <CardContent sx={{ marginLeft: 0 }}>
                          <Grid container wrap="nowrap" spacing={2}>
                            <Grid
                              item
                              container
                              spacing={0}
                              alignItems="center"
                              justifyContent="center"
                              flexDirection={"column"}
                              paddingTop={1}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src="https://content.app-sources.com/s/03275370429034195/thumbnails/640x480/Images/testimonio1-0952640.png"
                                sx={{ width: 70, height: 70 }}
                              />
                              <br />
                              <Typography sx={{ marginTop: 1, color: "white" }}>
                                Jimena Del Monte
                              </Typography>
                              <br />
                              <Rating name="read-only" value={value} readOnly />
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            spacing={1}
                            alignItems="center"
                            justifyContent="center"
                            paddingTop={1}
                            color="white"
                            fontSize={19}
                          >
                            <br />
                            <Typography
                              display="block"
                              color="white"
                              maxWidth={250}
                              paddingTop={2}
                              variant="caption"
                              align="center"
                              fontSize={16}
                            >
                              "Estoy muy agradecido por la forma en que me
                              atendieron, los recursos que me brindaron para
                              explotar mi proyecto y obtener ganancias."
                            </Typography>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
              <Card
                sx={{
                  maxWidth: 450,
                  maxHeight: 400,
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ height: "420px" }}
                >
                  <Grid item xs={3}>
                    <Grid item xs={3}>
                      <Card
                        sx={{
                          height: 420,
                          width: 345,
                          boxShadow: "none",
                          border: "0px solid #ced4da",
                          bgcolor: "#FFFF",
                          borderRadius: "0",
                        }}
                      >
                        <CardContent sx={{ marginLeft: 0 }}>
                          <Grid container wrap="nowrap" spacing={2}>
                            <Grid
                              item
                              container
                              spacing={0}
                              alignItems="center"
                              justifyContent="center"
                              flexDirection={"column"}
                              paddingTop={1}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src="https://content.app-sources.com/s/03275370429034195/uploads/Images/testimonio3-0953090.png"
                                sx={{ width: 70, height: 70 }}
                              />
                              <br />
                              <Typography sx={{ marginTop: 1, color: "black" }}>
                                Francisco García
                              </Typography>
                              <br />
                              <Rating name="read-only" value={value} readOnly />
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            spacing={1}
                            alignItems="center"
                            justifyContent="center"
                            paddingTop={1}
                            color="white"
                            fontSize={19}
                          >
                            <br />
                            <Typography
                              display="block"
                              color="black"
                              maxWidth={250}
                              paddingTop={2}
                              variant="caption"
                              align="center"
                              fontSize={16}
                            >
                              "Estoy muy agradecido por la forma en que me
                              atendieron, los recursos que me brindaron para
                              explotar mi proyecto y obtener ganancias."
                            </Typography>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
              <Card
                sx={{
                  maxWidth: 450,
                  maxHeight: 400,
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ height: "420px" }}
                >
                  <Grid item xs={3}>
                    <Grid item xs={3}>
                      <Card
                        sx={{
                          height: 420,
                          width: 345,
                          boxShadow: "none",
                          border: "0px solid #ced4da",
                          bgcolor: "#FFFF",
                          borderRadius: "0",
                        }}
                      >
                        <CardContent sx={{ marginLeft: 0 }}>
                          <Grid container wrap="nowrap" spacing={2}>
                            <Grid
                              item
                              container
                              spacing={0}
                              alignItems="center"
                              justifyContent="center"
                              flexDirection={"column"}
                              paddingTop={1}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src="https://content.app-sources.com/s/03275370429034195/thumbnails/640x480/Images/testimonio2-0953081.png"
                                sx={{ width: 70, height: 70 }}
                              />
                              <br />
                              <Typography sx={{ marginTop: 1, color: "black" }}>
                                María Velásquez
                              </Typography>
                              <br />
                              <Rating name="read-only" value={value} readOnly />
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            spacing={1}
                            alignItems="center"
                            justifyContent="center"
                            paddingTop={1}
                            color="white"
                            fontSize={19}
                          >
                            <br />
                            <Typography
                              display="block"
                              color="black"
                              maxWidth={250}
                              paddingTop={2}
                              variant="caption"
                              align="center"
                              fontSize={16}
                            >
                              ¡Generarán el plan de acción para que tus ventas
                              crezcan y tengas muy claro como lograr lo que te
                              has propuesto!
                            </Typography>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* formulario 2 b */}
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <ContactForm />
        </Grid>
      </Grid>
      {/* contacto y footer g */}
      <br />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Paper
            style={{ height: "49vh", background: "#FFFF", boxShadow: "none" }}
          >
            <Box
              display="flex"
              width={"100%"}
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                sx={{
                  height: 230,
                  width: 350,
                  maxHeight: { xs: 233, md: 230 },
                  maxWidth: { xs: 350, md: 350 },
                }}
                alt="Velociventas."
                src="https://content.app-sources.com/s/03275370429034195/uploads/Images/LOGO-PARA-MARCA-NUEVA-0628120.png"
              />
            </Box>
            <br />
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Fab
                aria-label="save"
                color="primary"
                sx={{
                  height: 45,
                  width: 45,
                  marginRight: 1,
                  boxShadow: "none",
                }}
                // onClick={handleButtonClick}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Fab>
              <Fab
                aria-label="save"
                color="primary"
                sx={{
                  height: 45,
                  width: 45,
                  boxShadow: "none",
                }}
                // onClick={handleButtonClick}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Fab>
              <Fab
                aria-label="save"
                color="primary"
                sx={{
                  height: 45,
                  width: 45,
                  marginLeft: 1,
                  boxShadow: "none",
                }}
                // onClick={handleButtonClick}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Fab>
            </Grid>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                display="block"
                color="black"
                paddingTop={5}
                variant="caption"
                align="center"
                fontSize={14}
              >
                © 2020 Todos los derechos reservados reservados.
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <WhatsAppButton />
      <BackToTopButton />
    </>
  );
}
