import React, {useState} from "react";

export default function FormContainer(){
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [reContraseña, setReContraseña] = useState("");
  return (
    <section>
      <div className="formText">
        <h2>Unete a nuestro equipo</h2>
        <p>Create una cuenta y unete al equipo de desarrollo en software mas grande de toda Latinoamérica</p>
      </div> 
      <form>
        <div>
          <label htmlFor="nombre">Ingrese su nombre completo: </label>
          <input type='text' id="nombre" name='nombre' autoComplete='off' placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="mail">Ingrese su mail: </label>
          <input type='email' id="mail" name='mail' autoComplete='on' placeholder="Mail" value={mail} onChange={e => setMail(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="password">Ingrese una contraseña: </label>
          <input type='password' id="password" name='password' autoComplete='of' placeholder="Contraseña" value={contraseña} onChange={e => setContraseña(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="repassword">Vuelva a ingresar la contraseña: </label>
          <input type='password' id="repassword" name='repassword' autoComplete='of' placeholder="Contraseña" value={reContraseña} onChange={e => setReContraseña(e.target.value)}></input>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}