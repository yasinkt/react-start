import "./tailwind.css"
import {createElement, useState} from "react";
import Button from "./components/Button.js";
import Tab from "./components/Tab.js";

function App() {

    const todos = ['Go to market', 'Buy food', 'Make dinner']

    const [activeTab, setActiveTab] = useState(1);

    /*
    const h1 = createElement('h1',null, 'yasinalt.com');

    const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)));

    const button = createElement(Button, {
        text: "Merhaba buton"
    }, null);

    return createElement("main",
        {
            className: "test",
            id: "main",
        }, h1, ul, button);
     */

    const name = "yasin";

    const searchFunction = () => {
        alert('Arama yapılıyor');
    }

  return (
      <>

          <div style={{padding: 20}}>
              <button  style={{margin: 20}} onClick={()=> setActiveTab(2)}>Aktif tab'ı değiştir</button>
              <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
                  <Tab.Panel title="Profil">1. tab</Tab.Panel>
                  <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
                  <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
              </Tab>
          </div>

          <div style={{padding: 20}}>
              <Button>
                  Buton örneği
              </Button>
              <Button variant="warning">
                  Buton örneği
              </Button>
              <Button variant="danger">
                  Buton örneği
              </Button>
              <Button variant="success">
                  Buton örneği
              </Button>
          </div>
          <h1 tabIndex="3" style={{color: 'red', backgroundColor: 'yellow', justifyContent: 'space-between'}}>yasinalt.com</h1>
          <label htmlFor="search" tabIndex="2" onClick={searchFunction}>Arama</label>
          <input type="text" id="search" tabIndex="1"/>
          <ul>
              {name.toUpperCase()} altıntop
              {todos.map((todo,index) => (
                  <li key={index}>
                      {todo}
                  </li>
              ))}
          </ul>
      </>
  );
}

export default App;
