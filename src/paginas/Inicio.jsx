import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/inicio.css'
import yo from '../yo/yo-mano.png'
const Inicio = () => {
    const [lenguajes,setLenguajes]=useState({})
    
  useEffect(()=>{
    axios.get('https://ropas-db.onrender.com/portafolio/lenguaje')
    .then(res=>setLenguajes(res.data))
  },[])
 
    return (
      <div className='Inicio' >
        <div className="sobreMi" >
        <Container style={{width:'',textAlign: 'center'}}>
        <Row  style={{width:'100%'}}>
        <Col  className='info'style={{textAlign: 'center',margin:'40px auto 40px auto'}}lg='8'>
        ¡Hola! Soy Edward, un entusiasta desarrollador Full Stack Junior con un deseo apasionado por crear soluciones web completas y funcionales. Mi enfoque está en aprender y crecer constantemente, mientras entrego experiencias de usuario atractivas respaldadas por una sólida base técnica y creatividad.   <br></br>
        <br></br>
        <b style={{color: 'aqua', fontSize: 'larger', fontWeight: 'bold', textDecoration: 'underline'}}>FRONT-END</b>
        <br></br>
        En el área del front-end, disfruto implementando interfaces de usuario atractivas y responsivas. He trabajado con tecnologías fundamentales como HTML, CSS y JavaScript para construir experiencias visuales intuitivas y fáciles de usar. Siempre me esfuerzo por convertir conceptos y diseños en interfaces interactivas que ofrezcan un impacto significativo. <br></br>
        <br></br>
        <b style={{color: 'aqua', fontSize: 'larger', fontWeight: 'bold', textDecoration: 'underline'}}>BACK-END:</b>
        <br></br>
        En el back-end, he tenido la oportunidad de crear servidores sólidos y eficientes. Mi experiencia incluye trabajar con tecnologías como Node.js para construir la lógica del servidor, implementar APIs y gestionar bases de datos. La seguridad y el rendimiento son mis áreas de enfoque mientras desarrollo la parte trasera de aplicaciones web. </Col>
        <Col xs lg="2" style={{textAlign: 'center',margin:'40px auto 250px auto'}}><img className='imgP'src={yo} alt="" /></Col>
      </Row>
      </Container>
        </div>
        <div className='slider' style={{ position: 'fixed', bottom: '10px' }}>
          <div className="slide-track">
           {
            lenguajes.map?.(sera=>(
              <div className='lenguajes'>
                <img src={sera.imagen} alt="" />
                <div>{sera.name}</div>
              </div>
              
            ))
           }
          </div>
        </div>
      </div>
        
    );
};

export default Inicio;