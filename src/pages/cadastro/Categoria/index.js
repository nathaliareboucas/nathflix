import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function setValorCategoria(nomeAtributo, valor) {
    setCategoria({
      ...categoria,
      [nomeAtributo]: valor,
    });
  }

  function capturaMudancaValor(evento) {
    setValorCategoria(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

  function submeteFormulario(evento) {
    evento.preventDefault();
    setCategorias([...categorias, categoria]);
    setCategoria(valoresIniciais);
  }

  useEffect(() => {
    setTimeout(() => {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://imersaonathflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (res) => {
          const resposta = await res.json();
          setCategorias([...resposta]);
        });

      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Empreendedorismo',
          descricao: 'Aprenda a inovar em um novo negócio',
          cor: '#CBD1FF',
        },
        {
          id: 2,
          nome: 'Como economizar',
          descricao: 'Aprenda a economizar e sair do aperto',
          cor: '#CBD1FF',
        },
      ]);
    }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={submeteFormulario}>
        <FormField
          type="text"
          name="nome"
          label="Nome"
          value={categoria.nome}
          onChange={capturaMudancaValor}
        />

        <FormField
          type="textarea"
          name="descricao"
          label="Descrição"
          value={categoria.descricao}
          onChange={capturaMudancaValor}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor"
          value={categoria.cor}
          onChange={capturaMudancaValor}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {
        categorias.length === 0 && (
        <div>
          Carregando...
        </div>
        )
      }

      <ul>
        {categorias.map((cat) => (
          <li key={`${cat}${cat.nome}`}>{cat.nome}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
