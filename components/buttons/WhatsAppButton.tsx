import { IconButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './../../styles/Things.module.css'

const WhatsAppButton = () => {

  return (
    <>
      <IconButton className={styles["expand-left-right"]}
        sx={{
          width: 65,
          height: 65,
          borderRadius: 0,
          boxShadow: "none",
          position: "fixed",
          bottom: "0px",
          left: "0px",
          border: "1px solid",
          borderColor: "#25D366",
          backgroundColor: "#25D366"
        }}
        aria-label="save"
      >
        <WhatsAppIcon sx={{ color: "white", width: 50, height: 55 }} />
      </IconButton>
    </>
  );
};

export default WhatsAppButton;
