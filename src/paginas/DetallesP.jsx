import React, { useEffect, useState } from "react";
import "./css/detallep.css";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
const DetallesP = () => {
  const [img, setImg] = useState({});
  const { id } = useParams();
  const [linkE, setLinkE] = useState({});
  const[linkGit,setLinkGit]=useState({})
  useEffect(() => {
    axios
      .get(`https://ropas-db.onrender.com/portafolio/proyectos/${id}`)
      .then((res) => setImg(res.data));
    if (id == 1) {
      setLinkE("https://soft-arithmetic-b3676b.netlify.app");
      setLinkGit('https://github.com/edwardyq67/e-comerRopa')
    }if(id==2){
      setLinkE('https://ornate-longma-e63e02.netlify.app/');
      setLinkGit('https://github.com/edwardyq67/clima31')
    }
    if(id==3){
      setLinkE('https://luminous-madeleine-13484b.netlify.app/');
      setLinkGit('https://github.com/edwardyq67/trabajoBformuralio')
    }
    if(id==4){
      setLinkE('https://ornate-daffodil-d31ad9.netlify.app/');
      setLinkGit('https://github.com/edwardyq67/trabajo5')
    }
    if(id==5){
      setLinkE('https://aquamarine-pasca-43c6f1.netlify.app/');
      setLinkGit('https://github.com/edwardyq67/rick-repaso')
    }
  }, [id]);

  return (
    <div className="total">
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <a href={linkE} target="_blank">
              <img className="img" src={img.imgProyectos?.[0].url} alt="" />
            </a>
          </Col>
          <Col lg="4" className="descripcion">
            <h2>{img.titulo}</h2>
            <p>{img.descripcion}</p>
            <a className='iLink'href={linkGit} target="_blank"><i className="fa-brands fa-github"></i></a>
            <a className='iLink' href={linkE} target="_blank"><i className="fa-solid fa-eye"></i></a>
            
            
          </Col>
        </Row>
      </Container>
      <div className="carrusel">
        <h2>LENGUAJES USADOS PARA LA CREACION</h2>
        <div className="carrusel_items">
          {img.lenguajes?.map((lengua) => (
            <div key={lengua.id} className="carrusel_item">
              <img className="imgLe" src={lengua.imagen} alt="" />
              <div className="tituloh2">
                <h3>{lengua.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetallesP;
