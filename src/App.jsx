import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext.jsx'

import { Header } from "./components/header/header.jsx"
import { Home } from './components/home/home.jsx'
import { Info } from './components/info/info.jsx'
import { Proyect } from './components/proyects/proyects.jsx'
import { Footer } from './components/footer/footer.jsx'
import { EndFooter } from './components/footer/endFooter.jsx'

import {curriculum} from './api/curriculum.json'
import {proyects} from './api/proyects.json'

import './index.css'

function App() {

  return (
    <Router>

      <LanguageProvider>
        <Header/>
        <Home/>
          <main className='informacion'>
            <Info curriculum={curriculum}/>
          </main>
        <Proyect proyects={proyects}/>
        <Footer/>
        <EndFooter/>
      </LanguageProvider>
      
    </Router>
  )
}

export default App
