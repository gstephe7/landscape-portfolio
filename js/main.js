var page = new Vue({
  el: '#page',
  data: {
    spaceship: {
      img: 'img/spaceship.png',
      moveShip: false
    },
    about: {
      text: 'ABOUT',
      img: 'img/building1.png'
    },
    projects: {
      text: 'PROJECTS',
      img: 'img/building2.png'
    },
    contact: {
      text: 'CONTACT',
      img: 'img/building3.png'
    }
  },
  methods: {
    moveDown: function() {
      this.spaceship.moveShip = !this.spaceship.moveShip;
    }
  }
})


/*class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

const app = new Vue({
  el: '#nav',
  data: {
    keyword: "",
    postList: [
      new Post(
        'Vue.js',
        'https://vuejs.org/',
        'Chris',
        'https://vuejs.org//images/logo.png'
      ),
      new Post(
        'React.js',
        'https://facebook.github.io/react/',
        'Tim',
        'http://daynin.github.io/clojurescript-presentation/img/react-logo.png'
      ),
      new Post(
        'Angular.js',
        'https://angularjs.org/',
        'Sam',
        'https://angularjs.org/img/ng-logo.png'
      ),
      new Post(
        'Ember.js',
        'http://emberjs.com/',
        'Rachel',
        'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
      ),
      new Post(
        'Meteor.js',
        'https://www.meteor.com/',
        'Chris',
        'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
      ),
      new Post(
        'Aurelia',
        'http://aurelia.io/',
        'Tim',
        'https://cdn.auth0.com/blog/aurelia-logo.png'
      ),
      new Post(
        'Node.js',
        'https://nodejs.org/en/',
        'A. A. Ron',
        'https://code-maven.com/img/node.png'
      ),
      new Post(
        'Pusher',
        'https://pusher.com/',
        'Alex',
        'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
      ),
      new Post(
        'Feathers.js',
        'http://feathersjs.com/',
        'Chuck',
        'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
      ),
    ]
  },
  methods: {
    toggleOnOff: function() {
      this.onOff = !this.onOff;
    }
  },
  computed: {
    filteredList: function() {
      return this.postList.filter((post) => {
        return post.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  }
});*/


/*var about = {
  summary: {
    title: '<div class="col-xs-12"><h3 class="title">ABOUT</h3></div>',
    img: '<div class="col-xs-3"><img src="img/profilepic.jpg" class="profile-pic img-circle"></div>',
    intro: '<div class="col-xs-9"><p class="info-text">Hello, my name is Greg Stephens. I\'m a Front-End Web Developer transitioning from a 3 year career as a teacher. I\'m a flexible and creative professional with a strong desire to learn and grow within a new industry.</p></div>'
  },
  skills: {
    title: '<div class="col-xs-12"><h3 class="title">SKILLS</h3></div>',
    skills1: '<div class="col-xs-6"><ul class="skills text-center"><li class="info-text">JavaScript</li><li class="info-text">HTML</li><li class="info-text">CSS</li><li class="info-text">jQuery</li></ul></div>',
    skills2: '<div class="col-xs-6"><ul class="skills text-center"><li class="info-text">Bootstrap</li><li class="info-text">Git</li><li class="info-text">Teaching</li><li class="info-text">SEO</li></ul></div>'
  }
};

function aboutSection() {
  $('.info').empty();
  $('.info').append('<div class="row">' + about.summary.title + '</div><div class="row">' + about.summary.img + about.summary.intro + '</div><hr><div class="row>' + about.skills.title + '</div><div class="row">' + about.skills.skills1 + about.skills.skills2 + '</div><hr>');
  $('.info').slideToggle(1000);
};

//moves spaceship down
function moveSpaceship() {
  $('.spaceship').animate({
    'marginTop' : "+=200px"
  }, 1000);
}

//moves spaceship up
function hideSpaceship() {
  $('.spaceship').animate({
    'marginTop' : "-=200px"
  }, 1000);
}

$('.about-btn').click(function() {
    moveSpaceship();
    setTimeout(function() {
      hideSpaceship();
    }, 2000);
    aboutSection();
});

$('.projects-btn').click(function() {
  moveSpaceship();
  setTimeout(function() {
    hideSpaceship();
  }, 2000);

});

$('.contact-btn').click(function() {
  moveSpaceship();
  setTimeout(function() {
    hideSpaceship();
  }, 2000);

});
*/
