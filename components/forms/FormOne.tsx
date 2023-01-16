import { Box, Grid, Modal, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const FormOne = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    ask1: "",
    ask2: "",
    ask3: "",
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
    setShowModal(true)
    let data = {
      content: formValues,
    };
    axios.post("api/sendpost", data).then((response) => {
      console.log(response);
    });
    setFormValues({ ...initialValues });
  };

  return (
    <>
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
            Enviar
          </Button>
          </Grid>

          </Paper>
            
        </Box>
      </Modal>

        <form onSubmit={handleSubmit}>
      <Grid item>
        <TextField
          id="name"
          name="name"
          label=""
          placeholder="Nombre"
          type="text"
          required
          value={formValues.name}
          onChange={handleInputChange}
          sx={{
            width: { xs: 300, sm: 600, md: 350 },
            bgcolor: "white",
            marginBottom: 1,
          }}
        />
      </Grid>

      <Grid item>
        <TextField
          id="email"
          name="email"
          label=""
          required
          placeholder="E-mail"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
          sx={{
            width: { xs: 300, sm: 600, md: 350 },
            bgcolor: "white",
            marginBottom: 1,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="phone"
          name="phone"
          label=""
          required
          placeholder="Teléfono"
          type="tel"
          value={formValues.phone}
          onChange={handleInputChange}
          sx={{
            width: { xs: 300, sm: 600, md: 350 },
            bgcolor: "white",
            marginBottom: 1,
          }}
        />
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              backgroundColor: "#EE811C",
              margin: "5px",
              borderRadius: 8,
              boxShadow: "none",
            }}
            sx={{
              ":hover": {
                opacity: 0.8,
                bgcolor: "#EE811C",
                boxShadow: "none",
              },
            }}
            
          >
            ¡SÍ! QUIERO APRENDER CÓMO
          </Button>
          <br />
        </Grid>
      </Grid>
        </form>
    </>
  );
};

export default FormOne;
