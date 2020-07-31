import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresInicias = {
        nome: '',
        descricao: '',
        cor: '#0000ff'
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresInicias);
    
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValue(
            name, 
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form 
                onSubmit={function handleSubmit(e) {
                    e.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
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
                    type="text"
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

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, i) => {
                    return (
                        <li key={`${categoria}${i}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;