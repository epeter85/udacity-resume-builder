$(function() {

  var data = {

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
      biopic: 'www.tom.com',
      display: function() {

          console.log('bio display');
          this.$header = $('#header');
          this.$topContacts = $('#topContacts');
          var formattedName = HTMLheaderName.replace("%data%", this.name);
          var formattedRole = HTMLheaderRole.replace("%data%", this.role);
          var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
          var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
          var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
          var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
          var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
          //var formattedBioPic = HTMLbioPic.replace("%data%", this.contacts.location);
          var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

          this.$header.append(formattedName, formattedRole, formattedWelcomeMsg);
          this.$topContacts.append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
      }
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

  };

  var headerView = {
     init: function() {
          var formattedLocation = HTMLheaderName.replace("%data%", model.bio.name);
          this.$header = $('#header');
          this.$header.append(formattedLocation);
      }
  };

  //headerView.init();
  data.bio.display();

}());
