// HOOKS
import { useState, useEffect } from 'react'

// CSS
import './Home.css'

// COMPONENTS
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

// ASSETS
import LandingPage from '../assets/projeto-landing-page.png'
import LandingPage2 from '../assets/projeto-landing-page-2.png'
import Portfolio from '../assets/projeto-portfolio.png'
import PortfolioEmpresarial from '../assets/projeto-portfolio-2.png'
import Dashboard from '../assets/projeto-dashboard.png'
import BlogResponsivo from '../assets/projeto-blog-responsivo.png'
import Like from '../assets/like.svg'
import LikedFilled from '../assets/liked-filled.svg'

function Home() {
    const [isVisible, setIsVisible] = useState(false)
    const view = () => {setIsVisible(!isVisible)}

    const enjoyId = ['1','2','3','4','5','6']
    const [favProjects, setFavProject] = useState([])
    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProject(savedFavProjects)
        }
    },[])

    return (
        <>
            <Header/>
            <div id='technologies' className='presentation-container d-flex'>
                <h1>Pierre Reis de Oliveira</h1>
                <p className="presentation">Estudo programação a mais de dois anos com foco no desenvolvimento web. Conhecimentos em linguagem de marcação: HTML5, estilização: CSS3, programação: JavaScript, TypeScript, e Python. Bibliotecas: React.</p>
                <div className='button-container'>
                    <a href="https://github.com/PierreReis" target='_blank'><Button>Saber mais</Button></a>
                </div>
            </div>
            <div id='projects-area' className='session-title'>
                <h1>Projetos</h1>
            </div>
            <div className='projects'>
                <div className='card'>
                    <div className='banner'>
                        <img src={LandingPage}/>
                    </div>
                    <h2>PROJETO LANDING PAGE</h2>
                    <p>Landing page empresarial com sessão de vídeo, comentários e formulário de contato.</p>
                    <div className='action'>
                        <div><a href="https://teste-landingpage-escola-dnc.netlify.app/" target='_blank'><Button>Clique aqui</Button></a></div>
                        <div className='like'>
                            <button onClick={() => handleSavedProjects(enjoyId[0])}><img src={favProjects.includes(enjoyId[0]) ? LikedFilled : Like}/></button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='banner'>
                        <img src={Portfolio}/>
                    </div>
                    <h2>PROJETO PORTFOLIO</h2>
                    <p>Portfolio profissional com elementos organizados em grid layout.</p>
                    <div className='action'>
                        <div><a href="https://dynamic-gnome-815404.netlify.app/" target='_blank'><Button>Clique aqui</Button></a></div>
                        <div className='like'>
                            <button onClick={() => handleSavedProjects(enjoyId[1])}><img src={favProjects.includes(enjoyId[1]) ? LikedFilled : Like}/></button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='banner'>
                        <img src={PortfolioEmpresarial}/>
                    </div>
                    <h2>PROJETO PORTFOLIO EMPRESARIAL</h2>
                    <p>Portfolio empresarial feito em react com SPA, componentes compartilhados, e context api para dupla possibilidade de idioma no site. Sessão de projetos interativa, e formulário de contato com validação de dados.</p>
                    <div className='action'>
                        <div><a href="https://dnc-arq-pierre-6lmo9x8nc-pierres-projects-2e8bcb74.vercel.app/" target='_blank'><Button>Clique aqui</Button></a></div>
                        <div className='like'>
                            <button onClick={() => handleSavedProjects(enjoyId[2])}><img src={favProjects.includes(enjoyId[2]) ? LikedFilled : Like}/></button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='banner'>
                        <img src={Dashboard}/>
                    </div>
                    <h2>PROJETO DASHBOARD</h2>
                    <p>Projeto com tela para login e proteção de rotas, tela de cadastro e comunicação de dados via API. Sistema de tema escuro e gráfico de exibição de dados de performance.</p>
                    <div className='action'>
                        <div><a href="https://dnc-sales-dashboard-pro.vercel.app/" target='_blank'><Button>Clique aqui</Button></a></div>
                        <div className='like'>
                            <button onClick={() => handleSavedProjects(enjoyId[3])}><img src={favProjects.includes(enjoyId[3]) ? LikedFilled : Like}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isVisible ? 'projects extra-projects' : 'invisible-projects'}`}>
                <div className='card'>
                    <div className='banner'>
                        <img src={LandingPage2}/>
                    </div>
                    <h2>PROJETO LANDING PAGE 2</h2>
                    <p>Landing page empresarial com elementos em grid layout e sessão de formulário.</p>
                    <div className='action'>
                        <div><a href="https://desafio-landing-page.netlify.app/" target='_blank'><Button>Clique aqui</Button></a></div>
                        <div className='like'>
                            <button onClick={() => handleSavedProjects(enjoyId[4])}><img src={favProjects.includes(enjoyId[4]) ? LikedFilled : Like}/></button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='banner'>
                        <img src={BlogResponsivo}/>
                    </div>
                    <h2>PROJETO BLOG RESPONSIVO</h2>
                    <p>Projeto de blog responsivo com versão completamente adaptada para mobile.</p>
                    <div className='action'>
                        <div><a href="https://desafio-2-blog-responsivo.netlify.app/" target='_blank'><Button>Clique aqui</Button></a></div>
                        <div className='like'>
                            <button onClick={() => handleSavedProjects(enjoyId[5])}><img src={favProjects.includes(enjoyId[5]) ? LikedFilled : Like}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="see-more-container">
                <button onClick={view}>
                    <h2 className='see-more'>{`${isVisible ? 'Ver menos' : 'Ver mais'}`}</h2>
                </button>
            </div>
            <div id='about-me' className='session-title'>
                <h1>Sobre mim</h1>
            </div>
            <div className="grid-container">
                <div className="grid-item-1"><h3>2022</h3></div>
                <div className="grid-item-2"><h3>2023</h3></div>
                <div className="grid-item-3"><h3>2024</h3></div>
                <div className="grid-item-4"><h3>2025</h3></div>
                <div className="grid-item-5 line">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="grid-item-6"><p className='info-text'>Ano em que descobri o mundo da programação e comecei a pesquisar sobre temas referentes a área e buscar métodos para estudar e aprender a profissão.</p></div>
                <div className="grid-item-7"><p className='info-text'>Início dos estudos em lógica de programação com algorítimos em Portugol. Posteriormente, no mesmo ano, iniciei na linguagem Python, onde aprendi a criar e manipular funções, variáveis, estruturas condicionais, laços de repetição e tratamento de erros.</p></div>
                <div className="grid-item-8"><p className='info-text'>Despertei um grande interesse na área de desenvolvimento web e comecei a estudar linguagem de marcação HTML5, estilização CSS3, e programação com JavaScript.</p></div>
                <div className="grid-item-9"><p className='info-text'>Concluindo curso de desenvolvedor front-end pela escola DNC com conhecimentos aperfeiçoados em HTML, CSS, JavaScript, TypeScript, e React.</p></div>
            </div>
            <Footer/>
        </>
    )
}
export default Home