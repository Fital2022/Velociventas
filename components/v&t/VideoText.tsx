import { Box, Grid, Typography } from "@mui/material";

export const VideoText = () => {

  return (
    
      <Box sx={{ flexGrow: 1, marginTop: 7, marginBottom: 7 }}>
        <Grid
          container
          sx={{ maxWidth: "1300px" }}
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Grid  item xs={8} md={6}>
            <Grid container spacing={0} justifyContent="center">
              <iframe
                width="572"
                height="322"
                src="https://www.youtube.com/embed/_cnY9S9neG0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Grid>
          </Grid>
          <Grid item container  direction={"column"} xs={6}>
            <Grid container spacing={0} alignItems="center" justifyContent="center">
              <Typography display="block" align="center" maxWidth={600}  variant="h2">
                Nosotros somos tu equipo de prospección.
              </Typography>
              <Typography
                display="block"
                color="rgb(62,62,62)"
                maxWidth={500}
                paddingTop={2}
                variant="caption"
                align="justify"
                fontSize={16}
              >
                Tenemos a un equipo capacitado para generar una estrategia
                comercial justo a tu medida. Nos apegamos a las exigencias del
                mercado y estudiamos a la competencia para lograr tu objetivo.
                ¡Somos generadores de campañas exitosas! Deja de invertir dinero
                sin saber cómo y en donde, nosotros lo hacemos por ti. Llego la
                hora de ver los resultados de tus inversiones. Forma parte de
                nuestra manada de devoradores de clientes potenciales. Nuestros
                velociraptors no dejarán escapar ni uno solo.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  );
};
