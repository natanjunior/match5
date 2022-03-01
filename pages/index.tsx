import type { NextPage } from 'next'
import Cronometro from '../src/components/cronometro'
import Game from '../src/components/Game'
import SeletorGame from '../src/components/seletorGame'
import SeletorRound from '../src/components/seletorRound'

import round1 from '../src/assets/rounds/round1.json';
import round2 from '../src/assets/rounds/round2.json';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Guia from '../src/components/guia'

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
        <div className="flex grow items-center pl-4">
          <h1 className="text-4xl">Match5</h1>
        </div>
        <div className="flex">
			<button className="btn btn-primary m-2"
				onClick={handleIniciarJogo}>
				{`${jogoAtivo == true ? 'parar':'iniciar'} jogo`}
			</button>
			<Cronometro jogoAtivo={jogoAtivo}></Cronometro>
          	<SeletorRound roundActive={roundActive} handle={handleTrocaRound}></SeletorRound>
        </div>
      </div>
	  <div className="flex grow">
		<Game round={round} jogoAtivo={jogoAtivo}></Game>
	  </div>
	  <div className="mt-2">
	  
	  <footer className="items-center p-4 footer bg-neutral text-neutral-content">
		<div className="items-center grid-flow-col align-middle">
			<p className="leading-6">Copyright © 2022 - All right reserved by NatanJR</p>
			<p className="leading-6 grid grid-cols-3 gap-2 items-center ">
				<i className="fa-solid fa-code fa-fw fa-lg text-cyan-400"></i>
				<i className="fa-solid fa-heart fa-fw fa-lg text-red-500"></i>
				<i className="fa-solid fa-dice fa-fw fa-lg text-pink-300"></i>
			</p>
			
		</div> 
		<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a href="#my-modal-2" className="btn">
			<i className="fa-solid fa-clipboard-list fa-2xl"></i>
			</a>
</div>
		</footer>
	  </div>
	  <div className="modal backdrop-blur-xl bg-gray-900/30 transition-all" id="my-modal-2">
  <div className="modal-box w-2/4 max-w-3xl">
    <Guia></Guia>
	<div className="modal-action">
     <a href="#" className="btn">ok</a>
    </div>
    </div>
  </div>
    </div>
  );
}

function generateActiveItem(itensQTD) {
	return Math.floor(Math.random() * (itensQTD - 0) + 0);
}