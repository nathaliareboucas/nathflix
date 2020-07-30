import React from 'react';

import Dados from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {

	const categorias = Dados.categorias;

	return(
		<>
			<Menu />			
			<BannerMain url="https://www.youtube.com/watch?v=hWoPwfhgzUE"/>
			<Carousel ignoreFirstVideo={false} category={categorias[0]}/>
			<Carousel ignoreFirstVideo={false} category={categorias[1]}/>
			<Carousel ignoreFirstVideo={false} category={categorias[2]}/>
			<Footer/>			
		</>
	);

}

export default App;
