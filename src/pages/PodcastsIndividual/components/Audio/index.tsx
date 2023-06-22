import * as S from "./style";

export const Audio = () => {
  return (
    <S.styledDiv>
      <div className="Container">
        <h1 className="Title">Falando sobre as inteligencias artificiais</h1>
        <p className="Description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, possimus dolores! Facilis dolor cumque cupiditate. Ut,
          nesciunt eos. Vel, animi esse ratione officia ex iste veniam
          exercitationem corporis officiis ducimus!
        </p>
        <audio src="ruta_del_archivo_de_audio.mp3" controls className="Audio">
          Tu navegador no soporta la etiqueta de audio.
        </audio>
      </div>
    </S.styledDiv>
  );
};
