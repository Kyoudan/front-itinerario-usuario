import { Button, Typography } from "@mui/material";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import * as S from "./style";

export const Footer = () => {
  const { themeName } = useAppThemeContext();

  const styledButton = {
    fontFamily: "Montserrat",
  };

  return (
    <S.styledDiv theme={themeName}>
      <Typography>
        <Button variant="text" sx={styledButton}>
          Termos
        </Button>
      </Typography>
      <Typography>
        <Button variant="text" sx={styledButton}>
          Contato
        </Button>
      </Typography>
      <Typography>
        <Button variant="text" sx={styledButton}>
          Sobre o site
        </Button>
      </Typography>
    </S.styledDiv>
  );
};
