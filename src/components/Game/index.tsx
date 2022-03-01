import GColuna from "../GColuna";

type Props = {
	round: Array<any>,
	jogoAtivo: boolean
};

const Game: React.FC<Props> = ({ round, jogoAtivo }) => {
	return (
		<div className="columns-5 gap-2 px-2 w-full h-full">
			{round.map((coluna) => {
				return (
					<GColuna key={coluna.chave} nome={coluna.nome} cor={coluna.cor} itens={coluna.itens} jogoAtivo={jogoAtivo}></GColuna>
				);
			})}
		</div>
	);
};

export default Game;
