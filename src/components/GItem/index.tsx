
type Props = {
	nome: string,
	icone: string,
	ativo: boolean,
	jogoAtivo?: boolean,
};

const GItem: React.FC<Props> = ({ nome, icone, ativo, jogoAtivo }) => (
	<div className={`flex grow flex-row items-center border-2 justify-center space-x-2 rounded-xl my-2 bg-white/[.2] border-gray-50/[.5] ${ativo == true && jogoAtivo == true ? 'shadow-lg' : ''} ${ativo != true && jogoAtivo == true ? 'opacity-40' : ''} `}>
		<div className="pl-2 h-full flex items-center grow-0">
			<CheckedIcon active={ativo}></CheckedIcon>		
		</div>
		<div className="grow font-bold tracking-wide text-center text-lg">
			{ nome }
		</div>
		<div className="pr-2 h-full flex items-center grow-0">
			<ItemIcon icon={icone}></ItemIcon>	
		</div>
	</div>
);

function CheckedIcon(props) {
	const { active } = props;
	
	if(active == true){
		return (
			<i className="fa-solid fa-square-check fa-xl fa-fw"></i>
		);
	}
	return (
		<i className="fa-regular fa-square fa-xl fa-fw"></i>
	);
}

function ItemIcon(props) {
	const { icon } = props;
	
	return (
		<i className={`fa-solid fa-${icon} fa-lg fa-fw`}></i>
	);
}

export default GItem;
