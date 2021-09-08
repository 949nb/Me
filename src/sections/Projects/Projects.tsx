import React from 'react'
import { ProjectItemWrapper, ProjectWrapper } from './StyleComponent'
import { ReactComponent as UIProject } from 'assets/test.svg'
import CVLogo from 'assets/img/use-case-wiki.png'
import mackNote from 'assets/makeNote.png'
import pickChu from 'assets/pickchu.png'
import leecode from 'assets/leecode.png'
import { KeyPoint } from 'componets/KeyPoint'

export const Projects: React.FC = () => {
    return (
        <ProjectWrapper>
            <div className={ "title" }>项目👜</div>
            <div className={ 'project-content' }>
                <div className="project-item">
                    <a href="http://hanyu949.gitee.io/study-ui/">
                        <UIProject className={ 'ProjectItemWrapper' }/>
                    </a>
                    <h2>UI库</h2>
                    <section>
                        <p>这是一个<KeyPoint>学习向</KeyPoint>的UI库</p>
                        <p>为了学习了解自己每天用的UI库，自己也封装了一个</p>
                        <p>组件库内有Button、Tab、Popover、Toast等...利用<KeyPoint style={{color: '#38B77F'}}>Vue</KeyPoint>写的组件～</p>
                        <p>后续想做一个React版本的轮子...</p>
                    </section>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper onClick={ () => window.location.reload() } src={ CVLogo }/>
                    <h2>个人首页</h2>
                    <section>
                        <p>这个网站是我个人的<KeyPoint>展示主页</KeyPoint></p>
                        <p>利用React、ReactHooks、Sass、TypeScript、StyledComponents构建, 也对<KeyPoint>移动端</KeyPoint>进行了适配</p>
                        <p>每当我技术栈更新 我都会利用这个技术栈更新一次这个网站，算是对自己的一次总结～</p>
                    </section>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper
                        onClick={ () => window.location.href = 'http://hanyu949.gitee.io/ledger-react/#/tags' }
                        src={ mackNote }
                    />
                    <h2>记账本</h2>
                    <p>基于React.js, Hooks, TypeScript写的一个记账本</p>
                    <p>对于数据做了<KeyPoint>本地化处理</KeyPoint></p>
                    <p>没什么花里胡哨的操作，仅仅是一个记账本。</p>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper
                        src={ leecode }
                    />
                    <h2>LeeCode解题</h2>
                    <p>最近学习数据结构算法</p>
                    <p>修炼内功ing～</p>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper
                        onClick={ () => window.location.href = 'http://hanyu949.gitee.io/pickchu/' }
                        src={ pickChu }
                    />
                    <h2>CSS皮卡丘</h2>
                    <p>模拟在屏幕上写代码的过程</p>
                    <p>利用CSS画一个皮卡丘</p>
                </div>
                <div className="project-item">
                </div>
            </div>
        </ProjectWrapper>
    )
}