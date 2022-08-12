import logo from './assets/images/logo.svg';
import './assets/css/App2.css'; 

import ButtonSearch from './components/ButtonSearch';
import {Button} from './components/styled/Button.js'; 
import {ButtonISesion} from './components/styled/ButtonISesion.js'; 
import LinkLogo from './components/styled/LinkLogo.js'; 
import Imput from './components/styled/Imput.js'; 
import {ButtonIr} from './components/styled/ButtonIr.js'; 
import LabelSeccion from './components/LabelSeccion'; 
import Seccion from './components/styled/Seccion'; 
import SeccionBorder from './components/styled/SeccionBorder'; 
import SeccionBlanca from './components/styled/SeccionBlanca'; 
import Parrafo from './components/styled/Parrafo'; 
function App() {
  return (
    <div className="App2">
    <header className="App-header"> 
    <div1 className="App-div1">
    <LinkLogo>LOGO FORMASER</LinkLogo>
    <section className="App-section">
    <ButtonISesion color="#00B90B" bordercolor="#00B90B" textcolor="#FFFFFF">Iniciar Sesión</ButtonISesion>
    <Button>Registro</Button>
    </section>
    </div1>
    </header>
    <div2 className="App-div2">
    <div className="App-caja">
    <label className="App-label3">Bienvenido a FORMASER</label>
    <label className="App-label3">Donde la excelencia es nuestro norte y la prioridad eres tú.</label>
    <ButtonSearch></ButtonSearch>
    </div>
    <div className="App-caja-login">
    <div >
    <label className="App-label1">Registrate Gratis</label>
    </div>
    <div>
    <label className="App-label2">!Haz click aquí y adquiere la oportunidad de superarte</label>
    </div>
    <Imput   padding="0.4em" />
    <Imput   padding="0.4em" />

    <ButtonIr>Iniciar Sesión</ButtonIr>
    </div>
    </div2>
    <div2 className="App-div3">
    <label className="App-label4">Descubre qué puedes aprender en FORMASER</label>

    </div2>

    <div2 className="App-div4">

    <LabelSeccion name="Marqueting"></LabelSeccion>
    <LabelSeccion name="Diseño"></LabelSeccion>
    <LabelSeccion name="Programación"></LabelSeccion>
    <LabelSeccion name="Negocios"></LabelSeccion>
    <LabelSeccion name="Ingles"></LabelSeccion>  
    </div2>

    <div2 className="App-div4">
    <LabelSeccion name="Contenido Digital"></LabelSeccion>
    <LabelSeccion name="Fotografia"></LabelSeccion>
    <LabelSeccion name="Excel"></LabelSeccion>
    <LabelSeccion name="Liderazgo"></LabelSeccion>
    <LabelSeccion name="Ilustracion Digital"></LabelSeccion>
    </div2>

<Seccion>

<SeccionBorder  >
Certificados de las mejores universidades y compañias
</SeccionBorder >
 
  



</Seccion>
<SeccionBlanca>
 <Parrafo color="#01013F" size="20px">
 Impartir educación practica, y actualizada a todo individuo nteresado en aprender, 
 otorgando como producto principal cursos con conocimientos descargables y en vivo,
de la mejor calidad para que puedan adquirir una nueva habilidad y monetizarla.
</Parrafo>

 <Parrafo color="#00B90B" size="30px">
 ¡Se parte de nuestra comunidad de estudiantes, es muy simble!

</Parrafo>
    <ButtonISesion color="#01013F" bordercolor="#01013F" textcolor="#FFFFFF">¡Registrate Ahora!</ButtonISesion>

</SeccionBlanca>
 

    </div>
    );
}
export default App;
