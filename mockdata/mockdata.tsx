import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

export const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Zagreb',
      points: '20',
      rows: 2,
      cols: 2,
      featured: true,
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Rim',
      points: '15',
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Berlin',
      points: '25',
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Verona',
      points: '15',
      cols: 2,
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Sarajevo',
      points: '25',
      link: '/quiz',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      points: '15',
      rows: 2,
      cols: 2,
      featured: true,
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      points: '10',
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      points: '15',
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      points: '20',
      link: '/quiz',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      points: '25',
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      points: '15',
      link: '/quiz',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      points: '10',
      link: '/quiz',
      cols: 2,
    },
  ];

 /*export const QuizData = [
    {
        question_id: '1',
        question: 'Is Zagreb in Croatia?',
        points: '5',
        ans_corr: 'Yes',
        answers: ['Yes', 'No'],
        quizid: '1'
    }, 
    {
        question_id: '2',
        question: 'How many citizens does Zagreb have?',
        points: '5',
        ans_corr: '1 million',
        answers: ['500 thousands', '1 million', '2 million'],
        quizid: '1'
    }
]

export const QuizAll = [
    {
        name: 'Zagreb',
        id: '1',
        elements: QuizData,
    }
]
/*export const answer = {
  value: 'odgovor1',
  correct: true
}

export const question = {
      question_id : '',
      question_title : '?',
      points : 1,
      answers : [answer, answer, answer],
}

export const quiz = {
    name : 'ime kviza',
    id : 'broj',
    max_points : 1,
    questions : [question, question, question]
}

export const All_quizzes = {
  quizzes : [quiz, quiz, quiz]
}

*/
const generateQuestions = (count: number) => {
  const arr = Array.from(Array(count).keys());

  return arr.map((_, idx) => ({
    id: `${idx}-question`,
    text: `Question ${idx + 1}`,
    description: faker.lorem.sentence(),
    answers: [{
      id: `${idx}-answer`,
      value: faker.lorem.sentence(),
      correct: idx % 2 === 0,
    },
    {
      id: `${idx}-answer`,
      value: faker.lorem.sentence(),
      correct: idx % 2 === 0,
    }]
  }))
}

export const generateQuiz = (count: number, questionCount: number) => {
  const arr = Array.from(Array(count).keys());

  return arr.map((_, idx) => ({
    id: `${idx}-quiz`,
    title: faker.address.cityName(),
    image: faker.image.city(),
    description: faker.lorem.sentence(),
    questions: generateQuestions(idx + 1)
  }))
}

interface IAnswer {id: string, value: string, correct: boolean}
export interface IQuestion {id: string, text: string, description: string, answers: IAnswer[] }
export interface IQuiz {id: string, title: string, image: string, description: string, questions: IQuestion[] }

