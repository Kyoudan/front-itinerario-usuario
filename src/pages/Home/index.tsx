import * as S from "./style";
import { NavBar } from "../../components/NavBar";
import { Opening } from "./components/Opening";

export const Home = () => {
  return (
    <S.styledContainer>
      <NavBar />
      <Opening />
    </S.styledContainer>
  );
};
