import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '#0000ff',
  };

  const [categorias, setCategorias] = useState([]);
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

          setValues(valoresInicias);
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

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
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
