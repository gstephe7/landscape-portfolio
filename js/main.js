const app = new Vue({
  el: '#nav',
  data: {
    keyword: "my name greg",
    onOff: true,
    styleObj: {
      backgroundColor: "red"
    }
  },
  methods: {
    toggleOnOff() {
      this.onOff = !this.onOff;
    }
  }
});


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
