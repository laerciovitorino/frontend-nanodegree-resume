var bio = {
  name: "Laércio Vitorino",
  role: "Font-end Web Developer",
  contacts: {
    mobile: "+55 83 99984-4667",
    email: "laerciovitorino@gmail.com",
    github: "github.com/laerciovitorino",
    twitter: "@laerciovitorino",
    location: "Campina Grande - PB"
  },
  biopic: "images/me.jpg",
  welcomeMessage: "Hi everyone!",
  skills: ["Energy", "Enthusiasm", "Firefighter spirit"],
  display: function() {
    if (bio.skills.length > 0) {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedTwitter = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      $("#header").append(formattedBioPic);
      $("#header").append(formattedWelcomeMessage);

      $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
      });

      var inName = function() {
        var splittedName = bio.name.split(" ");
        var firstName = splittedName[0][0].toUpperCase() + splittedName[0].slice(1);
        var lastName = splittedName[1].toUpperCase();

        return firstName + " " + lastName;
      };
    }
  }
};

bio.display();

var work = {
  jobs: [
    {
      employer: "SPLab",
      title: "Web Front-end Developer",
      location: "Campina Grande",
      dates: "2016-2017",
      description: "I've worked at the SPLab as a Junior Web Developer in a project called Term Monitor, a partnership between the SPLab and the Ingenico Group. My role in that project was to manage, with another work partner, a small, but very efficient and competent team, leading this group to develop and improve applications for payment solutions, as well as develop web applications to help clients to get a better control and management of their products. Those web applications were developed using AngularJS framework along with HTML, CSS3, JavaScript, JQuery, Bootstrap and some other libraries."
    },
    {
      employer: "Embedded Lab",
      title: "Web Front-end Developer",
      location: "Campina Grande",
      dates: "2015",
      description: "I've worked as a Junior Web Application Tester and Web Application Developer at Embedded Laboratory. I was responsible for planning test cases and test suites for the back-end as well as the front-end of a web application. For the back-end I've written and performed unit tests using the JUnit framework, whereas for the front-end I've performed the same tasks using the Protractor testing framework."
    },
    {
      employer: "Embedded Lab",
      title: "Web Front-end Developer",
      location: "Campina Grande",
      dates: "2015",
      description: "I've worked as a Junior Android Application Tester as well as a Web Application Developer at Embedded Laboratory. I was responsible to create and execute test plans on Android applications and Android games, using the Espresso testing framework to automate UI tests in order to assure that the behavior of the apps was in accordance with what was specified and required by the client. I was also responsible to perform automated tests on web applications using the Protractor framework. In addition, I got involved in the development of a web application using AngularJS(1.x) framework for UI development and to manage all the front-end logic; and the Django framework to deal with the development of the back-end part. That web application was aimed for managing Android commercial campaigns by the Asus stakeholders."
    }
  ],
  display: function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};

work.display();

var projects = {
  projects: [
    {
      title: "Aki",
      dates: "2014 - Present",
      description: "Aki is a mobile chat application aimed to conversations in group with a great differential: people using it talk to others in the same place.",
      images: ["images/aki-logo.png"]
    },
    {
      title: "Sony Android Tech Center",
      dates: "Aug 2014 - Feb 2015",
      description: "O Android Tech Center tem como objetivo a formação de recursos humanos em tecnologias de softwares para dispositivos portáteis, através da capacitação para desenvolvimento de software mobile em Android.",
      images: ["images/embedded-lab.jpg"]
    },
    {
      title: "Asus App Dev Center",
      dates: "Fev 2015 - Aug 2015",
      description: "O App Dev Center tem como objetivo a formação de recursos humanos em tecnologias de softwares para dispositivos portáteis, direcionando a capacitação para um desenvolvimento de software em Android, devido à abrangência de dispositivos compatíveis e o amplo suporte de ferramentas para o desenvolvimento de aplicações.",
      images: ["images/embedded-lab.jpg"]
    },
    {
      title: "HP SW-Residency",
      dates: "Mar 2014 - May 2014",
      description: "The HP SW-Residency is a training program which has as its main goal to form qualified workforce in data analysis. This project is a cooperation between HP and UFCG to empower computer science students in the state of art in analytics through application of data analysis and cloud computing to develop practical projects.",
      images: ["images/analytics.png"]
    },
    {
      title: "Speaker Verification",
      dates: "Oct 2009 - Oct 2011",
      description: "Develop an IP-core module for Automated Vocal Identity Verification, which objective is to verify if a speaker is really who says to be. In this case, the speaker will be accepted or rejected from the comparison between the test pattern and the reference pattern previously stored.",
      images: ["images/lad-logo.jpg"]
    }
  ],
  display: function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      if (project.images.length > 0) {
        project.images.forEach(function(image) {
          var formattedImage = HTMLprojectImage.replace("%data%", image);
          $(".project-entry:last").append(formattedImage);
        });
      }
    });
  }
};

projects.display();

var education = {
  schools: [
    {
      name: "Universidade Federal de Campina Grande",
      location: "Campina Grande, PB",
      degree: "BA",
      majors: ["CS"],
      dates: "2015",
      url: "www.ufcg.edu.br"
    },
    {
      name: "Loyola University of Chicago",
      location: "Chicago, IL",
      degree: "BA",
      majors: ["CS"],
      dates: "2013",
      url: "www.luc.edu"
    },
    {
      name: "Oklahoma Christian University",
      location: "Edmond, OK",
      degree: "BA",
      majors: ["CS"],
      dates: "2012",
      url: "www.oc.edu"
    }
  ],
  onlineCourses: [
    {
      title: "Front-end Web Development",
      school: "Udacity",
      dates: "2017",
      url: "www.udacity.com"
    }
  ],
  display: function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajor);
    });

    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%", course.url);

      $(".education-entry:last").append(formattedTitle + formattedSchool);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedURL);
    });
  }
};

education.display();

$("#mapDiv").append(googleMap);
