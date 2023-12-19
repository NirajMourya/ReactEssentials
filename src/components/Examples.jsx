import { EXAMPLES } from '../data';
import TabButton from "../components/TabButton";
import { useState } from "react";
import Section from './Section';
import Tabs from './Tabs';

export default function Examples()
{
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

    return (<Section id="examples" title='Examples'>  
       <Tabs ButtonsContainer='menu' buttons = {<><TabButton isSelected={SelectedTopic === 'components'}  onSelect={() => handleSelect('components')}>
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
          </TabButton></>}>{tabContent}</Tabs>
      </Section>);
}