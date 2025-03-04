import LinkedinLogo from '../../assets/logo-linkedin.svg'
import GithubLogo from '../../assets/logo-github.svg'
import './Header.css'

function Header () {
    return (
        <header className='d-flex'>
            <div>
                <nav>
                    <ul className="d-flex">
                        <a href="#projects-area">
                            <li>Projetos</li>
                        </a>
                        <a href="#technologies">
                            <li>Tecnologias</li>
                        </a>
                        <a href="#about-me">
                            <li>Sobre mim</li>
                        </a>
                    </ul>
                </nav>
            </div>
            <div className="d-flex contacts">
                <a href="https://github.com/PierreReis" target='_blank'><img src={GithubLogo}/></a>
                <a href="https://www.linkedin.com/" target='_blank'><img src={LinkedinLogo}/></a>
            </div>
        </header>
    )
}
export default Header