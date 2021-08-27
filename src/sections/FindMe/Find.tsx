import React from 'react'
import { FindWrapper } from './StyleComponent'
import together from 'assets/img/together.webp'
import { ReactComponent as Github } from 'assets/img/GitHub.svg'
import { ReactComponent as Bilibili } from 'assets/img/BILIBILI_LOGO.svg'
import { ReactComponent as Weibo } from 'assets/img/weibo.svg'
import { ReactComponent as Yuque } from 'assets/img/Yuque.svg'
import { Space } from 'antd'

export const Find: React.FC = () => {
    return (
        <FindWrapper>
            <img src={ together } alt=""/>
            <h1>找到我💁‍♂️</h1>
            <div className={'find-me-card'}>
                <Space>
                    <Github/>
                    <Bilibili style={ {fill: "cornflowerblue"} }/>
                    <Weibo style={ {fill: "indianred"} }/>
                    <Yuque/>
                </Space>
            </div>
        </FindWrapper>
    )
}