import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from "../../context/DataProvider"
import { useParams } from 'react-router-dom'
import { ProductoItem } from "./productoItem";

export const ProductoDetalles = () => {
  const value = useContext(DataContext)
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl] = useState(0);
  const [images, setImages] = useState('');
  const params = useParams();
  let item = 0;


  useEffect(() =>{
    productos.forEach(producto => {
      item = 0;
      if(producto.id === parseInt(params.id)){      
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  useEffect(() =>{
    const values= `${detalle.img1}${url}${detalle.img2}`
    setImages(values);
  },[url, params.id])
  
  const handleInput = e =>{
    const number = e.target.value.toString().padStart(2, '01');
    setUrl(number)
  }
  if(detalle.length < 1) return null;

    return (
        <>
        {
          <div className='detalles'>
           <h2>{detalle.title}</h2>
           <p className='price'> Precio: $ {detalle.price}</p>
           <div className='grid'>
             <p className="nuevo">Nuevo</p>
             <div className='size'>
               <select placeholder='Tamaño'>
                 <option value="1">1</option>
                 <option value="1">2</option>
                 <option value="1">3</option>
                 <option value="1">4</option>
                 <option value="1">5</option>
                 <option value="1">6</option>
                 <option value="1">7</option>
                 <option value="1">8</option>
                 <option value="1">9</option>
               </select>
               <p>Tamaño</p>
             </div>
             <button onClick={()=>addCarrito(detalle.id) }>Añadir al carrito</button>
           </div>
           
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
          }
           <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
           <div className='description'>
             <p><b>Descripcion: </b>Nike Air Zoom Pegasus es una zapatilla de Running para entrenamiento diario,
                  aunque no desmerece si se la lleva a alguna carrera, gracias a su configuración.
                  Su bajo peso de 280gr en el acabado de hombre y 235gr en el de mujer, en proporción a la amortiguación que gasta, así lo permite.
                  Los ritmos a los que utilizarla serían los propios relacionados con los rodajes,
                  pero también es polivalente para utilizarla en entrenamientos fraccionados sin problemas.
                   La amortiguación, precisamente, está enfocada a corredores y corredoras que tengan una pisada neutra.
                   Está basada en una mediasuela construida con material ligero y reactivo como es React Foam y, para rematar al conjunto,
                   se le inserta una cámara de aire, justo bajo los metatarsos, que a esas propiedades le añade una mejor impulsión.
                   Es una cápsula de Zoom Air nueva, con mayor volumen y presurizada a 20 PSI en el caso de la zapa de hombre y 15 PSI en la de mujer.
                   Las alturas de la mediasuela son de 24mm en el talón y 14mm en el antepie, para un drop de 10mm.
                   La suela es la parte más continuista de este modelo, con un gran surco longitudinal para guiar la pisada y unos tacos donde la mayoría tienen forma cuadrada o rectangular para una buena tracción.
                   Por arriba, el upper es limpio de materiales de refuerzo, pero muy ligero y transpirable.
                   Pegasus es una de las mejores zapatillas de entrenamiento diario de la historia del Running y esta versión 37 es quizás la que tenga un aspecto más estilizado (Pegasus Turbo aparte),
                   y aunque sea muy ligera y polivalente, sin duda que para competir sea mejor una zapa voladora, o si se utiliza también para entrenamientos fraccionados, una zapa mixta, por ejemplo.
              </p>
           </div>
           <br/><br/><br/><br/><br/>
          </div> 
        }
        <h2 className='relacionados'>Productos Relacionados</h2>
        <div className='productos'>
        {productos.map((producto) =>{
          if((item < 4) && (detalle.category === producto.category)){
          item++;
            return  <ProductoItem 
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
            />
           }
          })
          }    
        </div>
      </>
    )
}
