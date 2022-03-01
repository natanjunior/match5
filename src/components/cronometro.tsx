
const Cronometro: React.FC = ({}) => {
	
	let minValue = {
		"--value": 5
	}

	return (
		<div className="flex flex-row p-1">
			<div className="grid grid-flow-col gap-1 text-center auto-cols-max">
			<div className="flex flex-col p-2 bg-neutral rounded-xl text-neutral-content">
				<span className="font-mono text-xl countdown text-justify">
				<span style={{...minValue } as React.CSSProperties}></span>
				</span>
				<span className="text-sm">
				min
				</span>
			</div>
			<div className="flex flex-col p-2 bg-neutral rounded-xl text-neutral-content">
				<span className="font-mono text-xl countdown text-justify">
				<span></span>
				</span>
				<span className="text-sm">
				sec
				</span>
			</div>
			</div>
		</div>
	);
}

export default Cronometro;
