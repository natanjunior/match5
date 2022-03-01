import { useEffect, useState } from "react";

let countdownTimeout: NodeJS.Timeout;

type Props = {
	jogoAtivo?: boolean
};

const Cronometro: React.FC<Props> = ({ jogoAtivo }) => {
	
	const [time, setTime] = useState(5 * 60);
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);
	//const [time, setTime] = useState(0.1 * 60);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	let minValue = {
		"--value": minutes
	}
	
	let secValue = {
		"--value": seconds
	}

	useEffect(() => {
		if (isActive && time > 0) {
		  countdownTimeout = setTimeout(() => {
			 setTime(time - 1);
		   }, 1000);
		} else if (isActive && time === 0) {
		  setHasFinished(true);
		  setIsActive(false);
		}
	  }, [isActive, time]);

	  useEffect(() => {
		if(jogoAtivo == true)
			startCountdown();
		else
			resetCountdown();
	  }, [jogoAtivo]);

	  function startCountdown() {
		setIsActive(true);
	  }
	
	  function resetCountdown() {
		clearTimeout(countdownTimeout);
		setIsActive(false);
		setTime(5 * 60);
		setHasFinished(false);
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
					<span style={{...secValue } as React.CSSProperties}></span>
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
