import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./css/contactame.css";
import { useNavigate } from "react-router-dom";

const Contactame = () => {
  const navigate=useNavigate()
  const { register, handleSubmit,reset } = useForm();
  const[enviado,setEnviado]=useState(true)
  const submit = async(data) => {
    axios.post("https://ropas-db.onrender.com/email", data);
    setTimeout(() => {
      reset(); 
      setEnviado(false)
    }, 1);
  };
  return (
    <div className="form" style={{background:'rgb(41, 82, 84)'}}>
      <form className="form__content" onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <input type="text" id="nombre" {...register("nombre")} />
          <label className="label"htmlFor="nombre">NOMBRE: </label>
        </div>
        <div className="form-group">
          <input type="text" id="correo" {...register("correo")} />
          <label className="label"htmlFor="correo">CORREO: </label>
        </div>
        <div className="form-group">
          <input type="text" id="telefono" {...register("telefono")} />
          <label className="label" htmlFor="telefono">TELEFONO: </label>
        </div>
        <div className="form-group" >
        <label className="asunto" htmlFor="telefono">ASUNTO: </label>
          <input type="text" id="asunto" {...register("asunto")} />
          
        </div>
        <div className="listButon">
          {
            enviado?<button onClick={submit} type='submit'   className="button">ENVIAR</button>:<h2 className="listoh2">ENVIADO</h2>
          }
            
        </div>
        
      </form>
    </div>
  );
};

export default Contactame;
