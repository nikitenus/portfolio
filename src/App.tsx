import './App.css'
import {Header} from './layout/header/Header.tsx';
import {Main} from './layout/sections/main/Main.tsx';
import {Skills} from './layout/sections/skills/Skills.tsx';
import {Works} from './layout/sections/works/Works.tsx';
import {Testimony} from './layout/sections/testimony/Testimony.tsx';
import {Contact} from './layout/sections/contacts/Contact.tsx';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
        </div>
    )
}

export default App
