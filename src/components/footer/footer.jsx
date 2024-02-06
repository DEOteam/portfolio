import { useState } from 'react'

import './footer.css'

const redesData = [
    {
        icon: './icons/github.png',
        link: 'https://github.com/DEOteam',
    },
    {
        icon: './icons/x.png',
        link: 's',
    },
    {
        icon: './icons/linkedin.png',
        link: 's',
    }
]

const Redes = ({link, icon})=>{
    return(
        <a target='_blank' href={link}><img src={icon} alt="" /></a>
    )
}

export function Footer(){

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubjectChange = (e) => {
      setSubject(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes manejar la lógica de envío del formulario
      console.log('Correo:', email);
      console.log('Asunto:', subject);
    };

    return(
    <footer className="footer" id="footer">
        <section className='content-footer'>
            <div className='left-footer'>
                <a className='logo-footer'><img src="./img/deo.png" alt="" />DEO</a>
                <form className='form-footer' onSubmit={handleSubmit}>
                    <input type="email" required placeholder='Correo' value={email} onChange={handleEmailChange}/>
                    <input type="text" required placeholder='Asunto' value={subject} onChange={handleSubjectChange}/>
                    <button type="submit">Enviar</button>
                </form>
                <div className='redes-footer'>
                    {redesData.map((red, index) => (
                            <Redes key={index + 1} icon={red.icon} link={red.link} />
                    ))}    
                </div>
            </div>

            <div className='right-footer'>
                <div className="links-footer">
                    <h2>Contactos</h2>
                    <ul>
                    <li>deo.team2024@gmail.com</li>
                    <li></li>
                    <li></li>
                    </ul>
                </div>
                <div className="links-footer">
                    <h2>Politicas</h2>
                    <ul>
                         <li>Politicas de privacidad</li>
                        <li>Notificaciones</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div className="links-footer">
                    <h2>Compania</h2>
                    <ul>
                        <li>Nosotros</li>
                        <li>Integrantes</li>
                        <li>Documentación</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className='end-footer'>
                <div className='text-copy'><p>© 2024 DEO. Derechos reservados.</p></div>
                <div className='select-language'>
                    <button>Español <img src="./icons/flecha-derecha.png" alt="flecha-derecha.png" /></button>
                    <div className='language-list'>

                    </div>
                </div>
            </section>
    </footer>
    )
}