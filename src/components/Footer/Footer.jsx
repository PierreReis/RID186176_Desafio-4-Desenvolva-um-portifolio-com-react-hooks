import './Footer.css'
// ASSETS
import GithubLogo from '../../assets/logo-github.svg'
import LinkedinLogo from '../../assets/logo-linkedin.svg'
import FigmaLogo from '../../assets/logo-figma.svg'

function Footer () {
    return (
        <footer className='d-flex'>
            <div className='d-flex info-contact'>
                <div>
                    <h4>Meu contato:</h4>
                    <h4>75 999483379</h4>
                </div>
                <div>
                    <h4>Email:</h4>
                    <h4>pierre.rdo17@gmail.com</h4>
                </div>
            </div>
            <div className='d-flex networks'>
                <a href="https://github.com/PierreReis" target='_blank'><img src={GithubLogo}/></a>
                <a href="https://www.linkedin.com/" target='_blank'><img src={LinkedinLogo}/></a>
                <a href="https://www.figma.com/files/team/1414241835394889268/user/1414241831366874920?fuid=1414241831366874920" target='_blank'><img src={FigmaLogo}/></a>
            </div>
        </footer>
    )
}

export default Footer