import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './mainProgreso.css'

const MainProgreso = ({ data }) => {
  const [dataRetos, setDataRetos] = useState(null);
  
  useEffect(() => {
    setDataRetos(data);
  }, [data]);

  const handleButton = async(id)=>{
    try {
      const response = await axios.get(`http://localhost:8087/retos/${id}/solucion`, {
        responseType: 'blob',
      });

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'solucion.zip');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error al descargar la solución:', error);
    }
  }

  return (
    <>
      <ul className='ul-container'>
        {dataRetos &&
          dataRetos.map((reto, index) => (
            <li key={index} className='ul-container__li'>
              <div className='item-li'>{reto.id}</div>
              <div className='item-li'>{reto.empresa.nombre}</div>
              <div className='item-li'>{reto.estado ? 'activo':'inactivo'}</div>
              <div className='item-button'><button  onClick={()=>handleButton(reto.id)}>Descargar Solucion</button></div>
              </li>
          ))}
      </ul>
    </>
  );
};

export default MainProgreso;