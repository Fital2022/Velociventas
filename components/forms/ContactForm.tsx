import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    ask1: "",
    ask2: "",
    ask3: "",
  };

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    ask1: "",
    ask2: "",
    ask3: "",
  });


  const [showModal, setShowModal] = useState(false);

  const onFormFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(value);
    setShowModal(true)
    let data = { content: value };
    axios.post("api/sendpost", data).then((response) => {
      console.log(response);
    });
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
          <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        sx={{ overflow: "scroll" }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "350px", sm: "560px", md: "1080px" },
            height: "auto",
            backgroundImage: "url('/images/fondo-modal.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            
          }}
        >
          <Paper sx={{ bgcolor: "rgba(232,108,23,0.5)"}}>
            <br />
          <Typography sx={{mt:9}} align="center" fontFamily={"fantasy"} variant="h2" color={"white"}  >¡Gracias por registrarte!</Typography>
          <Typography sx={{mt:2}} align="center" fontFamily={"fantasy"} color={"white"} >Te contactáremos a lo más pronto posible</Typography>
          <Grid container  justifyContent={"center"} sx={{width: "100%"}}>
          <Button
            sx={{
              bgcolor: "white",
              color: "blue",
              alignSelf: "center",
              borderRadius: "53px",
              width: { xs: "80%", sm: "474px", md: "474px" },
              height: "56px",
              mt: 3,
              ml: { xs: 4, sm: 5.5, md: 5.5 },
              mb: 10,
              ":hover": {
                bgcolor: "rgba(255,255,255,0.7)",
                color: "blue",
              }
            }}
            onClick={()=> setShowModal(false) }
            >
            Aceptar
          </Button>
          </Grid>

          </Paper>
            
        </Box>
      </Modal>
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
                <TextField
                  id="name"
                  name="name"
                  variant="outlined"
                  type={"text"}
                  value={value.name}
                  required
                  onChange={onFormFieldChanges}
                  placeholder="Ingresar Tu Nombre"
                  sx={{
                    borderRadius: 0,
                    border: "1px solid rgba(150,150,150,0.3);",
                    width:  {xs: "280px", sm: "440px", md: "440px"},
                    height: "56px",
                    borderColor: "#e1e1e1",
                    mt: 2,
                    mr: {xs: 5, sm:0, md: 0}
                  }}
                />
                <TextField
                  id="email"
                  name="email"
                  variant="outlined"
                  type={"email"}
                  value={value.email}
                  required
                  onChange={onFormFieldChanges}
                  placeholder="Ingresar Tu Correo"
                  sx={{
                    borderRadius: 0,
                    border: "1px solid rgba(150,150,150,0.3);",
                    width:  {xs: "280px", sm: "440px", md: "440px"},
                    height: "56px",
                    borderColor: "#e1e1e1",
                    mt: 2,
                    mr: {xs: 5, sm:0, md: 0}
                  }}
                />
                <TextField
                  id="phone"
                  name="phone"
                  variant="outlined"
                  type={"tel"}
                  value={value.phone}
                  required
                  onChange={onFormFieldChanges}
                  placeholder="Ingresar Tu Telefono"
                  sx={{
                    borderRadius: 0,
                    border: "1px solid rgba(150,150,150,0.3);",
                    width:  {xs: "280px", sm: "440px", md: "440px"},
                    height: "56px",
                    borderColor: "#e1e1e1",
                    mt: 2,
                    mr: {xs: 5, sm:0, md: 0}
                  }}
                />
              
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
                    mr: {xs: 5, sm:0, md:0},
                    mb: 5,
                    ":hover": {
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
