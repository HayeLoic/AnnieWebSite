import { Project } from './project'
import { Image } from './image';

export class ProjectsSettings {
    public static GetProjects() {
        let project: Project = {
            id: 1,
            title: 'Scale',
            description: 'This is scale.',
            repository: '../../assets/three-d-work/Scale/',
            images: [
                new Image({ fileName: 'Render_0200.png' }),
                new Image({ fileName: 'Render_0378.png' }),
                new Image({ fileName: 'scale01.jpg' }),
                new Image({ fileName: 'scale02.jpg' }),
                new Image({ fileName: 'scale03.jpg' }),
                new Image({ fileName: 'vlcsnap-2014-07-25-00h18m21s0.png' })
            ]
        };

        return [project];
    }
}