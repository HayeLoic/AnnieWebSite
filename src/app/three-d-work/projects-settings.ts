import { Project } from './project'
import { Image } from './image';

export class ProjectsSettings {
    public static GetProjects() {
        return [
            new Project({
                id: 1,
                title: 'Moss',
                description: 'This is Moss.',
                repository: '../../assets/three-d-work/Moss/',
                images: [
                    new Image({ fileName: 'Plan_01_131216_0003.png' })
                ]
            }),
            new Project({
                id: 2,
                title: 'Scale',
                description: 'This is Scale.',
                repository: '../../assets/three-d-work/Scale/',
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
                id: 3,
                title: 'LaOuTuEs',
                description: 'This is LaOuTuEs.',
                repository: '../../assets/three-d-work/LaOuTuEs/',
                images: [
                    new Image({ fileName: 'Arbres_02.png' }),
                    new Image({ fileName: 'Cafe_Fille_02.png' })
                ]
            })
        ];
    }
}