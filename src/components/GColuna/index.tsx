import GItem from "../GItem";

type Props = {
	nome: string,
	cor: string,
	itens: Array<any>,
	jogoAtivo: boolean
};

const GColuna: React.FC<Props> = ({ nome, cor, itens, jogoAtivo}) => (
	<div className={`flex flex-col justify-between h-full p-4 border-2 shadow-lg rounded-xl bg-${cor}-400`}>
		<div className="text-lg">
			{ nome }
		</div>
		{itens.map((item, index) => {
			return (
				<GItem key={item.chave} nome={item.nome} icone={item.icone} ativo={item.ativo} jogoAtivo={jogoAtivo}></GItem>
			);
		})}
	</div>
);

export default GColuna;