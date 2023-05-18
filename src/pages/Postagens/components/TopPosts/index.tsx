import { useAppThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { api } from "../../../../api/api";
import { IAxiosFeaturedPosts, IFeaturedPosts } from "./types";

export const TopPosts = () => {
  const { themeName } = useAppThemeContext();
  const [featuredPosts, setFeaturedPosts] = useState<IFeaturedPosts[]>([]);

  const getFeaturedPosts = async () => {
    try {
      console.log("ué");
      const result: IAxiosFeaturedPosts = await api.get("/featuredposts");
      console.log(result);
      console.log("Teste", result.data.data[0].Post.image);
      setFeaturedPosts(result.data.data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = featuredPosts.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  useEffect(() => {
    getFeaturedPosts();
  }, []);

  return (
    <S.styledDiv>
      <S.styledLeft theme={themeName}>
        <Typography className="Text">Conheça nossas</Typography>
        <Typography className="Text">principais postagens</Typography>
      </S.styledLeft>
      <S.styledRight theme={themeName}>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{featuredPosts[activeStep].Post.name}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {featuredPosts.map((step, index) => (
              <div key={step.id}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={
                      step.Post.image
                        ? step.Post.image
                        : "https://cdn.discordapp.com/attachments/863861085471244288/1107852050131333181/image.png"
                    }
                    alt={step.Post.name}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </S.styledRight>
    </S.styledDiv>
  );
};
