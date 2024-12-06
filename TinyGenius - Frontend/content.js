// content.js

const contentData = {
  gradeContent: {
    1: [
      {
        subject: "MATHS",
        img: "Assets/home page assets/subs/doodle maths (2).jpg",
        link: "gr1-maths.html",
        units: [
          {
            unitTitle: "Pre-mathematical skills",
            games: [
              {
                id: 'math-u1-g1',
                name: "Number Explorers",
                url: "https://www.educaplay.com/game/21660299-number_explorers_quiz.html",
                image: "Assets/grades/content/educaplay froggy.png"
              },
              {
                id: 'math-u1-g2',
                name: "Match the Shapes",
                url: "https://www.educaplay.com/game/21681461-match_the_shapes.html",
                image: "Assets/grades/content/educaplay matching.png",
              },
            ],
            quizzes: [
              {
                name: "Math Quiz",
                url: "https://www.educaplay.com/game/21704867-fill_in_the_blanks_discovering_patterns.html",
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
              { title: "Number Game", link: "game2-maths.html" },
            ],
            quizzes: [
              { title: "Number Quiz", link: "quiz3-maths.html" }
            ],
            videos: [
              { title: "Learning Numbers", link: "video2-maths.mp4" },
            ]
          },
        ],
      },
      {
        subject: "ENGLISH",
        img: "Assets/home page assets/subs/doodle eng.jpg",
        units: [
          {
            unitTitle: "Grammar Basics",
            games: [
              { title: "English Word Search", link: "game1-english.html" },
              { title: "Grammar Quiz", link: "quiz1-english.html" },
            ],
            quizzes: [
              { title: "Grammar Quiz", link: "quiz2-english.html" }
            ],
            videos: [
              { title: "English Basics", link: "video1-english.mp4" },
            ]
          },
        ],
      },
      {
        subject: "ICT",
        img: "Assets/home page assets/subs/doodle ict.jpg",
        units: [
          {
            unitTitle: "Intro to ICT",
            games: [
              { title: "ICT Puzzle", link: "game1-ict.html" },
              { title: "Tech Quiz", link: "quiz1-ict.html" },
            ],
            quizzes: [
              { title: "ICT Quiz", link: "quiz1-ict.html" }
            ],
            videos: [
              { title: "Introduction to ICT", link: "video1-ict.mp4" },
            ]
          },
        ],
      },
      {
        subject: "ART",
        img: "Assets/home page assets/subs/doodle art.jpg",
        units: [
          {
            unitTitle: "Art Basics",
            games: [
              { title: "Art Puzzle", link: "game1-art.html" },
              { title: "Art Quiz", link: "quiz1-art.html" },
            ],
            quizzes: [
              { title: "Art Quiz", link: "quiz2-art.html" }
            ],
            videos: [
              { title: "Creative Arts", link: "video1-art.mp4" },
            ]
          },
        ],
      },
      {
        subject: "SCIENCE",
        img: "Assets/home page assets/subs/doodle science.jpg",
        units: [
          {
            unitTitle: "Physics Basics",
            games: [
              { title: "Science Quiz", link: "quiz1-science.html" },
            ],
            quizzes: [
              { title: "Physics Quiz", link: "quiz3-science.html" }
            ],
            videos: [
              { title: "Physics 101", link: "video1-science.mp4" },
            ]
          },
        ],
      },
    ]
  },
  gradeButtons: document.querySelectorAll('.grade-btn'),
  gradeBanner: document.getElementById('grade-banner'),
  sec3: document.getElementById('sec3'),
  rectangleContainer: document.getElementById('rectangle-container'),
};

export default contentData;
