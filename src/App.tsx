import React, { FC } from 'react';
import './Styles.scss';

const App: FC = () => (
    <div className="App">
        <h1>Nav</h1>
        <h1>首页</h1>
        <h1>关于我</h1>
        <div>
            <h1>个人项目</h1>
            UI库、CSS比卡丘、五子棋、记账本、leeCode解题、
        </div>
        <div>
            <h1>找到我</h1>
            GitHub、Bilibili、微博、语雀、邮箱

        </div>
        <div>
            <h1>Footer</h1>
            使用了：React、TypeScript、EsLint、Antd、Sass
        </div>
    </div>
);

export default App;