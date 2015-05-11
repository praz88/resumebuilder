var bio = {
  'name': 'Prashanth B N',
  'role': 'Web Developer',
  'contacts': [{
    'mobile': '+917259884774',
    'email': 'prazanth2006@gmail.com',
    'github': 'praz88',
    'twitter': '@praz88',
    'location': 'Bangalore'
  }],
  'welcomeMessage': 'Hello!',
  'skills': ['html', 'css', 'javascript', 'asp.net mvc', 'PHP', 'mysql', 'Windows Phone'],
  'biopic': '1.jpg',
  'display': function() {
    this.displayHeader();
    this.displayBioPic();
    this.displayWelcomeMessage();
    this.displaySkills();
    this.displayContacts();
  },
  'displayHeader': function() {
    $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
  },
  'displayContacts': function() {
    $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', this.contacts[0].mobile));
    $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', this.contacts[0].email));
    $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', this.contacts[0].github));
    $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', this.contacts[0].twitter));
    $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', this.contacts[0].location));
  },
  'displayWelcomeMessage': function() {
    $('#welcomeMessage').append(HTMLWelcomeMsg.replace('%data%',this.welcomeMessage));
  },
  'displayBioPic': function() {
    $('#topBio').prepend(HTMLbioPic.replace('%data%', '/images/'+this.biopic));
  },
  'displaySkills': function() {
    var skillsHTML = HTMLskillsStart;
    for(var skill in bio.skills) {
      skillsHTML += HTMLskills.replace('%data%', bio.skills[skill]);
    }
    skillsHTML = skillsHTML + HTMLskillsEnd;
    $('#topSkills').append(skillsHTML);
  }
};
var education = {
'schools': [{
  'name': 'NITK, Surathkal',
  'location': 'Surathkal, Mangalore',
  'degree': 'BTech',
  'majors': ['Information Technology'],
  'dates': '2006-2010',
  'url': 'http://www.nitk.ac.in'
}],
'onlineCourses': [],
'displaySchools': function() {
  for(var school in this.schools) {
    var entrySchoolName = HTMLschoolName.replace('%data%', this.schools[school].name);
    var entrySchoolLocation = HTMLschoolLocation.replace('%data%', this.schools[school].location);
    var entrySchoolDegree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
    var entrySchoolMajors = HTMLschoolMajor.replace('%data%', this.schools[school].majors[0]);
    var entrySchoolDates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
    $('#education').append(HTMLschoolStart + entrySchoolName + entrySchoolDegree + entrySchoolDates + entrySchoolLocation + entrySchoolMajors + HTMLschoolEnd);
  }
},
'display': function() {
  this.displaySchools();
}
};
var work = {
  'jobs': [{
    'employer': 'Babajob Services Pvt. Ltd.',
    'title': 'Web Developer',
    'location': 'Bangalore, India',
    'dates': 'January 2014 - Present',
    'description': ''
  }],
  'display': function() {
    this.displayWorkExperience();
  },
  'displayWorkExperience': function() {
    for(var job in this.jobs) {
      var entryWorkEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
      var entryWorkTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
      var entryWorkDates = HTMLworkDates.replace('%data%', this.jobs[job].dates);
      var entryWorkLocation = HTMLworkLocation.replace('%data%', this.jobs[job].location);
      var entryWorkDescription = HTMLworkDescription.replace('%data%', this.jobs[job].description);
      $('#workExperience').append(HTMLworkStart + entryWorkEmployer + entryWorkTitle + entryWorkDates + entryWorkLocation + entryWorkDescription + HTMLworkEnd);
    }
  }
};
var projects = {
  'projects': [{
    'title': 'Social locator',
    'url': 'http://www.wootworld.in/symbian',
    'dates': 'Jan 2011',
    'description': 'A location based social networking site',
    'images': ['4.png']
  }, {
    'title': 'Doodle live',
    'url': 'http://www.windowsphone.com/en-us/store/app/doodlelive/e856da05-6273-4c12-8ec6-f592c00b22cb',
    'dates': 'Dec 2012',
    'description': 'A windows phone 7 game for drawing enthusiasts',
    'images': ['2.png']
  }, {
    'title': 'Virtual Book portal to donate and receive books',
    'url': 'https://github.com/praz88/Zav-DBRB',
    'dates': 'May 2014',
    'description': 'Web portal to see the books donated, and to donate or receive books from Zav foundation',
    'images': ['3.png']
  }],
  'display': function() {
    this.displayProjects();
  },
  'displayImagesInProject': function(project) {
    var entryProjectImages = '';
    if(project != undefined && project.images != undefined) {
      for(var image in project.images) {
        var entryProjectImage = HTMLprojectImage.replace('%data%', '/images/' + project.images[image]);
        entryProjectImages += entryProjectImage;
      }
    }
    return entryProjectImages;
  },
  'displayProjects': function() {
    for(var project in this.projects) {
      var entryProjectTitleLinkStart = HTMLprojectLinkStart.replace('%data%', this.projects[project].url);
      var entryProjectTitle = HTMLprojectLinkTitle.replace('%data%', this.projects[project].title);
      var entryProjectDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
      var entryProjectDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);
      var entryProjectImages = this.displayImagesInProject(this.projects[project]);
      $('#projects').append(HTMLprojectStart + entryProjectTitleLinkStart + entryProjectTitle +
        HTMLprojectLinkEnd + entryProjectDates + entryProjectDescription + entryProjectImages + HTMLprojectEnd);
    }
  }
};
var addMap = function() {
  $('#mapDiv').append(googleMap);
}
var buildResume = function() {
  bio.display();
  education.display();
  projects.display();
  work.display();
  addMap();
}

buildResume();
