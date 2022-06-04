import { TituloStyled, Subtitulo } from "./Titulo.style";

interface ITituloProps {
  titulo: string;
  subtitulo?: string | JSX.Element
}

export default function Titulo(props: ITituloProps){
  return(
  <>
    <TituloStyled>{props.titulo}</TituloStyled>
    <Subtitulo>{props.subtitulo}</Subtitulo>
  </>
  
  )
}