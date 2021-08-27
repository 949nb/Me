import React from 'react'
import { FindWrapper } from './StyleComponent'
import together from 'assets/img/together.webp'
import { ReactComponent as Github } from 'assets/img/GitHub.svg'
import { ReactComponent as Bilibili } from 'assets/img/BILIBILI_LOGO.svg'
import { ReactComponent as Weibo } from 'assets/img/weibo.svg'
import { ReactComponent as Yuque } from 'assets/img/Yuque.svg'
import { ReactComponent as Notion } from 'assets/img/Notion.svg'

import { Space } from 'antd'

export const Find: React.FC = () => {
    return (
        <FindWrapper>
            <img src={ together } alt=""/>
            <h1>找到我💁‍♂️</h1>
            <div className={ 'find-me-card' }>
                <a href="https://github.com/949nb" target={ '&quot_blank&quot' }> <Github/> </a>
                <a href="https://space.bilibili.com/9244540" target={ '&quot_blank&quot' }> <Bilibili
                    style={ {fill: "cornflowerblue"} }/> </a>
                <a href="https://weibo.com/5686028113/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"
                   target={ '&quot_blank&quot' }>
                    <Weibo style={ {fill: "indianred"} }/>
                </a>
                <a href="https://www.yuque.com/hanyu949/lq87gz" target={ '&quot_blank&quot' }>
                    <Yuque/>
                </a>
                <a href="https://hanyu9.notion.site/ZHY-Blogs-List-8f3385cbe42742b4bb2bb14d025ead4d"
                   target={ '&quot_blank&quot' }>
                    <Notion/>
                </a>
            </div>
        </FindWrapper>
    )
}