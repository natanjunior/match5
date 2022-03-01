import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
		return (
			<Html lang="pt">
				<Head>
					<meta charSet="utf-8" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900"
						rel="stylesheet"
					/>
				</Head>
				<body className="w-full h-full">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
