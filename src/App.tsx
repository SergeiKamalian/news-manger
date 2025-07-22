import {
  Background,
  Education,
  Experience,
  Header,
  Main,
  Skills,
  Works,
  Languages,
  Contact,
} from "./ui";

function App() {
  return (
    <div className="w-[100svw] h-[100svh] bg-black">
      <Background />

      <main className="h-[200svh] relative z-10">
        <Header />
        <Main />
        <Works />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}

export default App;
