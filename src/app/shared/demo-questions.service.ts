import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoQuestionsService {

  constructor() { }

  demoQuestions = [
    {
      question : 'How many valves does a trumpet have?',
      answer: 'Three',
      option1: 'Four',
      option2: 'Three',
      option3: 'Eight',
      option4: 'Seven',
   },
   {
    question :"The vertical stripes of Nigeria's flag are: ",
    answer: 'Green/White/Green',
    option1: 'Green/White/Red',
    option2: 'Red/Green/White',
    option3: 'White/Green/White',
    option4: 'Green/White/Green',
   },
   {
    question :"The Punch, Thisday, and Nigerian Tribune are long-standing popular Nigerian what? ",
    answer: 'Newspaper',
    option1: 'Movies',
    option2: 'Newspaper',
    option3: 'Politics',
    option4: 'None',
   },{
    question :"Nigeria's international telephone country code is: ",
    answer: '234',
    option1: '234',
    option2: '502',
    option3: '235',
    option4: '342',
   },
   {
    question :"What is Nigeria's official language? ",
    answer: 'English',
    option1: 'Hausa',
    option2: 'English',
    option3: 'Yoruba',
    option4: 'Igbo',
   },
   {
    question :"In the 2010s Nigeria's population is approximately how many million: ",
    answer: '174',
    option1: '17',
    option2: '174',
    option3: '211',
    option4: '251',
   },
   {
    question :"Nigeria is named after a: ",
    answer: 'River',
    option1: 'People',
    option2: 'Lake',
    option3: 'Mountain',
    option4: 'River',
   },
   {
    question :"The national animal emblem of Nigeria is an: ",
    answer: 'Eagle',
    option1: 'Elephant',
    option2: 'Eagle',
    option3: 'Elk',
    option4: 'Earwig',
   },
   {
    question :"Nigeria's internet country top level domain is:",
    answer: '.ng',
    option1: '.ni',
    option2: '.nr',
    option3: '.ng',
    option4: '.ne',
   },
   {
    question :"Chappal Waddi is Nigeria's:",
    answer: 'Highest mountain',
    option1: 'Highest mountain',
    option2: 'Oldest church',
    option3: 'Longest river',
    option4: 'Biggest lake',
   },
   {
    question :"Enugu, Kano Pillars, Heartland, and Lobi Stars are famous Nigerian:",
    answer: 'Football clubs',
    option1: 'TV Soaps',
    option2: 'National parks',
    option3: 'Football clubs',
    option4: ' Biggest lake',
   },
   {
    question :"Nigeria is divided into how many geopolitical zones?",
    answer: '6',
    option1: '12',
    option2: '6',
    option3: '4',
    option4: '7',
   },
   {
    question :" What was the first capital city in Nigeria?",
    answer: 'Calabar',
    option1: 'Lagos',
    option2: 'Abuja',
    option3: 'Calabar',
    option4: 'Akure',
   },
   {
    question :"What is the name of Nigerian senior national team in football (men team)?",
    answer: 'Super Eagles',
    option1: 'Flying Eagles',
    option2: 'Super Eaglet',
    option3: 'Super Eagles',
    option4: 'Super Falcons',
   },
   {
    question :"Who gave Nigeria her name?",
    answer: 'Flora Shaw',
    option1: 'Queen Elizabeth',
    option2: 'Flora Shaw',
    option3: 'Sanni Abacha',
    option4: 'Abraham Lincon',
   },

  ]

}
