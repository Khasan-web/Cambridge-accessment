import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService{

  sidebarWhyWe: {name: string, link: string}[] = [
    {
      name: 'Who accept our exam?',
      link: 'why-we/who-accept-exams'
    },
    {
      name: 'English language skills in the workplace',
      link: 'why-we/end-skill-in-workplace'
    },
    {
      name: 'Study abroad',
      link: 'why-we/study-abroad'
    }
  ];

  sidebarExamsSchool: {name: string, link: string}[] = [
    {
      name: 'Schools',
      link: 'exams-tests/schools'
    },
    {
      name: '- Pre A1 Starters',
      link: 'exams-tests/schools/starters'
    },
    {
      name: '- A1 Movers',
      link: 'exams-tests/schools/movers'
    },
    {
      name: '- A2 Flyers',
      link: 'exams-tests/schools/flyers'
    },
    {
      name: '- A2 Key for Schools',
      link: 'exams-tests/schools/key-for-schools'
    },
    {
      name: '- B1 Preliminary for Schools',
      link: 'exams-tests/schools/preliminary-for-schools'
    },
    {
      name: '- B2 First for Schools',
      link: 'exams-tests/schools/first-for-schools'
    }
  ];
  sidebarExamsGeneralHigher: {name: string, link: string}[] = [
    {
      name: 'General and higher education',
      link: 'exams-tests/general-higher'
    },
    {
      name: '- A2 Key',
      link: 'exams-tests/general-higher/key'
    },
    {
      name: '- B1 Preliminary',
      link: 'exams-tests/general-higher/preliminary'
    },
    {
      name: '- B2 First',
      link: 'exams-tests/general-higher/first'
    },
    {
      name: '- C1 Advanced',
      link: 'exams-tests/general-higher/advanced'
    }
  ]

  sidebarPrepare: {name: string, link: string}[] = [
    {
      name: 'Free activities',
      link: 'https://www.cambridgeenglish.org/learning-english/activities-for-learners/'
    },
    {
      name: 'Exam preparatio',
      link: 'https://www.cambridgeenglish.org/learning-english/exam-preparation/'
    },
    {
      name: 'Test your English',
      link: 'https://www.cambridgeenglish.org/test-your-english/'
    },
    {
      name: 'Parents and children',
      link: '/prepare/parents-and-children'
    },
    {
      name: 'Games and social media',
      link: '/prepare/games-and-social-media'
    },
    {
      name: 'More resources',
      link: 'https://www.cambridgeenglish.org/learning-english/free-resources/'
    }
  ];

  // subSidebar

  sidebarParentsInfo: {name: string, link: string}[] = [
    {
      name: 'Information for parents',
      link: '/prepare/parents-and-children/information-for-parents'
    },
    {
      name: 'Newsletter for parents',
      link: '#newsletter'
    }
  ];

  constructor() { }

}
