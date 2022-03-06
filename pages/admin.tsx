import round1 from '../src/assets/rounds/round1.json';
import round2 from '../src/assets/rounds/round2.json';
import Head from 'next/head';

export async function getServerSideProps(context) {
	
	let hasActiveGame = false;
	let gameID = undefined;

	return {
		props: {
			round1,
			round2
		},
	};
}

export default function Admin({ round1, round2 }) {
  
	return (
    <div className="container flex flex-col h-screen p-4 bg-red-300">
      <Head>
		  <title>Match5 - Admin</title>
	  </Head>
		<div className="flex w-full h-full">
			<div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
			<div className="divider divider-horizontal"></div>
			<div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
		</div>
    </div>
  );
}
