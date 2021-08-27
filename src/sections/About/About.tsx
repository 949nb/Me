import React from 'react'
import { AboutWrapper } from './StyleComponent'
import together from 'assets/img/api-beta.webp'

export const About: React.FC = () => {
    return (
        <AboutWrapper>
            <div className={ 'about-me-item' }>
                <div className={ 'left' }>
                    <img src={ together } alt="关于我图片" />
                </div>
                <div className={ 'right' }>
                    <h1>😶‍🌫️关于我😶‍🌫️</h1>
                    <p>
                        Hi~😁 我是⼀个充满活⼒、对前端由衷热爱的前端⼯程师。👨‍💻
                        <br/>
                        喜欢写
                        <a
                            href="https://www.notion.so/hanyu9/ZHY-Blogs-List-8f3385cbe42742b4bb2bb14d025ead4d"
                            target="&quot;_blank&quot"
                            style={ {
                                color: 'indianred',
                                borderBottom: '2px solid indianred'
                            } }
                        >博客</a>总结一些自己所想，主题除了💰技术还有❤️生活～
                        <br/>
                        下班喜欢打打羽毛球🏸️，看看书，扯扯🥚～😆 也喜欢数码产品 Apple🍎 YYDS！
                        <br/>
                    </p>
                </div>
            </div>
        </AboutWrapper>
    )
}