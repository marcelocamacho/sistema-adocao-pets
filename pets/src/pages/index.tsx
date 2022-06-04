import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'


const Home: NextPage = () => {
  return (
    <div>
     <Titulo 
      titulo='' 
      subtitulo={
        <span>
          Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>.
        </span>
      }/>

      <Lista 
        pets={[
          {id: 1,
          nome: "Bidu",
          historia: 'kjdkljdklds',
          foto: "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg.webp"
        },
        {id: 2,
          nome: "Cadu",
          historia: 'Fugiat cupidatat commodo anim ex fugiat duis do do non pariatur est. Nulla fugiat ex laboris laborum do sunt minim sit irure ad sit aute.',
          foto: "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg.webp"
        }
        ]}>

      </Lista>
    </div>
  )
}

export default Home
