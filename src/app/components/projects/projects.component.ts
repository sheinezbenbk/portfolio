import { Component } from '@angular/core';
import { Tools } from 'src/app/models/tools';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  firstPoject: Tools[] = [

    {
      name: 'BLENDER',
    },
    {
      name: 'HTML',
    },
    {
      name: 'JS',
    },
    {
      name: 'CSS',
    },
    
  ];

  secoundProject: Tools[] = [
   
    {
      name: 'TypeScript',
    },
    {
      name: 'Angular',
    },
   
    {
      name: 'GitHub',
    },

    {
      name: '3D',
    },

  ];

  thirdProject: Tools[] = [
    {
      name: 'Kotlin',
    },
    {
      name: 'SprintBoot',
    },

  ];

  quatreProject: Tools[] = [
    {
      name: 'TypeScript',
    },
    {
      name: 'Angular',
    },
   
  ];



  projectOne = () => {
    window.open(environment.projectOne, '_blank');
  };

  projectTwo = () => {
    window.open(environment.projectTwo, '_blank');
  };

  projectThree = () => {
    window.open(environment.projectThree, '_blank');
  };

  ProjectQuatre = () => {
    window.open(environment.quatreProject,'_blank' )
  }

}
