import { Project } from './project'
import { Image } from '../image/image';

export class ProjectsSettings {
    public static GetProjects() {
        return [
            new Project({
                id: 2,
                title: 'Infime',
                description: 'Infime',
                repository: '/assets/three-d-work/Infime/',
                imageMiniature: new Image({ fileName: 'infime_miniature.jpg' }),
                images: [
                ],
                vimeoLink: 'https://player.vimeo.com/video/54085888?color=ffffff&byline=0&portrait=0'
            }),
            new Project({
                id: 4,
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
                id: 1,
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
                id: 3,
                title: 'Scale',
                description: 'Scale',
                repository: '/assets/three-d-work/Scale/',
                imageMiniature: new Image({ fileName: 'scale_miniature.jpg' }),
                images: [
                    new Image({ fileName: 'scale_01.jpg' }),
                    new Image({ fileName: 'scale_02.jpg' }),
                    new Image({ fileName: 'scale_03.jpg' })
                ],
                vimeoLink: 'https://player.vimeo.com/video/101857170?color=ffffff&byline=0&portrait=0'
            }),
            new Project({
                id: 5,
                title: 'Chambre',
                description: 'Chambre',
                repository: '/assets/three-d-work/Chambre/',
                imageMiniature: new Image({ fileName: 'chambre_miniature.jpg' }),
                images: [
                    new Image({ fileName: 'chambre_01.png' }),
                    new Image({ fileName: 'chambre_02.png' }),
                    new Image({ fileName: 'chambre_03.png' }),
                    new Image({ fileName: 'chambre_04.png' }),
                    new Image({ fileName: 'chambre_05.png' }),
                    new Image({ fileName: 'chambre_06.png' }),
                    new Image({ fileName: 'chambre_07.png' }),
                    new Image({ fileName: 'chambre_08.png' })
                ],
                vimeoLink: ''
            }),
            new Project({
                id: 6,
                title: 'Matin',
                description: 'Matin',
                repository: '/assets/three-d-work/Matin/',
                imageMiniature: new Image({ fileName: 'matin_miniature.jpg' }),
                images: [
                    new Image({ fileName: 'matin_09.png' })
                ],
                vimeoLink: 'https://player.vimeo.com/video/39236876?color=ffffff&byline=0&portrait=0'
            }),
            new Project({
                id: 7,
                title: 'Robot',
                description: 'Robot',
                repository: '/assets/three-d-work/Robot/',
                imageMiniature: new Image({ fileName: 'robot_miniature.jpg' }),
                images: [
                    new Image({ fileName: 'robot.jpg' })
                ],
                vimeoLink: ''
            })
        ];
    }
}