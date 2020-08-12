import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresInicias = {
    titulo: '',
    descricao: '',
    cor: '#0000ff',
  };

  const { handleChange, values, clearForm } = useForm(valoresInicias);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias/'
      : 'https://rafflix.herokuapp.com/categorias';

    console.log('URL_TOP => ', URL_TOP);

    fetch(URL_TOP)
      .then(async (resp) => {
        const resposta = await resp.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          clearForm();
        }}
      >

        <FormField
          type="text"
          name="titulo"
          label="Titulo de categoria: "
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          type="textarea"
          name="descricao"
          label="Descrição: "
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          type="color"
          name="cor"
          label="Cor: "
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
