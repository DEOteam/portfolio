export function Tech({icon, lenguaje, ani}){
    return(
       
        <div className="lenguaje-icon">
            <div className='tech-icon'>
                <img src={icon} alt=""/>
                <div className="lenguaje-text"><span  style={{animation:`teclear 0.3s steps(${ani}),border 0.5s step-end infinite alternate`}}>{lenguaje}</span></div>
            </div>
        </div>
    
    )
}