$(function() {

  var model = {

    bio: {
      name: 'Tom Tommy',
      role: 'Developer',
      contacts: {
        mobile: '555-555-5555',
        email: 'tom@tommy.com',
        github: 'github.com/tom',
        twitter: 'twitter.com',
        location: 'New York City'
      },
      welcomeMessage: 'Hiya Peoples',
      skills: ['HTML', 'CSS', 'Making Coffee'],
      biopic: 'www.tom.com'
    },

    education: {
      schools: [{
          name: 'string',
          location: 'string',
          degree: 'string',
          majors: ['array of strings'],
          dates: 'string (works with a hyphen between them)',
          url: 'string (optional)'
        },
        {
          name: 'string',
          location: 'string',
          degree: 'string',
          majors: ['array of strings'],
          dates: 'string (works with a hyphen between them)',
          url: 'string (optional)'
        }
      ],
      onlineCourses: [{
          title: 'string',
          school: 'string',
          dates: 'string (works with a hyphen between them)',
          url: 'string'
        },
        {
          title: 'string',
          school: 'string',
          dates: 'string (works with a hyphen between them)',
          url: 'string'
        },
      ],
      display: function() {}

    },

    work: {
      jobs: [{
          employer: 'string',
          title: 'string',
          location: 'string',
          dates: 'string (Can be in progress)',
          description: 'string'
        },
        {
          employer: 'string',
          title: 'string',
          location: 'string',
          dates: 'string (Can be in progress)',
          description: 'string'
        }
      ],
      display: function() {}
    },

    projects: {
      projects: [{
          title: 'string',
          dates: 'string (works with a hyphen between them)',
          description: 'string',
          images: ['array with string urls']
        },
        {
          title: 'string',
          dates: 'string (works with a hyphen between them)',
          description: 'string',
          images: ['array with string urls']
        }
      ],
      display: function() {}
    }
  };

  var octopus = {

    init: function() {
        bioView.init();
        educationView.init();
    }

  };

  var bioView = {

    init: function() {

      this.$header = $('#header');
      this.$topContacts = $('#topContacts');
      var formattedName = HTMLheaderName.replace("%data%", model.bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
      var formattedMobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
      var formattedTwitter = HTMLtwitter.replace("%data%", model.bio.contacts.twitter);
      var formattedGithub = HTMLgithub.replace("%data%", model.bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", model.bio.contacts.location);
      //var formattedBioPic = HTMLbioPic.replace("%data%", model.bio.contacts.location);
      var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage);

      var formattedSkills = '';
      model.bio.skills.forEach(function(skill) {
          formattedSkills += HTMLskills.replace("%data%", skill);
      });

      this.$header.append(formattedName, formattedRole, formattedWelcomeMsg);
      this.$topContacts.append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
      this.$header.append(HTMLskillsStart);
      $('#skills').append(formattedSkills);

    }
  };

  var educationView = {

    init: function() {

      this.$education = $('#education');

      var formattedSchools = '';
      model.education.schools.forEach(function(school) {
          formattedSchools += HTMLschoolName.replace("%data%", school.name);
          formattedSchools += HTMLschoolLocation.replace("%data%", school.location);
          formattedSchools += HTMLschoolDegree.replace("%data%", school.degree);
          school.majors.forEach(function(major) {
            formattedSchools += HTMLschoolMajor.replace("%data%", major);
          });

          formattedSchools += HTMLschoolDates.replace("%data%", school.dates);
      });

      console.log(formattedSchools);

      this.$education.append(HTMLschoolStart);
      $('.education-entry').append(formattedSchools);

    }
  };

  octopus.init();

}());
