import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function useForm(valoresInicias) {
  const [values, setValues] = useState(valoresInicias);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(
      name,
      value,
    );
  }

  function clearForm() {
    setValues(valoresInicias);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
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
        {values.nome}
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
          name="nome"
          label="Nome de categoria: "
          value={values.nome}
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
