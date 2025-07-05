import './App.scss'
import mdToHtml from "../../src/index";
import { useEffect, useState } from 'react';

function App() {
  const [md, setMd] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setMd(event.target.value);
  }

  useEffect(()=>{
    const html = mdToHtml(md);
    const preview_box = document.getElementById("preview");
    if(preview_box){
      preview_box.innerHTML = html;
    }
  },[md]);

  return (
    <main>
      <section className='editor'>
        <textarea onChange={handleChange} placeholder='Type Markdown...'></textarea>
      </section>
      <section className='preview'>
        <div id='preview'></div>
      </section>
    </main>
  )
}

export default App
