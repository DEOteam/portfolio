import { Link } from "react-router-dom"

export function LinksFooter(){
    return(
        <>
        <div className="links-footer">
                    <h2>Contactos</h2>
                    <ul>
                    <li><Link to={'/portfolio/'}>deo.team2024@gmail.com</Link></li>
                    </ul>
                </div>
                <div className="links-footer">
                    <h2>Politicas</h2>
                    <ul>
                         <li><Link to={'/portfolio/'}>Politicas de privacidad</Link></li>
                        <li><Link to={'/portfolio/'}>Notificaciones</Link></li>
                        <li><Link to={'/portfolio/'}>Cookies</Link></li>
                    </ul>
                </div>
                <div className="links-footer">
                    <h2>Compania</h2>
                    <ul>
                        <li><Link to={'/portfolio/'}>Nosotros</Link></li>
                        <li><Link to={'/portfolio/'}>Integrantes</Link></li>
                        <li><Link to={'/portfolio/'}>Documentación</Link></li>
                    </ul>
                </div>
        </>
    )
}

// export function LinksFooter({footerData}){

//     return(
//         <>
//           {Object.keys(footerData).map((sectionKey, index) => (
//             <div key={`section${index}`} className="section-footer">
//               <h2>{footerData[sectionKey].title}</h2>
//                 <ul>
//                   {Object.keys(footerData[sectionKey]).map((linkKey, linkIndex) => {
//                     // Ignoramos la clave "title"
//                     if (linkKey === "title") return null;
//                     const link = footerData[sectionKey][linkKey];
//                     return (
//                       <li key={`link${linkIndex}`}>
//                         <Link to={link.link}>{link.paragraph}</Link>
//                       </li>
//                     );
//                   })}
//                 </ul>
//             </div>
//           ))}
//         </>
//     )
// }