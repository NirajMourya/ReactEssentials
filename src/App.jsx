
import CoreConcept from "./components/CoreConcept";
import Header from "./components//header/Header";
import { CORE_CONCEPTS } from '../src/data';

function App() {
  return (
    <div>
    <Header/>
    <main>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {
          CORE_CONCEPTS.map((conceptItem) => (
             <CoreConcept key={conceptItem.title} {...conceptItem}  />
          ))
        }
      </ul>
      </section>
    </main>
  </div>
  );
}

export default App;
