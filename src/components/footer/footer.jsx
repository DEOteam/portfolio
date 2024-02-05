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

    return(
    <footer className="footer" id="footer">
        <div className='content-footer'>
            <div className='header-footer'>
                <div className='logo-footer'><img src="./img/deo.png" alt="" /></div>
                <div className='redes-footer'>
                {redesData.map((red, index) => (
                            <Redes key={index + 1} icon={red.icon} link={red.link} />
                ))}    
                </div>
            </div>
        </div>
    </footer>
    )
}