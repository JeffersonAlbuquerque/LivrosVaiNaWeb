import Book from '../../assets/Book.png'
import s from './QueroDoar.module.scss'
export default function QueroDoar()
{
    return(
        <main className={s.Main}>
            
            <p className={s.titleMain}>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            
            <section className={s.formulario}>
                <section className={s.title}>
                    <img src={Book} alt="" />
                    <p>Informações do Livro</p>
                </section>
                <form className={s.myForm}>
                    <input className={s.info} type="text" placeholder='Título'/>
                    <input className={s.info} type="text" placeholder='Categoria'/>
                    <input className={s.info} type="text" placeholder='Autor'/>
                    <input className={s.info} type="text" placeholder='Link da Imagem'/>
                </form>
                <button className={s.btnDoar}>Doar</button>
            </section>
        </main>
    )
}