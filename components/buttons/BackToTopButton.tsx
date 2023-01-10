import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Fab
          aria-label="save"
          onClick={scrollToTop}
          sx={{
            height: 55,
            width: 55,
            marginLeft: 1,
            boxShadow: "none",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            color: "white",
            backgroundColor: "#6E7075"
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default BackToTopButton;
