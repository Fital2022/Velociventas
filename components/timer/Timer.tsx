import { Box, Button, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../../styles/Things.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import moment from "moment";

const Timer: NextPage = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let startTime = moment().format("HH:mm:ss");

  startTime = moment(startTime, "HH:mm:ss")
    .add(15, "minutes")
    .format("HH:mm:ss");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  useEffect(() => {
    const target = new Date('"' + mm + "/" + dd + "/" + yyyy + " " + startTime);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            // width={"auto"}
            // height={"100%"}
            border="none"
            alignItems="center"
            justifyContent="center"
          >
            <Box className={styles["containerTimer"]}>
              <br />
              <br />
              <br />
              <br />
              <Box className="timer-inner">
                <Box className="timer-segment">
                  <span className="time">{days}</span>
                  <Typography className="label">Días</Typography>
                </Box>
                <span style={{ color: "white" }} className="divider">
                  :
                </span>
                <Box className="timer-segment">
                  <span className="time">{hours}</span>
                  <Typography className="label">Horas</Typography>
                </Box>
                <span style={{ color: "white" }} className="divider">
                  :
                </span>
                <Box className="timer-segment">
                  <span className="time">{minutes}</span>
                  <Typography className="label">Minutos</Typography>
                </Box>
                <span style={{ color: "white" }} className="divider">
                  :
                </span>
                <Box className="timer-segment">
                  <span className="time">{seconds}</span>
                  <Typography className="label">Segundos</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            // width={"auto"}
            // height={"100%"}
            border="none"
            alignItems="center"
            justifyContent="center"
          >
            <Box className={styles["containerTimer"]}>
              <br />
              <br />
              <Box className="timer-inner">
                <Box sx={{ width: "100%" }}>
                  <Button
                    className={styles["hvr-sweep-to-right"]}
                    sx={{ width: "100%", bgcolor: "rgb(47, 111, 165)", color: "white"  }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Grid
                        container
                        rowSpacing={0}
                        columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                      >
                        <Grid item xs={2}>
                          <WhatsAppIcon
                            sx={{
                              color: "white",
                              width: 30,
                              height: 30,
                              paddingTop: 1,
                            }}
                          />
                        </Grid>
                        <Grid item xs={10} paddingTop={1.2}>
                          <Typography style={{ fontSize: 12 }}>
                            &nbsp;¡Agenda una cita!
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Timer;
