import '../estilos/componentes/paginas/Encomiendas.css'
import React from "react";
import { NavLink } from "react-router-dom";

const Almacenaje = (props)=> {
    return (
        <div className="holder"> 

<div className='navTop'>
    <nav>
            <div className='navTop'>
        <ul className="holder-top">
            <li><NavLink to="/encomiendas" className={({isActive}) => isActive ? "activo" : undefined } >encomiendas</NavLink></li>
            <li><NavLink to="/almacenaje" className={({isActive}) => isActive ? "activo" : undefined } >almacenaje</NavLink></li>
            <li><NavLink to="/carga" className={({isActive}) => isActive ? "activo" : undefined } >carga completa</NavLink></li>
            <li><NavLink to="/pagoReembolso" className={({isActive}) => isActive ? "activo" : undefined } >pago contra reembolso</NavLink></li>
            <li><NavLink to="/serviciosAMedida" className={({isActive}) => isActive ? "activo" : undefined } >servicios a medida</NavLink></li>
            <li><NavLink to="/congelados" className={({isActive}) => isActive ? "activo" : undefined } >congelados</NavLink></li>
        </ul>
        </div></nav>
    </div>
    <div>
        <h2 className='tituloEncomiendas'>almacenaje</h2>  
      

            
             <div className="encomiendasCaja">    
                
                 <p>CARGO EXPRES  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. 
                 </p>
             
             <img className='foto_caja' src="images/servicios/almacenaje.jpg" alt="Almacenaje"/>
             </div>

     
     </div>

     </div>




    );
}

export default Almacenaje;