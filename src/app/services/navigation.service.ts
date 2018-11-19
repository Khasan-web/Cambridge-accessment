import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

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

  sidebarExams: {name: string}[] = [
    {
      name: 'Schools'
    },
    {
      name: 'Pre A1 Starters (YLE Starters)'
    },
    {
      name: 'A1 Movers (YLE Movers)'
    },
    {
      name: 'A2 Key for Schools (KET)'
    },
    {
      name: 'B1 Preliminary for Schools (PET)'
    },
    {
      name: 'B2 First for Schools (FCE)'
    },
    {
      name: 'General higher education'
    },
    {
      name: 'A2 Key (KET)'
    },
    {
      name: 'B1 Preliminary (PET)'
    },
    {
      name: 'B2 First (FCE)'
    },
    {
      name: 'C1 Advanced (CAE)'
    }
    // we will set condition if schools ...
  ];

  sidebarPrepare: {name: string, link: string}[] = [
    {
      name: 'Free activities',
      link: '/prepare/games'
    },
    {
      name: 'Exam preparatio',
      link: '/prepare/games'
    },
    {
      name: 'Test your English',
      link: '/prepare/games'
    },
    {
      name: 'Parents and children',
      link: '/prepare/games'
    },
    {
      name: 'Games and social media',
      link: '/prepare/games-and-social-media'
    },
    {
      name: 'More resources',
      link: '/prepare/games'
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
