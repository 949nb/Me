import React, { FC } from 'react';
import './Styles.scss';
import { NavBar } from 'sections/Nav/NavBar'
import { Main } from './sections/Main/Main'
import { About } from './sections/About/About'
import { Projects } from './sections/Projects/Projects'
import { Find } from './sections/FindMe/Find'

const App: FC = () => (
    <div className="App">

        <NavBar />
        <Main />
        <About />
        <Projects />
        <Find />
        <div>
            <h1>Footer</h1>
            使用了：React、TypeScript、EsLint、Antd、Sass
        </div>
    </div>
);

export default App;