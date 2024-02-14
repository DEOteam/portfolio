import { useState} from 'react'

import { useLanguage } from '../../context/LanguageContext';

import './endFooter.css'

const copyDEO = {
    English: "© 2024 DEO. All rights reserved.",
    Español: "© 2024 DEO. Todos Derechos reservados.",
  };

export function EndFooter(){
    const { language } = useLanguage();
    const copy = copyDEO[language];

    //cambia el contexto del idioma
    const { setLanguage } = useLanguage();
    //estado del menu (false=cerrado)
    const [menuVisible, setMenuVisible] = useState(false)
    //estado del idioma inicial en el texto del button (español)
    const [selectedLanguage, setSelectedLanguage] = useState('Español');
    
    //cambia el estado del menu
    const MouseMenuView =()=>{
        setMenuVisible(!menuVisible)
    }

    //funcion al seleccionar un idioma
   const handleLanguageChange = (language) => {
        setLanguage(language)//cambia el idioma
        setSelectedLanguage(language);//funcion que cambia texto del button
        setMenuVisible(false); // cierra el menu despues de seleccionar un idioma
        console.log('Idioma actual:', language);
    };

    return(
        <section className='end-footer'>
                <div className='text-copy'><p>{copy}</p></div>
                <div className='select-language'>
                    <button onClick={MouseMenuView}>{selectedLanguage}<img src="./icons/flecha-derecha.png" alt="flecha-derecha.png" /></button>
                    <ul className={`language-list ${menuVisible ? 'active' : ''}`}>
                        <li onClick={() => handleLanguageChange('Español')}>Español</li>
                        <hr />
                        <li onClick={() => handleLanguageChange('English')}>English</li>
                    </ul>
                </div>
            </section>
    )
}