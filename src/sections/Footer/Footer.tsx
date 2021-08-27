import React from 'react'
import { FooterWrapper } from './StyleComponent'
import antdLogo from 'assets/img/FooterSvg/antd.png'
import eslintLogo from 'assets/img/FooterSvg/eslint.png'
import reactLogo from 'assets/img/FooterSvg/react.png'
import sassLogo from 'assets/img/FooterSvg/sass.png'
import typeScriptLogo from 'assets/img/FooterSvg/typescript.png'
import styledComponentsLogo from 'assets/img/FooterSvg/logo.png'
import { Tooltip } from 'antd'

export const Footer: React.FC = () => {
    const logoList = [
        {
            l: antdLogo,
            s: 'Antd'
        },
        {
            l: eslintLogo,
            s: 'Eslint'
        },
        {
            l: reactLogo,
            s: 'React'
        },
        {
            l: sassLogo,
            s: 'Sass'
        },

        {
            l: typeScriptLogo,
            s: 'TypeScript'
        },
        {
            l: styledComponentsLogo,
            s: 'Styled-Components'
        },


    ]
    console.log(logoList)
    return (
        <FooterWrapper>
            <div>
                <span>第一次创建个人主页成功👏(其实几年前刚接触前端时候也写过一个...惨不忍睹...)，这个网站使用了：</span>
                <br/>
                <span>
                    {
                        logoList.map(logo =>
                            <Tooltip title={ logo.s }>
                                <img src={ logo.l } alt={ logo.s }/>
                            </Tooltip>)
                    }
                </span>
                <br/>
                <span>另外特别感谢🙏notion的官网和海怪的个人网站，谢谢你们给我的灵感 抱拳了🤝～</span>
            </div>
        </FooterWrapper>
    )
}