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
} from "@mui/material";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import BackToTopButton from "../components/buttons/BackToTopButton";

export default function Home() {
  const [value, setValue] = React.useState<number | null>(5);

  return (
    <>
      {/* carousel b */}

      {/* formulario 1 g */}

      {/* acerca de b */}

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
              // paddingBottom={5}
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
              <Card sx={{ maxWidth: 450, maxHeight: 400 }}>
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
              <Card sx={{ maxWidth: 450, maxHeight: 400 }}>
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
              <Card sx={{ maxWidth: 450, maxHeight: 400 }}>
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
              // height={"100%"}
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
                // maxWidth={250}
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
      <BackToTopButton />
    </>
  );
}
