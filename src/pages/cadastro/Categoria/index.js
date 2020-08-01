import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff'
  }

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function setValorCategoria(nomeAtributo, valor) {
    setCategoria({
      ...categoria,
      [nomeAtributo]: valor
    });
  }

  function capturaMudancaValor(evento) {
    setValorCategoria(
      evento.target.getAttribute('name'),
      evento.target.value
    )
  }

  function submeteFormulario(evento) {
    evento.preventDefault();
    setCategorias([...categorias, categoria]);
    setCategoria(valoresIniciais);
  }

  return (
    <PageDefault>
    <h1>Cadastro de categoria</h1>

    <form onSubmit={submeteFormulario}>
      <FormField 
        type="text"
        name="nome"
        label="Nome"
        value={categoria.nome} 
        onChange={capturaMudancaValor}/>

      <FormField 
        type="text"
        name="descricao"
        label="Descrição"
        value={categoria.descricao}
        onChange={capturaMudancaValor}/>
   
      <FormField
        type="color"
        name="cor"
        label="Cor"
        value={categoria.cor}
        onChange={capturaMudancaValor}/>

      <button>
        Cadastrar
      </button>
    </form>

    <ul>
      {categorias.map((categoria, index) => {
        return(
        <li key={`${categoria}${index}`}>{categoria.nome}</li>
        )
      })}
    </ul>

    <Link to="/">
      Ir para a home
    </Link>
  </PageDefault>
  );
}

export default CadastroCategoria;