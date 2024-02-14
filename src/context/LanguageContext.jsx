import { createContext, useContext, useState } from "react";

const LanguageContext = createContext()

export const LanguageProvider = ({children}) =>{
    //estado del idioma inicial
    const [language, setLanguage] = useState ('Español')

    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);