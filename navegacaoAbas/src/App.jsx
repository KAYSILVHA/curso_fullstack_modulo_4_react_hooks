import { useState } from 'react'

import s from "./App.module.css"

import LogoReact from "../public/react-logo.png"

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <div className={s.content}>
          <h4>Conteúdo da Primeira Aba</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>;
      case 'profile':
        return <div className={s.content}><h4>Conteúdo da Segunda Aba</h4></div>;
      case 'contact':
        return <div className={s.content}>
          <h4>Conteúdo da Terceira Aba</h4>
          <p>
            <ol>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ol>

          </p>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className={s.container}>

      <div className={s.divText}>
        <img src={LogoReact} alt="React" />
        <div className={s.text}>
          <h2>React</h2>
          <p>Navegação entre abas em React</p>
        </div>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Primeira Aba
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Segunda Aba
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Terceira Aba
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {renderContent()}
      </div>
    </div>

  );
}

export default App
