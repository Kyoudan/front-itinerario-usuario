import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { BsCheck, BsXLg } from "react-icons/bs";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

export const ActivateAccount = () => {
  const { uuid } = useParams();
  const { themeName } = useAppThemeContext();
  const [timeLeft, setTimeLeft] = useState(5);
  const [state, setState] = useState<"error" | "correct" | "">("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleActivateAccount = async () => {
    try {
      console.log("Chamado!!");
      const result = await api.get(`/activateAccount/?token=${uuid}`);
      if (state == "" && message == "") {
        setState("correct");
        setMessage(result.data.message);
      }
    } catch (err: any) {
      setState("error");
      setMessage(err.response.data.message);
    }
  };

  useEffect(() => {
    if (state === "correct") {
      if (timeLeft === 0) {
        navigate("/");
        return;
      }

      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft, message]);


  return (
    <>
      {message ? (
        <S.styledDiv theme={themeName}>
          {state === "correct" ? (
            <div className="circle-wrapper">
              <div className="success circle"></div>
              <div className="icon">
                <BsCheck />
              </div>
            </div>
          ) : (
            <div className="circle-wrapper">
              <div className="error circle"></div>
              <div className="icon">
                <BsXLg />
              </div>
            </div>
          )}

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "1.5em",
              color: themeName === "dark" ? "#fff" : "#000",
              textAlign: "center",
            }}
            className="entryTypography"
          >
            {message}
          </Typography>
          {state === "correct" && (
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "0.8em",
                color: themeName === "dark" ? "#fff" : "#000",
                textAlign: "center",
              }}
              className="entryTypography"
            >
              Redirecionando você para pagina de login em: {timeLeft}s
            </Typography>
          )}
        </S.styledDiv>
      ) : (
        <>
          <S.styledDiv theme={themeName}>
            <Button
              sx={{
                height: "40px",
                fontSize: "1em",
                fontFamily: "Montserrat",
                color: themeName === "dark" ? "#fff" : "#1c1c1c",
                border:
                  themeName === "dark" ? "1px solid #fff" : "1px solid #1c1c1c",
                marginTop: "10px",
                backgroundColor:
                  themeName === "dark" ? "#a60303" : "transparent",
              }}
              variant="text"
              onClick={handleActivateAccount}
            >
              Ativar
            </Button>
          </S.styledDiv>
        </>
      )}
    </>
  );
};
