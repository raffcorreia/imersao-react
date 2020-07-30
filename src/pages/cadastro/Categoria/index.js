import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Test']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');
    
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form 
                onSubmit={function handleSubmit(e) {
                    e.preventDefault();
                    setCategorias([
                        ...categorias,
                        nomeDaCategoria
                    ]);
                }}
            >

                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                        value={nomeDaCategoria}
                        onChange={function handlerFunction(e) {
                            setNomeDaCategoria(e.target.value);
                        }}
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, i) => {
                    return (
                        <li key={`${categoria}${i}`}>
                            {categoria}
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