import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
	const [feed, setFeed] = useState([
		{
			id: 1,
			user: {
				name: 'Matheus Silva',
				profile_pic:
					'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
			},
			img: 'https://sujeitoprogramador.com/instareact/foto1.png',
			description: 'Mais um dia de muitos bugs :)',
			liked: true,
			likes: 5,
		},
		{
			id: '2',
			user: {
				name: 'Matheus',
				profile_pic:
					'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
			},
			description: 'Isso sim é ser raiz!!!!!',
			img: 'https://sujeitoprogramador.com/instareact/foto2.png',
			liked: false,
			likes: 0,
		},
		{
			id: '3',
			user: {
				name: 'Jose Augusto',
				profile_pic:
					'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
			},
			description:
				'Bora trabalhar, hoje  estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend',
			img: 'https://sujeitoprogramador.com/instareact/foto3.png',
			liked: false,
			likes: 3,
		},
		{
			id: '4',
			user: {
				name: 'Gustavo Henrique',
				profile_pic:
					'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
			},
			description: 'Isso sim que é TI!',
			img: 'https://sujeitoprogramador.com/instareact/foto4.png',
			liked: false,
			likes: 1,
		},
		{
			id: '5',
			user: {
				name: 'Guilherme',
				profile_pic:
					'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
			},
			description: 'Boa tarde galera do insta...',
			img: 'https://sujeitoprogramador.com/instareact/foto5.png',
			liked: false,
			likes: 32,
		},
	]);

	return (
        <DataContext.Provider
            value={{
                feed, setFeed
            }}
        >{children}</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
