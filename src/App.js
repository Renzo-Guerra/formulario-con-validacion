import FormIntro from "./components/formIntro";
import Formulario from "./components/formulario";

function App() {
  return (
    <section className="contenedorTodo">
      <div className="contenedorFormulario">
        <FormIntro />
        <Formulario />
      </div>
    </section>
  );
}

export default App;