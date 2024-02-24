import { useState,useEffect,useRef} from 'react'

import { LinksFooter } from './links-footer'

import './footer.css'

const redesData = [
    {
        icon: './icons/github.png',
        alt:'Github',
        link: 'https://github.com/DEOteam',
    },
    {
        icon: './icons/x.png',
        alt:'Twitter',
        link: 's',
    },
    {
        icon: './icons/linkedin.png',
        alt:'Linkedin',
        link: 's',
    }
]

const Redes = ({link, icon, alt})=>{
    return(
        <a target='_blank' href={link} aria-label="Redes sociales"><img src={icon} alt={alt} /></a>
    )
}

export function Footer(){
    //form email
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
                <a className='logo-footer'><img src="./img/deo.png" alt="Logo" />DEO</a>
                <form className='form-footer' onSubmit={handleSubmit}>
                    <input type="email" required placeholder='Correo' value={email} onChange={handleEmailChange}/>
                    <textarea type="text" required placeholder='Asunto' value={subject} onChange={handleSubjectChange}/>
                    <button type="submit">Enviar</button>
                </form>
                <div className='redes-footer'>
                    {redesData.map((red, index) => (
                            <Redes key={index + 1} icon={red.icon} link={red.link} alt={red.alt}/>
                    ))}    
                </div>
            </div>

            <div className='right-footer'>
                    <LinksFooter />
                    {/* <LinksFooter footerData={footerData}/> */}
            </div>
        </section>
    </footer>
    )
}
