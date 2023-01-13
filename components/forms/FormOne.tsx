import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const FormOne = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
    let data = {
      content: formValues
    }
    axios.post("api/sendpost", data).then((response) => {
      console.log(response);
    });
    setFormValues({ ...initialValues });
  };

  return (
    <>
      <Grid item>
        <TextField
          id="name"
          name="name"
          label=""
          placeholder="Nombre"
          type="text"
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
          placeholder="E-mail"
          type="text"
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
          placeholder="Teléfono"
          type="text"
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
            onClick={handleSubmit}
          >
            ¡SÍ! QUIERO APRENDER CÓMO
          </Button>
          <br />
        </Grid>
      </Grid>
    </>
  );
};

export default FormOne;
