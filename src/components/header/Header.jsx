import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Inicio from '../../Pages/Inicio/Inicio'
import LivrosDoados from '../../Pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../Pages/queroDoar/QueroDoar'

//images logo abaixo
import logoLivro from '../../assets/logoHeader.png'
import lupa from '../../assets/lupa.png'

//css logo abaixo
import s from './header.module.scss'

export default function Header()
{
    return(
        <BrowserRouter>
            <header className={s.header}>
                <section className={s.logoHeader}>
                    <img src={logoLivro} alt=""/>
                    <h1>Livros Vai Na Web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/'>Início</Link></li>
                        <li><Link className={s.link} to='/livrosdoados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to='/querodoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                
                <section className={s.barraDeBusca}>
                    <input type="search" name="" id="" placeholder='O que você procura ?' />
                    <button>
                        <img src={lupa} alt="" />
                    </button>
            </section>
            
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livrosdoados' element={<LivrosDoados/>}/>
                <Route path='/querodoar' element={<QueroDoar/>}/>
            </Routes>

        </BrowserRouter>
    )
}