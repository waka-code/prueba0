import { async } from '@firebase/util';
import { useRef, useState } from "react";
import './App.css';
import { signup, login ,logout, useAuth } from "./firebaseConfig";

function App() {
  const[cargar, setCargar]=useState(false);
  const currentUSer = useAuth();

const emailRef = useRef();
const passwordRef = useRef();

   const Crear= async ()=>{
    setCargar(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    }catch{
      alert("Error");
    }
    setCargar(false);
  }

  const Cerrar= async ()=>{
    setCargar(true);
    try{
      await logout();
    }catch{
      alert("error")
    }
    setCargar(false);
  }

  const Entrar= async ()=>{
    setCargar(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    }catch{
      alert("Error");
    }
    setCargar(false);
  }


  return (
     <div className="contenedor" >

      <p> Usuario: { currentUSer?.email } </p>
      <div className="form">
        <input ref={emailRef} type="Email" placeholder="email" />
        <br/>
        <input ref={passwordRef} type="password"  placeholder="pass"/>
        </div>
        <div>
        <button disabled={cargar || currentUSer } onClick={Crear} >Sign Up</button>
        <button disabled={cargar || currentUSer } onClick={Entrar} >Log in</button>
        <button  onClick={Cerrar || !currentUSer} >Log out</button>
        </div>
     </div>
    );
}

export default App;
