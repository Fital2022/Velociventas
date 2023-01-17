import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./../../styles/Things.module.css";

function WhatsApp() {
  window.open('https://api.whatsapp.com/send?phone=525539745410&text=Deja%20que%20respondamos%20tus%20dudas')
}

const WhatsAppButton = () => {
  return (
    <>
      <IconButton
        className={styles["expand-left-right"]}
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
          bgcolor: "rgb(47, 111, 165)", 
          color: "white" 
        }}
        aria-label="save"
        onClick={WhatsApp}
      >
        <WhatsAppIcon sx={{ color: "white", width: 50, height: 55 }} />
        
      </IconButton>
      
    </>
  );
};

export default WhatsAppButton;
