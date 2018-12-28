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
      biopic: 'www.tom.com',
      display: function() {}
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

}());
