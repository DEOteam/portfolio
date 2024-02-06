import { useState,useEffect,useRef} from 'react'

import { LinksFooter } from './links-footer'

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

    //lenguaje
const [menuVisible, setMenuVisible] = useState(false)
const [selectedLanguage, setSelectedLanguage] = useState('Español');

   const MouseMenuView =()=>{
        setMenuVisible(!menuVisible)
   }

   const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setMenuVisible(false); // Cerrar el menú después de seleccionar un idioma
    // Aquí puedes agregar lógica para cambiar el idioma de tu aplicación si es necesario
};


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
                <a className='logo-footer'><img src="./img/deo.png" alt="" />DEO</a>
                <form className='form-footer' onSubmit={handleSubmit}>
                    <input type="email" required placeholder='Correo' value={email} onChange={handleEmailChange}/>
                    <textarea type="text" required placeholder='Asunto' value={subject} onChange={handleSubjectChange}/>
                    <button type="submit">Enviar</button>
                </form>
                <div className='redes-footer'>
                    {redesData.map((red, index) => (
                            <Redes key={index + 1} icon={red.icon} link={red.link} />
                    ))}    
                </div>
            </div>

            <div className='right-footer'>
                    <LinksFooter />
                    {/* <LinksFooter footerData={footerData}/> */}
            </div>
        </section>
        <section className='end-footer'>
                <div className='text-copy'><p>© 2024 DEO. Derechos reservados.</p></div>
                <div className='select-language'>
                    <button onClick={MouseMenuView}>{selectedLanguage}<img src="./icons/flecha-derecha.png" alt="flecha-derecha.png" /></button>
                    <ul className={`language-list ${menuVisible ? 'active' : ''}`}>
                        <li onClick={() => handleLanguageChange('Español')}>Español</li>
                        <hr />
                        <li onClick={() => handleLanguageChange('English')}>English</li>
                    </ul>
                </div>
            </section>
    </footer>
    )
}

// const footerData = {
//     "contactos":{
//         title: 'Contactos',
//         "link1": {
//             paragraph:'deo.team2024@gmail.com',
//             link: '/portfolio'
//         }
//     },
//     "politicas":{
//         title: 'Politicas',
//         "link1": {
//             paragraph:'Politicas de privacidad',
//             link: '/portfolio'
//         },
//         "link2": {
//             paragraph:'Notificaciones',
//             link: '/portfolio'
//         },
//         "link3": {
//             paragraph:'Cookies',
//             link: '/portfolio'
//         }
//     },
//     "compania":{
//         title: 'Compania',
//         "link1": {
//             paragraph:'Nosotros',
//             link: '/portfolio'
//         },
//         "link2": {
//             paragraph:'Integrantes',
//             link: '/portfolio'
//         },
//         "link3": {
//             paragraph:'Documentación',
//             link: '/portfolio'
//         }
//     }
// }