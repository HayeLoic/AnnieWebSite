import { Project } from './project'
import { Image } from '../image/image';

export class ProjectsSettings {
    public static GetProjects() {
        return [
            new Project({
                id: 1,
                title: 'Infime',
                description: 'Infime',
                repository: '/assets/three-d-work/Infime/',
                imageMiniature: new Image({ fileName: 'infime_miniature.jpg' }),
                images: [
                ],
                vimeoLink: 'https://player.vimeo.com/video/54085888?color=ffffff&byline=0&portrait=0'
            }),
            new Project({
                id: 2,
                title: 'LaOuTuEs',
                description: 'LaOuTuEs',
                repository: '/assets/three-d-work/LaOuTuEs/',
                imageMiniature: new Image({ fileName: 'la_ou_tu_es_miniature.jpg' }),
                images: [
                    new Image({ fileName: 'la_ou_tu_es_01.jpg' }),
                    new Image({ fileName: 'la_ou_tu_es_02.jpg' })
                ],
                vimeoLink: ''
            }),
            new Project({
                id: 3,
                title: 'Moss',
                description: 'Moss',
                repository: '/assets/three-d-work/Moss/',
                imageMiniature: new Image({ fileName: 'moss_miniature.jpg' }),
                images: [
                    new Image({ fileName: 'moss.jpg' })
                ],
                vimeoLink: ''
            }),
            new Project({
                id: 4,
                title: 'Scale',
                description: 'Scale',
                repository: '/assets/three-d-work/Scale/',
                imageMiniature: new Image({ fileName: 'scale_miniature.jpg' }),
                images: [
                    new Image({ fileName: 'scale_01.jpg' }),
                    new Image({ fileName: 'scale_02.jpg' }),
                    new Image({ fileName: 'scale_03.jpg' })
                ],
                vimeoLink: ''
            })
        ];
    }
}