import React, { useEffect, useState } from "react";
import DetallesP from "./DetallesP";
import axios from "axios";
import "./css/proyecto.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
const Proyectos = () => {
  const [emgProyect, setImgProyect] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("https://ropas-db.onrender.com/portafolio/proyectos")
      .then((res) => setImgProyect(res.data));
  }, []);
  
  return (
    <div>
      <ListGroup className="cajatotalProyect" >
        {emgProyect.map?.((imagenes) => (
          <ListGroup.Item style={{background:'rgb(35, 65, 65)',border: 'none'}}onClick={()=>navigate(`/detallesP/${imagenes.imgProyectos[0]?.id}`)} className="cajaProyecto">
            <h4 style={{ marginTop:'10px',marginBottom:'10px',color:'aqua',textAlign: "center" }}>{imagenes.titulo}</h4>
            <img
              className="imgProyecto"
              src={imagenes.imgProyectos[0]?.url}
              alt=""
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      
    </div>
  );
};

export default Proyectos;
