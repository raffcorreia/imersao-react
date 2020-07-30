import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const valoresInicias = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState(['Test']);
    const [values, setValues] = useState(valoresInicias);
    
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(e) {
        setValue(
            e.target.getAttribute('name'), 
            e.target.value
        );
    }

    // function handleChange(e) {
    //     const { getAttribute, value } = e.target;
    //     setValue(
    //         getAttribute('name'), 
    //         value
    //     );
    // }

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
                <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            name="nome"
                            value={values.nome}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div>


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