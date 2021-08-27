import React, { FC } from 'react';
import './Styles.scss';
import { NavBar } from 'sections/Nav/NavBar'
import { Main } from './sections/Main/Main'
import { About } from './sections/About/About'
import { Projects } from './sections/Projects/Projects'
import { Find } from './sections/FindMe/Find'
import { Footer } from './sections/Footer/Footer'

const App: FC = () => (
    <div className="App">

        <NavBar />
        <Main />
        <About />
        <Projects />
        <Find />
        <Footer />
    </div>
);

export default App;