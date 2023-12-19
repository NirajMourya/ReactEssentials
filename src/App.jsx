import CoreConcepts from "./components/CoreConcepts";
import Header from "./components//header/Header";
import { EXAMPLES } from '../src/data';
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
   
  const [SelectedTopic,setSelectedTopic] = useState();

  function handleSelect(selectedButton)
  {
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>
  if(SelectedTopic)
  {
    tabContent = (<div id="tab-content">
        <h3>{EXAMPLES[SelectedTopic].title}</h3>
        <p>{EXAMPLES[SelectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[SelectedTopic].code}</code>
        </pre>
      </div>)
  }

  return (
    <>
    <Header/>
    <main>
      <CoreConcepts/>
      <section id="examples">  
       <h2>Examples</h2>
       <menu>
          <TabButton isSelected={SelectedTopic === 'components'}  onSelect={() => handleSelect('components')}>
          Components
          </TabButton>
          <TabButton isSelected={SelectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
          JSX
          </TabButton>
          <TabButton isSelected={SelectedTopic === 'props'} onSelect={() => handleSelect('props')}>
          Props
          </TabButton>
          <TabButton isSelected={SelectedTopic === 'state'} onSelect={() => handleSelect('state')}> 
          State
          </TabButton>
       </menu>
       {tabContent}
      </section>
    </main>
  </>
  );
}

export default App;
