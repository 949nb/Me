import React from 'react'
import { MainWrapper } from './StyleComponent'
import together from 'assets/img/use-case-wiki.png'
import { ReactComponent as DownSvg } from 'assets/img/down.svg'


export const Main: React.FC = () => {

    return (
        <MainWrapper>
            <div className={'introduce-myself'}>
                你好👋,
                <br/>
                我是张含雨.
                <br/>
                一只
                <span style={{color: '#37B77F', textDecoration:'4px black line-through'}}>Vue</span>
                前端开发工程师~
                <br/>
                欢迎访问我的主页 🎉 🎉
                <br/>
            </div>
            <img className={'main-img'} src={together} alt={'个人形象图'} />
            <div className={'down-svg'}>
                <DownSvg />
            </div>
        </MainWrapper>
    )
}