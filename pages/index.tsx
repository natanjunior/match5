import type { NextPage } from 'next'
import Cronometro from '../src/components/cronometro'
import Game from '../src/components/Game'
import SeletorGame from '../src/components/seletorGame'
import SeletorRound from '../src/components/seletorRound'

import round1 from '../src/assets/rounds/round1.json';
import round2 from '../src/assets/rounds/round2.json';
import { useEffect, useState } from 'react'
import Head from 'next/head'

type Item = {
	nome: string,
	icone: string,
	ativo?: boolean
};

type Round = {
	chave: number,
	nome: string,
	cor: string,
	itens: Array<Item>
};

export async function getServerSideProps(context) {
	
	return {
		props: {
			round1,
			round2
		},
	};
}

export default function Home({ round1, round2 }) {
  
	const [roundActive, setRoundActive] = useState(true);
	const [round, setRound] = useState(round1);
	const [jogoAtivo, setJogoAtivo] = useState(false);

	function iniciarJogo(round) {
		round.map(coluna => {
			const activeIndex = generateActiveItem(coluna.itens.length-1);
			coluna.itens.map(item => item.ativo = false);
			coluna.itens[activeIndex].ativo = true;
			return coluna;
		});
		setRound(round);
	}
	
	function pararJogo(round) {
		round.map(coluna => {
			coluna.itens.map(item => item.ativo = false);
			return coluna;
		});
		setRound(round);
	}

	const handleIniciarJogo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setJogoAtivo(!jogoAtivo);

		if(!jogoAtivo)
			iniciarJogo(round)
		else
			pararJogo(round)
	}

	const handleTrocaRound = (event) => {
		setRoundActive(!roundActive);
		setJogoAtivo(false);
		if(!roundActive){
			setRound(round1);
			pararJogo(round1);
		}else{
			setRound(round2);
			pararJogo(round2);
		}
	}

	return (
    <div className="container flex flex-col h-screen">
      <Head>
		  <title>Match5</title>
	  </Head>
	  <div className="flex flex-row justify-between h-16">
        <div className="flex">
          {/*<SeletorGame></SeletorGame>*/}
        </div>
        <div className="flex grow">
          <h1>Adedanha</h1>
        </div>
        <div className="flex">
			<button className="btn btn-primary"
				onClick={handleIniciarJogo}>
				{`${jogoAtivo == true ? 'parar':'iniciar'} jogo`}
			</button>
			<Cronometro></Cronometro>
          	<SeletorRound roundActive={roundActive} handle={handleTrocaRound}></SeletorRound>
        </div>
      </div>
	  <div className="flex grow">
		<Game round={round} jogoAtivo={jogoAtivo}></Game>
	  </div>
	  <div className="h-8">
Footer
	  </div>
    </div>
  );
}

function generateActiveItem(itensQTD) {
	return Math.floor(Math.random() * (itensQTD - 0) + 0);
}