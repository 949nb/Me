import React from 'react'
import { AboutWrapper } from './StyleComponent'

export const About: React.FC = () => {
    return (
        <AboutWrapper>
            <div className={ 'about-me-item' }>
                <div className={ 'left' }>
                    <h1>😶‍🌫️关于我😶‍🌫️</h1>
                </div>
                <div className={ 'right' }>

                    <h2>
                        Hi~😁 我是⼀个充满活⼒、对前端由衷热爱、善于发现问题的前端⼯程师。👨‍💻<br/> 喜欢写
                        <a
                            href="https://www.notion.so/hanyu9/ZHY-Blogs-List-8f3385cbe42742b4bb2bb14d025ead4d"
                            target="&quot;_blank&quot"
                            style={ {
                                color: 'indianred',
                                borderBottom: '2px solid indianred'
                            } }
                        >博客</a>
                        总结技术问题，之前主要是做ToB的项目。熟练掌握ES6规范、HTML5和CSS3，能运用模块化的方式编程，
                        熟练掌握Vue全家桶的应用，对React也有一定的了解，正在深入ing...
                        了解Git、HTTP、WebPack的基本知识，熟练使用Vim、Markdown工具,有良好的学习能力和强烈的进取心。
                    </h2>
                </div>
            </div>
        </AboutWrapper>
    )
}