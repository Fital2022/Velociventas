import {
  Button,
  FormControl,
  Grid,
  Grow,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, FC, ReactEventHandler, useState } from "react";
import styles from "../../styles/custom.module.css";
import { Box } from "@mui/system";
import { CardImageData } from "../../interfaces";
import { CloseOutlined, Height } from "@mui/icons-material";

interface Props {
  data: CardImageData[];
}

export const CardImage: FC<Props> = ({ data }) => {
  const initialState = {
    ask1: "",
    ask2: "",
    ask3: "",
    name: "",
    email: "",
    phone: "",
  };

  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState({
    ask1: "",
    ask2: "",
    ask3: "",
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
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "560px",
            height: "auto",
            bgcolor: "rgb(27,30,34)",
          }}
        >
          <IconButton
            sx={{
              bgcolor: "white",
              border: "1px solid black",
              position: "absolute",
              right: "-1px",
              borderRadius: 0,
            }}
            onClick={() => setShowModal(false)}
          >
            <CloseOutlined />
          </IconButton>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", color: "white", marginTop: 5 }}
          >
            <span>Diagnostico gratis o el</span>{" "}
            <span className={styles["span-color"]}>10% de descuento</span>
          </Typography>
          <form onSubmit={handleSubmit}>
            <ModalField
              text="¿Qué te gustaría mejorar?"
              value={value.ask1}
              name="ask1"
              setValue={onFormFieldChanges}
            />
            <ModalField
              text="¿Cuál es tu presupuesto estimado?"
              value={value.ask2}
              name="ask2"
              setValue={onFormFieldChanges}
            />
            <ModalField
              text="¿En cuánto tiempo necesitas resolverlo?"
              value={value.ask3}
              name="ask3"
              setValue={onFormFieldChanges}
            />
            <ModalField
              text="Nombre"
              value={value.name}
              name="name"
              setValue={onFormFieldChanges}
            />
            <ModalField
              text="E-mail"
              value={value.email}
              name="email"
              setValue={onFormFieldChanges}
            />
            <ModalField
              text="Teléfono"
              value={value.phone}
              name="phone"
              setValue={onFormFieldChanges}
            />
            <Button
              sx={{
                bgcolor: "rgb(232,108,23)",
                color: "white",
                width: "474px",
                height: "56px",
                mt: 3,
                ml: 5.5,
                mb: 5
              }}
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Modal>

      <Grid container sx={{ maxWidth: "1100px" }} spacing={5}>
        {data.map((content) => {
          return (
            <Grid key={content.text} item xs>
              <Grid
                container
                spacing={0}
                direction="column"
                justifyContent="center"
                sx={{ width: { xs: "100vw", sm: "100vw", md: "227px" } }}
              >
                <Grid item xs={3}>
                  <Grid item alignItems={"center"}>
                    <Grid sx={{ marginLeft: { xs: 12, sm: 37, md: 0 } }}>
                      <Image
                        width={227}
                        className={styles["center-img"]}
                        height={345}
                        src={content.img}
                        alt={""}
                      ></Image>
                    </Grid>
                    <Button
                      className={styles["hvr-sweep-to-right"]}
                      sx={{ width: "95%" }}
                      onClick={() => setShowModal(true)}
                    >
                      {" "}
                      {content.text}{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

interface ModalFieldProps {
  text: string;
  value: string;
  setValue: React.Dispatch<ChangeEvent<HTMLInputElement>>;
  name: string;
}

const ModalField: FC<ModalFieldProps> = ({ text, value, setValue, name }) => {
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FormControl>
          <Typography sx={{ textAlign: "left", color: "white", marginTop: 2 }}>
            <span>{text}</span>{" "}
            <span className={styles["asterik-color"]}>*</span>
          </Typography>
          <input
            value={value}
            name={name}
            className={styles["modal-input"]}
            onChange={setValue}
            required
          ></input>
        </FormControl>
      </Box>
    </>
  );
};
