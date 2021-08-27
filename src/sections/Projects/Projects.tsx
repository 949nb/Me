import React from 'react'
import { ProjectItemWrapper, ProjectWrapper } from './StyleComponent'

export const Projects: React.FC = () => {
    return (
        <ProjectWrapper>
            <div className={"title"}>项目</div>
            <div className={ 'project-content' }>
                <div className="project-item">
                    <ProjectItemWrapper />
                    <h2>UI库</h2>
                    <p>描述描述描述</p>
                    <p>描描述描述描述述描述描述</p>
                    <p>描述描述描述</p>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper />
                    <h2>五子棋</h2>
                    <p>描述描述描述</p>
                    <p>描描述描述描述述描述描述</p>
                    <p>描述描述描述</p>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper />
                    <h2>CSS皮卡丘</h2>
                    <p>描述描述描述</p>
                    <p>描描述描述描述述描述描述</p>
                    <p>描述描述描述</p>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper />
                    <h2>记账本</h2>
                    <p>描述描述描述</p>
                    <p>描描述描述描述述描述描述</p>
                    <p>描述描述描述</p>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper />
                    <h2>LeeCode解题</h2>
                    <p>描述描述描述</p>
                    <p>描描述描述描述述描述描述</p>
                    <p>描述描述描述</p>
                </div>
                <div className="project-item">
                    <ProjectItemWrapper />
                    <h2>个人首页</h2>
                    <p>描述描述描述</p>
                    <p>描描述描述描述述描述描述</p>
                    <p>描述描述描述</p>
                </div>
            </div>
        </ProjectWrapper>
    )
}