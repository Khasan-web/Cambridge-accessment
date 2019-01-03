import { Injectable } from '@angular/core';
import { PrepMat } from '../models/prepration_material.model';

@Injectable({
  providedIn: 'root'
})
export class PreparationMaterialLevelsService {

  material_pre_a1: PrepMat[] = [
    {
      name: "Fun for Starters",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/fun-for-starters.png",
      info: "Fun for Starters fourth edition provides provides bright, full-colour and interactive preparation for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/fun-starters-movers-and-flyers-4th-edition",
      action: 'Buy book'
    },
    {
      name: "Storyfun",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/storyfun-2nd-edition.jpg",
      info: "Storyfun offers enjoyable and engaging practice for Cambridge English: Young Learners. Now in six levels (2 books per Young Learners level), each book contains eight fully-illustrated stories followed by fun activities, songs and exam-style questions.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/storyfun-2nd-edition",
      action: 'Buy book'
    },
    {
      name: "Cambridge English Young Learners 1 - Practice tests",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/starters-practice-tests.jpg",
      info: "Authentic Cambridge Assessment English examination papers. Each set contains three full-colour test papers which contain engaging activities and attractive illustrations to motivate young learners. Available for each level of Cambridge English: Young Learners.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-young-learners-1-revised-exam-2018",
      action: 'Buy book'
    },
    {
      name: "Kid's Box",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/kids-box-book-2.jpg",
      info: "This seven-level course delights children and inspires teachers with its bright ideas for the classroom. Perfect for general use Kid's Box is now updated with new vocabulary and activities for the revised Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/kids-box-updated-2nd-edition",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    }
  ];
  material_a1_movers: PrepMat[] = [
    {
      name: "Fun for Movers",
      img: "../../../../../assets/img/exams/schools/levels/movers/fun-for-movers.jpg",
      info: "Fun for Movers fourth edition provides provides bright, full-colour and interactive preparation for the Cambridge English: Young Learners tests.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/fun-starters-movers-and-flyers-4th-edition/",
      action: 'Buy book'
    },
    {
      name: "Storyfun",
      img: "../../../../../assets/img/exams/schools/levels/movers/storyfun-level-4.jpg",
      info: "Storyfun offers enjoyable and engaging practice for Cambridge English: Young Learners. Now in six levels (2 books per Young Learners level), each book contains eight fully-illustrated stories followed by fun activities, songs and exam-style questions.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/storyfun-2nd-edition",
      action: 'Buy book'
    },
    {
      name: "Cambridge English Young Learners 1 - Practice tests",
      img: "../../../../../assets/img/exams/schools/levels/movers/practice-tests-movers.jpg",
      info: "Authentic Cambridge Assessment English examination papers. Each set contains three full-colour test papers which contain engaging activities and attractive illustrations to motivate young learners. Available for each level of Cambridge English: Young Learners.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-young-learners-1-revised-exam-2018",
      action: 'Buy book'
    },
    {
      name: "Kid's Box",
      img: "../../../../../assets/img/exams/schools/levels/movers/kids-box-book-4.jpg",
      info: "This seven-level course delights children and inspires teachers with its bright ideas for the classroom. Perfect for general use Kid's Box is now updated with new vocabulary and activities for the revised Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/kids-box-updated-2nd-edition",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    }
  ]
  material_a2_flyers: PrepMat[] = [
    {
      name: "Fun for Flyers",
      img: "../../../../../assets/img/exams/schools/levels/a2-flyers/fun-for-flyers.jpg",
      info: "Fun for Flyers fourth edition provides provides bright, full-colour and interactive preparation for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/fun-starters-movers-and-flyers-4th-edition",
      action: 'Buy book'
    },
    {
      name: "Storyfun",
      img: "../../../../../assets/img/exams/schools/levels/a2-flyers/storyfun-level-6.jpg",
      info: "Storyfun offers enjoyable and engaging practice for Cambridge English: Young Learners. Now in six levels (2 books per Young Learners level), each book contains eight fully-illustrated stories followed by fun activities, songs and exam-style questions.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/storyfun-2nd-edition",
      action: 'Buy book'
    },
    {
      name: "Cambridge English Young Learners 1 - Practice tests",
      img: "../../../../../assets/img/exams/schools/levels/a2-flyers/practice-tests-flyers.jpg",
      info: "Authentic Cambridge Assessment English examination papers. Each set contains three full-colour test papers which contain engaging activities and attractive illustrations to motivate young learners. Available for each level of Cambridge English: Young Learners.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-young-learners-1-revised-exam-2018",
      action: 'Buy book'
    },
    {
      name: "Kid's Box",
      img: "../../../../../assets/img/exams/schools/levels/a2-flyers/kids-box-book-6.jpg",
      info: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/kids-box-updated-2nd-edition",
      link: "This seven-level course delights children and inspires teachers with its bright ideas for the classroom. Perfect for general use Kid's Box is now updated with new vocabulary and activities for the revised Cambridge English: Young Learners tests.",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    }
  ];
  material_a2_key: PrepMat[] = [
    {
      name: "Compact Key for Schools",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/compact-key-for-schools.jpg",
      info: "The course is designed to maximise the performance of school-age learners.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/compact-key-schools",
      action: 'Buy book'
    },
    {
      name: "Complete Key for Schools",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/complete-key-for-schools.jpg",
      info: "Complete Key for Schools is official preparation for the A2 Key for Schools exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/complete-key-schools",
      action: 'Buy book'
    },
    {
      name: "Prepare! Level 3",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/prepare-level-3.jpg",
      info: "Prepare! is the only official course for schools with exam content validated by Cambridge Assessment English.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-prepare",
      action: 'Buy book'
    },
    {
      name: "Cambridge English: Key for Schools 2",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/key-for-schools-2.jpg",
      info: "Cambridge English Key for Schools 2 contains four complete and authentic examination papers.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-key-schools-2",
      action: 'Buy book'
    },
    {
      name: "KET for Schools Trainer",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/ket-for-schools-trainer.jpg",
      info: "KET for Schools Trainer is the perfect companion for A2 Key for Schools exam preparation.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/ket-schools-trainer",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    },
    {
      name: "Testbank",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/Testbank panel.png",
      info: "Cambridge English Official Practice Tests are now available online in Testbank. You can work in Test mode (timed) or Practice mode (multi-attempts) to help you get ready for your exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/official-exam-preparation-materials/product/testbank",
      action: 'Buy Testbank'
    },
  ]
  material_b1_pet: PrepMat[] = [
    {
      name: "Compact Preliminary for Schools",
      img: "../../../../../assets/img/exams/schools/levels/b1-pet/compact-preliminary-for-schools.jpg",
      info: "The course is designed to maximise the performance of school-age learners.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/compact-preliminary-schools/",
      action: 'Buy book'
    },
    {
      name: "Cambridge English: Preliminary for Schools",
      img: "../../../../../assets/img/exams/schools/levels/b1-pet/speaking-test-preparation-pack-for-PET-for-schools.jpg",
      info: "Cambridge English: Preliminary for Schools contains four complete and authentic examination papers.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/speaking-test-preparation-pack-pet-schools/",
      action: 'Buy book'
    },
    {
      name: "Cambridge English: Preliminary for Schools 2",
      img: "../../../../../assets/img/exams/schools/levels/b1-pet/preliminary-for-schools-2-practice-tests.jpg",
      info: "Cambridge English: Preliminary for Schools 2 contains four complete and authentic examination papers.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-preliminary-schools-2",
      action: 'Buy book'
    },
    {
      name: "Preliminary for Schools Trainer",
      img: "../../../../../assets/img/exams/schools/levels/b1-pet/preliminary-for-schools-trainer.jpg",
      info: "Preliminary for Schools Trainer is the perfect companion for B1 Preliminary for Schools exam preparation.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/preliminary-schools-trainer",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    },
    {
      name: "Testbank",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/Testbank panel.png",
      info: "Cambridge English Official Practice Tests are now available online in Testbank. You can work in Test mode (timed) or Practice mode (multi-attempts) to help you get ready for your exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/official-exam-preparation-materials/product/testbank",
      action: 'Buy Testbank'
    },
  ]
  material_b2_fce: PrepMat[] = [
    {
      name: "Compact First for Schools",
      img: "../../../../../assets/img/exams/schools/levels/b2_fce/compact-first-for-schools.jpg",
      info: "The course is designed to maximise the performance of school-age learners.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/compact-first-schools/",
      action: 'Buy book'
    },
    {
      name: "Complete First for Schools",
      img: "../../../../../assets/img/exams/schools/levels/b2_fce/complete-first.jpg",
      info: "Complete First for Schools is official preparation for the B2 First for Schools exam.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/complete-first-schools",
      action: 'Buy book'
    },
    {
      name: "Prepare! Level 7",
      img: "../../../../../assets/img/exams/schools/levels/b2_fce/Prepare level 7.jpg",
      info: "Prepare! is the only official course for schools with exam content validated by Cambridge Assessment English.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-prepare/cambridge-english-prepare-level-7-workbook-audio/",
      action: 'Buy book'
    },
    {
      name: "Cambridge English: First for Schools Practice Tests",
      img: "../../../../../assets/img/exams/schools/levels/b2_fce/First for Schools 2.jpg",
      info: "Cambridge English: First for Schools Practice Tests contains four complete and authentic examination papers.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-first-schools-2",
      action: 'Buy book'
    },
    {
      name: "First for Schools Trainer",
      img: "../../../../../assets/img/exams/schools/levels/b2_fce/first-for-schools-trainer.jpg",
      info: "First for Schools Trainer is the perfect companion for First for Schools exam preparation.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/first-schools-trainer",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    },
    {
      name: "Testbank",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/Testbank panel.png",
      info: "Cambridge English Official Practice Tests are now available online in Testbank. You can work in Test mode (timed) or Practice mode (multi-attempts) to help you get ready for your exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/official-exam-preparation-materials/product/testbank",
      action: 'Buy Testbank'
    },
  ]
  material_a2: PrepMat[] = [
    {
      name: "Objective Key",
      img: "../../../../../assets/img/exams/general-higher/levels/a2-key/objective-key.jpg",
      info: "Objective Key is an updated and revised edition of the successful Objective KET course.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/objective-key-2nd-edition-9",
      action: 'Buy book'
    },
    {
      name: "Cambridge English: Key 7",
      img: "../../../../../assets/img/exams/general-higher/levels/a2-key/key-7-practice-tests.jpg",
      info: "Cambridge English: Key 7 contains four complete tests for the A2 Key exam.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-key-7",
      action: 'Buy book'
    },
    {
      name: "Common Mistakes at KET",
      img: "../../../../../assets/img/exams/general-higher/levels/a2-key/common-mistakes-at-ket.jpg",
      info: "This invaluable little book highlights the real mistakes that students make in the exam and shows how to avoid them.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/common-mistakes-ket-and-how-avoid-them/common-mistakes-ket-and-how-avoid-them-paperback",
      action: 'Buy book'
    },
    {
      name: "Speaking Test Preparation Pack for KET",
      img: "../../../../../assets/img/exams/general-higher/levels/a2-key/key-speaking-test-preparation-pack.jpg",
      info: "The Speaking Test Preparation Pack for KET is a comprehensive teacher resource pack.",
      link: "http://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/speaking-test-preparation-pack-ket/speaking-test-preparation-pack-ket-paperback-dvd",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    },
    {
      name: "Testbank",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/Testbank panel.png",
      info: "Cambridge English Official Practice Tests are now available online in Testbank. You can work in Test mode (timed) or Practice mode (multi-attempts) to help you get ready for your exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/official-exam-preparation-materials/product/testbank",
      action: 'Buy Testbank'
    },
  ]
  material_b1_preliminary: PrepMat[] = [
    {
      name: "Objective PET",
      img: "../../../../../assets/img/exams/general-higher/levels/b1-preliminary/objective-pet.jpg",
      info: "Objective PET second edition is a completely updated and revised edition of the best-selling Objective PET course.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/objective-pet-2nd-edition",
      action: 'Buy book'
    },
    {
      name: "Complete PET",
      img: "../../../../../assets/img/exams/general-higher/levels/b1-preliminary/complete-pet.jpg",
      info: "Complete PET combines the very best in contemporary classroom practice with stimulating topics aimed at teenagers and young adults.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/complete-pet/",
      action: 'Buy book'
    },
    {
      name: "Cambridge English: Preliminary 8",
      img: "../../../../../assets/img/exams/general-higher/levels/b1-preliminary/preliminary-8.jpg",
      info: "Cambridge English: Preliminary 8 contains four official tests for the B1 Preliminary exam.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-preliminary-8/",
      action: 'Buy book'
    },
    {
      name: "Insight into PET",
      img: "../../../../../assets/img/exams/general-higher/levels/b1-preliminary/insight-into-pet.jpg",
      info: "Insight into PET is a short course which prepares candidates for the B1 Preliminary exam.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/insight-pet/",
      action: 'Buy book'
    },
    {
      name: "Grammar for PET",
      img: "../../../../../assets/img/exams/general-higher/levels/b1-preliminary/grammar-for-pet.jpg",
      info: "Grammar for PET provides complete coverage of the grammar needed for the B1 Preliminary exam.",
      link: "",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    },
    {
      name: "Testbank",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/Testbank panel.png",
      info: "Cambridge English Official Practice Tests are now available online in Testbank. You can work in Test mode (timed) or Practice mode (multi-attempts) to help you get ready for your exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/official-exam-preparation-materials/product/testbank",
      action: 'Buy Testbank'
    },
  ]
  material_c1_advanced: PrepMat[] = [
    {
      name: "Compact Advanced",
      img: "../../../../../assets/img/exams/general-higher/levels/c1-advanced/compact-advanced.jpg",
      info: "Compact Advanced provides C1-level students with thorough preparation and practice for success in the revised C1 Advanced exam.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/compact-advanced/",
      action: 'Buy book'
    },
    {
      name: "Complete Advanced",
      img: "../../../../../assets/img/exams/general-higher/levels/c1-advanced/complete-advanced.jpg",
      info: "Complete Advanced provides thorough preparation for the revised 2015 C1 Advanced exam.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/complete-advanced-2nd-edition/",
      action: 'Buy book'
    },
    {
      name: "Objective Advanced",
      img: "../../../../../assets/img/exams/general-higher/levels/c1-advanced/objective-advanced.jpg",
      info: "Objective Advanced is an updated and revised edition of the best-selling C1 Advanced course.",
      link: "https://www.cambridge.org/uz/cambridgeenglish/catalog/cambridge-english-exams-ielts/objective-advanced-4th-edition",
      action: 'Buy book'
    },
    {
      name: "Cambridge English: Advanced 2",
      img: "../../../../../assets/img/exams/general-higher/levels/c1-advanced/Advanced 2.jpg",
      info: "These authentic examination papers provide candidates with an excellent opportunity to familiarise themselves with the content and format of the updated C1 Advanced exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-advanced-2",
      action: 'Buy book'
    },
    {
      name: "Advanced Trainer",
      img: "../../../../../assets/img/exams/general-higher/levels/c1-advanced/advanced-trainer.jpg",
      info: "Advanced Trainer Second edition offers six practice tests for the revised C1 Advanced exam.",
      link: "http://www.cambridge.org/cambridgeenglish/catalog/cambridge-english-exams-ielts/advanced-trainer-2nd-edition",
      action: 'Buy book'
    },
    {
      name: "See more official exam preparation materials",
      img: "../../../../../assets/img/exams/schools/levels/pre-a1/additional-cep-support-materials.png",
      info: "View the full range of support materials for the Cambridge English: Young Learners tests.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/?layout=listing&webSubjects%5B%5D=Cambridge+English+Exams+%26+IELTS&exam%5B%5D=Cambridge%2BEnglish%253A%2BYoung%2BLearners%2B%2528YLE%2529&sortOrder=family_pubDate%5Bdesc%5D&openOptions[]=facet_webSubjects&openOptions[]=facet_lvar&openOptions[]=facet_format&openOptions[]=facet_exam&openOptions[]=facet_cef",
      action: 'See more'
    },
    {
      name: "Testbank",
      img: "../../../../../assets/img/exams/schools/levels/a2-key/Testbank panel.png",
      info: "Cambridge English Official Practice Tests are now available online in Testbank. You can work in Test mode (timed) or Practice mode (multi-attempts) to help you get ready for your exam.",
      link: "https://www.cambridge.org/gb/cambridgeenglish/official-exam-preparation-materials/product/testbank",
      action: 'Buy Testbank'
    },
  ]

  constructor() { }
}
