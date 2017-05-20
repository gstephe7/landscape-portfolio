var page = new Vue({
  el: '#main',
  data: {
    displayModal: false,
    spaceship: {
      img: 'img/spaceship.png',
      moveShip: false
    },
	  welcome: {
	    title: 'GREG STEPHENS',
	    img: 'img/profilepic.jpg',
	    subtitle: 'FRONT-END WEB DEVELOPER',
      showWelcome: false
	  },
    aboutNav: {
      text: 'ABOUT',
      img: 'img/building1.png'
    },
    projectsNav: {
      text: 'PROJECTS',
      img: 'img/building2.png'
    },
    contactNav: {
      text: 'CONTACT',
      img: 'img/building3.png'
    },
	  aboutSection: {
      displayAbout: false,
	    title: 'ABOUT',
	    img: 'img/profilepic.png',
	    background: 'Hello, my name is Greg Stephens and I\'m a Front-End Web Developer from Athens, GA. I pride myself on being creative, easy-going, and driven to grow within my career.',
	    skills: {
		    title: 'SKILLS',
		    skillsLt: [
		      'JavaScript',
		      'Vue.js',
		      'jQuery',
		      'HTML5',
		      'CSS3',
		      'Bootstrap',
		      'Git'
		    ],
        skillsRt: [
          'SEO',
		      'Google Analytics',
		      'Google Adsense',
		      'Google Adwords',
		      'Teaching',
		      'Blogging',
		      'Studio One'
        ]
	    },
      education: {
        title: 'EDUCATION',
        udacity: {
          name: 'Udacity',
          degree: 'Nanodegree',
          major: 'Front-End Web Development',
          dates: '2017',
          img: 'img/udacity.jpg'
        },
        kennesaw: {
          name: 'Kennesaw State University',
          degree: 'Bachelor\'s',
          major: 'History Education',
          dates: '2009-2012',
          img: 'img/ksu.jpg'
        }
      },
      interests: {
        title: 'INTERESTS',
        interestsLt: [
          'Being a Dad',
          'Music',
          'Creating things',
          'Politics',
          'Economics'
        ],
        interestsRt: [
          'History',
          'Investing',
          'Georgia Bulldogs Football',
          'Atlanta United Soccer',
          'Louis CK\'s Comedy'
        ]
      }
	  },
    projectsSection: {
      displayProjects: false,
      title: 'PROJECTS',
      arcadeGame: {
        name: 'Frogger: Presidential Edition',
        img: 'img/arcadegame.jpg',
        description: 'Created a clone of the classic arcade game, Frogger. This Udacity project was completed using object-oriented JavaScript and HTML5 Canvas. I put my own spin on this game by using presidential candidates as the players.'
      }
    },
    contactSection: {
      displayContact: false,
      title: 'CONTACT'
    }
  },
  methods: {
    moveDown: function() {
      this.spaceship.moveShip = true;
    },
	  slideIn: function() {
      var self = this;
	    setTimeout(function() {
		    self.welcome.showWelcome = true;
	    }, 1500);
	  },
    showAbout: function() {
      this.displayModal = !this.displayModal;
      this.aboutSection.displayAbout = !this.aboutSection.displayAbout;
    },
    showProjects: function() {
      this.displayModal = !this.displayModal;
      this.projectsSection.displayProjects = !this.projectsSection.displayProjects;
    },
    showContact: function() {
      this.displayModal = !this.displayModal;
      this.contactSection.displayContact = !this.contactSection.displayContact;
    }
  }
});
