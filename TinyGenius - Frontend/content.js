// content.js

const contentData = {
  gradeContent: {
    1: [
      {
        subject: "MATHS",
        img: "Assets/home page assets/subs/doodle maths (2).jpg",
        link: "subject.html",
        units: [
          {
            unitTitle: "Pre-mathematical skills",
            games: [
              {
                id: 'math-u1-g1',
                name: "Number Explorers",
                url: "game.html?gameUrl=https://www.educaplay.com/game/21660299-number_explorers_quiz.html",
                image: "Assets/grades/content/educaplay froggy.png"
              },
              {
                id: 'math-u1-g2',
                name: "Match the Shapes",
                url: "game.html?gameUrl=https://www.educaplay.com/game/21681461-match_the_shapes.html",
                image: "Assets/grades/content/educaplay matching.png",
              },
            ],
            quizzes: [
              {
                name: "Math Quiz",
                url: "game.html?gameUrl=https://www.educaplay.com/game/21704867-fill_in_the_blanks_discovering_patterns.html",
                image: "Assets/grades/content/educaplay fill in the blanks.png",
              }
            ],
            videos: [
              {
                name: "Learn Addition",
                videoUrl: "https://www.youtube.com/embed/tVHOBVAFjUw",
              },
            ]
          },
          {
            unitTitle: "Numbers",
            games: [
              {
                id: 'math-u1-g1',
                name: "Number Explorers",
                url: "game.html?gameUrl=https://www.educaplay.com/game/21660299-number_explorers_quiz.html",
                image: "Assets/grades/content/educaplay froggy.png"
              },
            ],
            quizzes: [
              {
                id: 'math-u1-g1',
                name: "Number Explorers",
                url: "game.html?gameUrl=https://www.educaplay.com/game/21660299-number_explorers_quiz.html",
                image: "Assets/grades/content/educaplay froggy.png"
              },            ],
            videos: [
              {
                id: 'math-u1-g1',
                name: "Number Explorers",
                url: "game.html?gameUrl=https://www.educaplay.com/game/21660299-number_explorers_quiz.html",
                image: "Assets/grades/content/educaplay froggy.png"
              },            ]
          },

          {
            unitTitle: "Measurements",
            games: [
              
            ],
            quizzes: [
              
            ],
            videos: [
              
            ]
          },

          {
            unitTitle: "Money",
            games: [

            ],
            quizzes: [

            ],
            videos: [

            ]
          },

          
          {
            unitTitle: "Shapes and Figures",
            games: [

            ],
            quizzes: [

            ],
            videos: [

            ]
          },

          
        ],
      },

      {
        subject: "ENGLISH",
        img: "Assets/home page assets/subs/doodle eng.jpg",
        link: "subject.html",
        units: [
        ],
      },

      {
        subject: "ICT",
        img: "Assets/home page assets/subs/doodle ict.jpg",
        link: "subject.html",
        units: [
        ],
      },

      {
        subject: "ART",
        img: "Assets/home page assets/subs/doodle art.jpg",
        link: "subject.html",
        units: [
        ],
      },
    ],



    2: [

      {
        subject: "ENGLISH",
        img: "Assets/home page assets/subs/doodle eng.jpg",
        link: "subject.html",
        units: [
        ],
      },

      {
        subject: "MATHS",
        img: "Assets/home page assets/subs/doodle maths (2).jpg",
        link: "subject.html",
        units: [
        ],
      },

      {
        subject: "ART",
        img: "Assets/home page assets/subs/doodle art.jpg",
        link: "subject.html",
        units: [
        ],
      },
    ],




    3: [

      {
        subject: "ART",
        img: "Assets/home page assets/subs/doodle art.jpg",
        link: "subject.html",
        units: [
        ],
      },
      {
        subject: "ENGLISH",
        img: "Assets/home page assets/subs/doodle eng.jpg",
        link: "subject.html",
        units: [
        ],
      },

      {
        subject: "MATHS",
        img: "Assets/home page assets/subs/doodle maths (2).jpg",
        link: "subject.html",
        units: [
        ],
      },
    ],



  },

  gradeButtons: document.querySelectorAll('.grade-btn'),
  gradeBanner: document.getElementById('grade-banner'),
  sec3: document.getElementById('sec3'),
  rectangleContainer: document.getElementById('rectangle-container'),
};

export default contentData;
