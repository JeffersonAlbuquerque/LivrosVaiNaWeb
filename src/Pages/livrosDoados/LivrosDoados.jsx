import s from './livrosDoados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function LivrosDoados() {
    const [livros, setLivros] = useState([])

    const puxarLivros = async () => {
        try {
            const resposta = await axios.get("https://api-livros-vai-na-web-u13s.onrender.com/livros")
            setLivros(resposta.data)
        } catch (error) {
            console.error("Erro ao buscar livros:", error)
        }
    }

    useEffect(() => {
        puxarLivros()
    }, [])

    return (
        <main>
            <h2 className={s.title}>Livros Doados</h2>
            <section className={s.cardLivrosDoados}>
                {livros.length > 0 ? (
                    livros.map((item) => (
                        <section key={item.id} className={s.cardLivro}>
                            <img src={item.image_url} alt={item.titulo} />
                            <div>
                                <h3>{item.titulo}</h3>   
                                <p>{item.autor}</p>
                                <p>{item.genero}</p>
                            </div>
                        </section>
                    ))
                ) : (
                    <p>Carregando livros...</p>
                )}
            </section>
        </main>
    )
}
