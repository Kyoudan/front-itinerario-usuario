import * as S from "./style";
import Painel from "../../assets/Painel.png";
import { Button, TextField, Typography } from "@mui/material";

export const Register = () => {
  return (
    <S.styledDiv>
      <S.styledLeft>
        {" "}
        <Typography
          sx={{
            fontSize: "3.5em",
            fontFamily: "Montserrat, sans-serif",
            textAlign: "center",
            color: "red",
            maxWidth: "400px",
          }}
        >
          SE <strong style={{ fontWeight: 800, color: "#a60303" }}>LIGA</strong>{" "}
          NA{" "}
          <strong style={{ fontWeight: 800, color: "#a60303" }}>
            {" "}
            MIDIA!!
          </strong>
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "90%" }}
        />
        <TextField label="Senha" variant="outlined" sx={{ width: "90%" }} />
        <TextField
          label="Confirme sua senha"
          variant="outlined"
          sx={{ width: "90%" }}
        />
        <Button sx={{ width: "90%" }} variant="outlined">
          Criar conta
        </Button>
      </S.styledLeft>
      <S.stlyedRight image={Painel}></S.stlyedRight>
    </S.styledDiv>
  );
};
