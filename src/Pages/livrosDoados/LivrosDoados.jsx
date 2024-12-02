import s from './livrosDoados.module.scss'
import livro from '../../assets/livro1.png'

export default function LivrosDoados()
{
    return(
        <main>
            <h2 className={s.title}>Livros Doados</h2>
            <section className={s.cardLivrosDoados}>
                <section className={s.cardLivro}>
                    <img src={livro} alt="imgLivro"/>
                    <p>O protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </section>
            </section>
        </main>
    )
}