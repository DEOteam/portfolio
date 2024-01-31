import { useState, useEffect } from 'react'

import './proyects.css'

export function Proyect({proyects}){
    const [tabs, setTabs] = useState(0)

    
    const handleClick = (index) =>{
        setTabs(index)
    }

    const renderProjects = () => {
        
        const projectsToShow = proyects.slice(tabs * 4, (tabs + 1) * 4);
    
        return projectsToShow.map((project) => (
          <article key={project.id} className="proyect-card">
            <div className='img-proyect'>
                <img className='imagen-proyect' src={project.thumbnail} alt="" />
                <div className='proyect-skils'><img src={project.skill1} alt="" /><img src={project.skill2} alt="" /><img src={project.skill3} alt="" /></div>
            </div>

            <div className='proyect-info'>
                <h2>{project.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis sit facilis laboriosam quisquam, nulla maxime delectus excepturi eius quidem quia culpa vel consequatur nostrum, enim inventore quo ab. Fuga.</p>
            </div>
          </article>
        ));
    };
    

    return(
        <section className="proyectos" id='proyectos'>

            <div className='tabs-content'>
            <h1>Proyectos</h1>
                <ul className='tabs'>
                    <li className={`tabs-item ${tabs === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>Página 1</li>
                    <li className={`tabs-item ${tabs === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Página 2</li>
                    
                </ul>
                <div className='proyect-position'>
                    <div className='proyects-content'>
                        {renderProjects()}
                    </div>
                </div>
            </div>
        </section>
    )
}