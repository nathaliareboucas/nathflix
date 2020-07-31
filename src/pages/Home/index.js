import React from 'react';

import Dados from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault';

function Home() {

	const categorias = Dados.categorias;

	return(
		<>
			<PageDefault>
				<BannerMain url="https://www.youtube.com/watch?v=hWoPwfhgzUE"/>
				<Carousel ignoreFirstVideo={false} category={categorias[0]}/>
				<Carousel ignoreFirstVideo={false} category={categorias[1]}/>
				<Carousel ignoreFirstVideo={false} category={categorias[2]}/>
			</PageDefault>					
		</>
	);

}

export default Home;
