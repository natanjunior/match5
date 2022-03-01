type Props = {
	roundActive: boolean,
	handle
};

const SeletorRound: React.FC<Props> = ({roundActive, handle}) => (
	<div className="flex p-2">
		<label className="swap swap-rotate">
  			<input type="checkbox" onChange={handle}/>
			<svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
				<path d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"/>	
			</svg>
			<svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
				<path d="M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"/>
			</svg>
		</label>
	</div>
);

export default SeletorRound;
