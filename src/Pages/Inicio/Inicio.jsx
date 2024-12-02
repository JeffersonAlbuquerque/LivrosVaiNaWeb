import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

import s from './inicio.module.scss'

export default function Inicio()
{
    return(
        <section>

            <section className={s.BackgroundMain}>
                <h1 className={s.titleMain}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
            </section>

            <section className={s.container}>

                <p className={s.titleCards}>Por que devo doar?</p>

                <section className={s.cards}>
                    <section className={s.card}>
                        <img src={img1} alt="img1" />
                        <p className={s.desc}>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section className={s.card}>
                        <img src={img2} alt="img2" />
                        <p className={s.desc}>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section className={s.card}>
                        <img src={img3} alt="img3" />
                        <p className={s.desc}>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section className={s.card}>
                        <img src={img4} alt="img4" />
                        <p className={s.desc}>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
            </section>

            </section>
        </section>
    )   
}