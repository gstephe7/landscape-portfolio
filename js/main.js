var Main = new Vue({
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
      displayModal: false,
      displayAbout: false,
	    title: 'ABOUT',
	    img: 'img/profilepic.png',
	    background: 'Hello, my name is Greg Stephens and I\'m a Front-End Web Developer from Athens, GA. I pride myself on being creative, easy-going, and driven to grow within my career.',
	    skills: {
		    title: 'SKILLS',
		    skillsLt: [
		      {name: 'JavaScript', url: 'https://www.javascript.com'},
		      {name: 'Vue.js', url: 'https://vuejs.org/'},
		      {name: 'jQuery', url: 'https://jquery.com/'},
		      {name: 'HTML5', url: 'https://en.wikipedia.org/wiki/HTML5'},
		      {name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'},
		      {name: 'Bootstrap', url: 'http://getbootstrap.com/'},
		      {name: 'Git', url: 'https://git-scm.com/'}
		    ],
        skillsRt: [
          {name: 'SEO', url: 'https://en.wikipedia.org/wiki/Search_engine_optimization'},
		      {name: 'Google Analytics', url: 'https://analytics.google.com'},
		      {name: 'Google Adsense', url: 'https://www.google.com/adsense/start'},
		      {name: 'Google Adwords', url: 'https://adwords.google.com'},
		      {name: 'Teaching', url: 'https://en.wikipedia.org/wiki/Teacher'},
		      {name: 'Blogging', url: 'https://en.wikipedia.org/wiki/Blog'},
		      {name: 'Studio One', url: 'http://www.presonus.com/products/studio-one/'}
        ]
	    },
      education: {
        title: 'EDUCATION',
        udacity: {
          name: 'Udacity',
          degree: 'Nanodegree',
          major: 'Front-End Web Development',
          dates: '2017',
          img: 'img/udacity.jpg',
          url: 'https://www.udacity.com/'
        },
        kennesaw: {
          name: 'Kennesaw State University',
          degree: 'Bachelor\'s',
          major: 'History Education',
          dates: '2009-2012',
          img: 'img/ksu.jpg',
          url: 'http://www.kennesaw.edu/'
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
      displayModal: false,
      displayProjects: false,
      title: 'PROJECTS',
      arcadeGame: {
        name: 'Frogger: Presidential Edition',
        img: 'img/arcadegame.jpg',
        description: 'Created a clone of the classic arcade game, Frogger. This Udacity project was completed using object-oriented JavaScript and HTML5 Canvas. I put my own spin on this game by using presidential candidates as the players.'
      }
    },
    contactSection: {
      displayModal: false,
      displayContact: false,
      title: 'CONTACT',
      name: 'Name: Greg Stephens',
      phone: {
        cell: '678-863-0189',
        call: 'tel:678-863-0189'
      },
      email: {
        address: 'gstephe7@gmail.com',
        url: 'mailto:gstephe7@gmail.com'
      },
      linkedin: {
        username: 'gstephe7',
        url: 'https://www.linkedin.com/in/gstephe7'
      },
      github: {
        username: 'gstephe7',
        url: 'https://www.github.com/gstephe7'
      },
      location: {
        title: 'LOCATION',
        src: 'https://maps.googleapis.com/maps/api/staticmap?center=Athens,+GA&zoom=4&size=600x400&maptype=roadmap&markers=color:red%7Clabel:C%7C33.951935,-83.357567&key=AIzaSyBLuC7c4N_HV-zpJ6OmHElbrlH6RmQU4G4'
      }
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
      var self = this;
      this.displayModal = !this.displayModal;
      this.aboutSection.displayModal = !this.aboutSection.displayModal;
      setTimeout(function() {
        self.aboutSection.displayAbout = !self.aboutSection.displayAbout;
      }, 10);
    },
    showProjects: function() {
      var self = this;
      this.displayModal = !this.displayModal;
      this.projectsSection.displayModal = !this.projectsSection.displayModal;
      setTimeout(function() {
        self.projectsSection.displayProjects = !self.projectsSection.displayProjects;
      }, 10);
    },
    showContact: function() {
      var self = this;
      this.displayModal = !this.displayModal;
      this.contactSection.displayModal = !this.contactSection.displayModal;
      setTimeout(function() {
        self.contactSection.displayContact = !self.contactSection.displayContact;
      }, 10);
    }
  }
});
