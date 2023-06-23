import { useAppThemeContext } from "../../contexts/ThemeContext";
import * as S from "./style";
import { FaMusic } from "react-icons/fa";
import { datas } from "../../assets/podcasts/datas";
import { useNavigate } from "react-router-dom";

export const Podcasts = () => {
  const { themeName } = useAppThemeContext();
  const navigate = useNavigate();

  return (
    <S.styledDiv theme={themeName}>
      <div className="Container">
        {datas &&
          datas.map((data) => (
            <div
              className="Podcasts"
              onClick={() => navigate(`/podcasts/${data.uuid}`)}
            >
              <div className="Icon">
                <div className="DivIconMusic">
                  <FaMusic className="IconMusic" />
                </div>
              </div>
              <div className="Content">
                <h1 className="Title">{data.title}</h1>
                <p className="Description">{data.description}</p>
              </div>
            </div>
          ))}
      </div>
    </S.styledDiv>
  );
};
