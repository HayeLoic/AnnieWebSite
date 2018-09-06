import { Project } from './project'
import { Image } from '../image/image';

export class ProjectsSettings {
    public static GetProjects() {
        return [
            new Project({
                id: 1,
                title: 'Moss',
                description: 'This is Moss.',
                repository: '../../assets/three-d-work/Moss/',
                imageMiniature: new Image({fileName: 'moss.jpg'}),
                images: [
                    new Image({ fileName: 'Plan_01_131216_0003.png' })
                ]
            }),
            new Project({
                id: 2,
                title: 'Scale',
                description: 'This is Scale.',
                repository: '../../assets/three-d-work/Scale/',
                imageMiniature: new Image({fileName: 'scale.jpg'}),
                images: [
                    new Image({ fileName: 'Render_0200.png' }),
                    new Image({ fileName: 'Render_0378.png' }),
                    new Image({ fileName: 'scale01.jpg' }),
                    new Image({ fileName: 'scale02.jpg' }),
                    new Image({ fileName: 'scale03.jpg' }),
                    new Image({ fileName: 'vlcsnap-2014-07-25-00h18m21s0.png' })
                ]
            }),
            new Project({
                id: 3,
                title: 'Infime',
                description: 'This is Infime.',
                repository: '../../assets/three-d-work/Infime/',
                imageMiniature: new Image({fileName: 'infime.jpg'}),
                images: [
                    new Image({ fileName: 'infime_photos.0312.jpg' }),
                    new Image({ fileName: 'infime_photos.0388.jpg' }),
                    new Image({ fileName: 'infime_photos.0972.jpg' }),
                    new Image({ fileName: 'infime_photos.1223.jpg' }),
                    new Image({ fileName: 'infime_photos.1575.jpg' }),
                    new Image({ fileName: 'infime_photos.1737.jpg' }),
                    new Image({ fileName: 'infime_photos.1906.jpg' }),
                    new Image({ fileName: 'Infime_Plan03_01.png' }),
                    new Image({ fileName: 'Plan10.jpg' })
                ]
            }),
            new Project({
                id: 4,
                title: 'Là Où Tu Es',
                description: 'This is Là Où Tu Es.',
                repository: '../../assets/three-d-work/LaOuTuEs/',
                imageMiniature: new Image({fileName: 'la_ou_tu_es.jpg'}),
                images: [
                    new Image({ fileName: 'la_ou_tu_es01.jpg' }),
                    new Image({ fileName: 'la_ou_tu_es02.jpg' }),
                    new Image({ fileName: 'la_ou_tu_es03.jpg' })
                ]
            })
        ];
    }
}