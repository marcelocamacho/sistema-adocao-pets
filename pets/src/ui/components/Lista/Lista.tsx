import { Button } from "@mui/material";
import { IPet } from "../../../data/@types/IPet";
import { TextService } from "../../../data/services/TextService";
import { ListaStyled, ItemLista, Foto, Informacoes, Nome, Descricao } from "./Lista.style";

interface IListaProps{
  pets: IPet[];
}
const tamanhoMaximo = 200;


export default function Lista(props: IListaProps){
  return (
    <>
      <ListaStyled>
        {props.pets.map(pet => (
          <ItemLista key={pet.id}>
            <Foto src={pet.foto} alt={pet.nome}/>
            <Informacoes> 
              <Nome>{pet.nome}</Nome>
              <Descricao> 
                {TextService.limitarTexto(pet.historia,tamanhoMaximo)}
              </Descricao>
              <Button variant={'contained'} fullWidth>Adotar</Button>
            </Informacoes>
        </ItemLista>
        ))}
      </ListaStyled>
    </>
  )
}