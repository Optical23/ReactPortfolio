import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
    Container,
    Project,
    ProjectInfo
} from './ProjectElements'
function Projects() {
    return (  
        <Container>
            <Project>
                <ProjectInfo>
                    Vfriend <AiFillGithub />
                </ProjectInfo>
            </Project>
            <Project>
                <ProjectInfo>
                    2 this one is l <AiFillGithub />
                </ProjectInfo>
            </Project>
            <Project>
                <ProjectInfo>
                    4 <AiFillGithub />
                </ProjectInfo>
            </Project>
            <Project>
                <ProjectInfo>
                   long title test t <AiFillGithub />
                </ProjectInfo>
            </Project>
        </Container>
    );
}

export default Projects;