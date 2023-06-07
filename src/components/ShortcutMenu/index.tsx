import { useEffect, useState } from "react";
import * as S from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerComponent } from "../NavBar/components/Drawer";

export const ShortcutMenu = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [buttonAnimate, setButtonAnimate] = useState<string>();
  const [viewButton, setViewButton] = useState<boolean>();
  const [viewDrawer, setViewDrawer] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const handleDrawer = () => {
    setViewDrawer(!viewDrawer);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 200 && !viewDrawer) {
      setViewButton(true);
      setButtonAnimate("animate-in");
    } else if (viewButton) {
      setViewButton(false);
      setButtonAnimate("animate-out");
    }
  }, [scrollPosition, viewDrawer]);

  return (
    <>
      <DrawerComponent isDrawer={viewDrawer} setIsDrawer={setViewDrawer} />
      <S.styledButton animate={buttonAnimate} onClick={handleDrawer}>
        <MenuIcon sx={{ color: "#fff", fontSize: "2em" }} />
      </S.styledButton>
    </>
  );
};
