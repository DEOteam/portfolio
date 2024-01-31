import './home.css'

export function Home(){
    return(
        <section className='banner' id='home'>
            <div className='banner-content'>

                <div className='text-info'>
                    <div className='siglas'>
                        <div className='sigla row1'>
                            <h1>D</h1>
                            <p>- Digital</p>
                        </div>
                        <div className='sigla row2'>
                            <h1>E</h1>
                            <p>- Engine</p>
                        </div>
                        <div className='sigla row3'>
                            <h1>O</h1>
                            <p>- Organization</p>
                        </div>
                    </div>
                    <span>¿Qué es DEO? Somos una micro empresa compuesta por un equipo 2 personas que colaboran para el desarrollo y produccion de software ademas la resolución de problemas.</span>
                </div>

                <img className='leones' src='img/leones.png' alt="" />
            </div>
        </section>
    )
}