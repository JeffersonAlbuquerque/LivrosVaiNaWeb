import s from './footer.module.scss'
import face from '../../assets/fb1.png'
import tt from '../../assets/tt2.png'
import yt from '../../assets/yt3.png'
import linkedin from '../../assets/link4.png'
import ig from '../../assets/ig5.png'

export default function()
{
    return(
        <section>
            <footer>
                <section className={s.contact}>

                    <p className={s.tel}>4002-8922</p>

                    <section className={s.socialMedia}>
                        <a href="#"><img src={face} alt="redesocial" /></a>
                        <a href="#"><img src={tt} alt="redesocial" /></a>
                        <a href="#"><img src={yt} alt="redesocial" /></a>
                        <a href="#"><img src={linkedin} alt="redesocial" /></a>
                        <a href="#"><img src={ig} alt="redesocial" /></a>
                    </section>
                </section>
                <section className={s.creditos}>
                    <p className={s.name} >Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
                </section>
            </footer>
        </section>
    )
}