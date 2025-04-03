import Book from '../../assets/Book.png'
import s from './QueroDoar.module.scss'
import axios from 'axios'
import { useState } from 'react'

export default function QueroDoar() {
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => setTitulo(e.target.value);
    const capturaCategoria = (e) => setCategoria(e.target.value);
    const capturaAutor = (e) => setAutor(e.target.value);
    const capturaImg = (e) => setImage_url(e.target.value);

    const envioDados = async () => {
        try {
            const dadosParaEnviar = { titulo, categoria, autor, image_url };
            await axios.post("https://api-livros-vai-na-web-u13s.onrender.com/doar", dadosParaEnviar);
            alert("Livro doado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Erro ao doar o livro.");
        }
    }

    return (
        <main className={s.Main}>
            <p className={s.titleMain}>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <section className={s.formulario}>
                <section className={s.title}>
                    <img src={Book} alt="Ícone de livro" />
                    <p>Informações do Livro</p>
                </section>
                <form className={s.myForm} onSubmit={(e) => e.preventDefault()}>
                    <input className={s.info} type="text" placeholder='Título' onChange={capturaTitulo} required />
                    <input className={s.info} type="text" placeholder='Categoria' onChange={capturaCategoria} required />
                    <input className={s.info} type="text" placeholder='Autor' onChange={capturaAutor} required />
                    <input className={s.info} type="url" placeholder='Link da Imagem' onChange={capturaImg} required />
                </form>
                <button className={s.btnDoar} onClick={envioDados}>Doar</button>
            </section>
        </main>
    )
}
