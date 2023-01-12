import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "../../styles/custom.module.css";

export const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onFormFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(value);
    setValue({ ...initialState });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{
          width: { xs: "auto", md: "100vw" },
          paddingBottom: { xs: 5 },
          backgroundImage: "url('/images/img2.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ height: "auto", width: "80%", mt: 10, marginBottom: 5 }}>
          <CardContent>
            <Typography sx={{ mt: 5 }} align="center" variant="h2">
              ¿Estas listo para ganar más?
            </Typography>
            <Typography align="center" sx={{ color: "rgb(232,108,23)" }}>
              Contactanos y recibe una llamada para agendar una cita lo antes
              posible
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid
                container
                alignItems={"center"}
                sx={{ width: "100%", mt: 5 }}
                direction={"column"}
              >
                <input
                  value={value.name}
                  name={"name"}
                  className={styles["form-input"]}
                  onChange={onFormFieldChanges}
                  placeholder="   Ingresar Tu Nombre"
                  required
                ></input>
                <input
                  value={value.email}
                  name={"email"}
                  className={styles["form-input"]}
                  onChange={onFormFieldChanges}
                  placeholder="   Ingresar Tu Correo"
                  required
                ></input>
                <input
                  value={value.phone}
                  name={"phone"}
                  className={styles["form-input"]}
                  onChange={onFormFieldChanges}
                  placeholder="   Ingresar Tu Telefono"
                  required
                ></input>
                <Button
                type="submit"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(238,129,28,1)",
                    fontSize: "14px",
                    borderColor: "#000000",
                    fontFamily: "sans-serif",
                    width: "auto",
                    borderRadius: "10px",
                    mt: 3,
                    mb: 5,
                    ":hover" : {
                    opacity: 0.8,
                    bgcolor: "rgba(238,129,28,1)",
                    },
                  }}
                >
                  Quiero agendar una cita
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};
