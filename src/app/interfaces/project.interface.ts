// Interfaces

// Projects
export interface Projects {
  id?: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
  imgHero: string;
  projectBackstage: boolean;
  productions: Productions[];
}

// Productions
export interface Productions {
  productionNumber: string;
  productionTitle: string;

  backgroundURL?: string;
  photos: string[];
}

export interface ImageProject {
  name: string;
  url: string;
}

// Prueba de Interces

const projects: Projects[] = [
  {
    id: '0',
    projectName: 'Vale Ellena',
    projectType: 'XV AÑOS',
    projectDescription: 'Esto es una breve descripción del project',
    imgHero: 'assets/images/valeElenaPoster.jpg',
    projectBackstage: true,
    productions: [
      {
        productionNumber: 'Producción I',
        productionTitle: 'Ama lo que haces',
        backgroundURL: 'Ruta Video',
        photos: [
          '/assets/images/pofo-portfolio-layout-img-01.jpg',
          'assets/images/pofo-portfolio-layout-img-02.jpg',
          'assets/images/pofo-portfolio-layout-img-03.jpg',
          'assets/images/pofo-portfolio-layout-img-04.jpg',
          'assets/images/pofo-portfolio-layout-img-05.jpg'
        ]
      },
      {
        productionNumber: 'Production II',
        productionTitle: 'Casual Nature',
        backgroundURL: 'Ruta video',
        photos: [
          'assets/images/pofo-portfolio-layout-img-01.jpg',
          'assets/images/pofo-portfolio-layout-img-02.jpg',
          'assets/images/pofo-portfolio-layout-img-03.jpg',
          'assets/images/pofo-portfolio-layout-img-04.jpg',
          'assets/images/pofo-portfolio-layout-img-05.jpg'
        ]
      }
    ]
  }
];
