class Biography {
    constructor(name, phoneNumber, emailAddress, city, state) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.city = city;
    this.state = state;   
    }
    get location(){
        return this.city + " " + this.state;
    }
}

class Job{
    constructor(position, company, date) {
        this.position = position;
        this.company = company;
        this.date = date;
    }
    get info(){
        return this.position + "<br> " + this.company + "<br> " + this.date + "<br>";
    }
}
class Education{
    constructor(institution, dates, major){
        this.institution = institution;
        this.dates = dates;
        this.major = major;
    }
}

var relevantJobs = {
    sectionOne: "Used ALM process development/documentation tools to plan and maintain project", 
    descriptionOne: {
        bulletOne: "Tackled website programming tasks (such as fixing bugs and adding features) using JavaScript, HTML, KnockOut, and C# using the .NET MVC framework.",
        bulletTwo: "<br>Used SharePoint and VSTS to document issues/enhancements that needed to be worked on in the web application."
    }, 
    sectionTwo: "Designed and developed an application/worked on existing application",
    descriptionTwo: { 
         bulletOne: "Planned for the project by creating goals, deciding who the audience would be, and what the aesthetics would look like.",
         bulletTwo: "<br>For the UI, I used JavaScript, HTML, CSS, AngularJS, and BootStrap.",
         bulletThree: "<br>For the back-end, I used C#. NET and created a SQL repository using design patterns."
    },
    sectionThree: "DBDW SQL",
    descriptionThree: {
         bulletOne: "Executed database tasks such as updating/adding data, creating tables and using stored procedures in the production environment.",
         bulletTwo: "<br>Created SSRS reports."
    },
    sectionFour: "Worked with manager to document team-end tasks, financials, and update manuals.",
    descriptionFour: {
         bulletOne: "Updated the web applications manual document when new features were implemented, pages were added, etc.", 
         bulletTwo: "<br>Created Technical Guide manual that other team members can reference to.",
         bulletThree: "<br>Updated and organized financial numbers in excel spreadsheets."
    }
}

var courses= ["Java Programming", " Discrete Structures", " Human Computer Interaction", " Computer Organization", " Data Structures", " Operating Systems", " Computer Networks"];

var testimonials = {
    Sotak: "<q>Ms. Rotteveel is a creative, enthusiastic, and insightful individual and is the type of person who can simultaneously draw on these traits to achieve the high level of performance that is characteristic of her work.</q><br>-Kenneth Sotak",
    Paul: "<br><q>Tali has a unique blend of creativity and technical ability that makes her a value add for any team.</q><br> -Paul Hermany"
    
}

var print = function(list){
    var listItems = '<dl>';
    for(var bullet in list){
        if(typeof list[bullet] == 'string') {
            listItems+= '<dt>'+ list[bullet] + '</dt>';
        }
        else {
            listItems+= '<dd>' + print(list[bullet]) + '</dd>';
        }
    }
    return listItems + '</dl>';
};

(function($) {
$.fn.SkillMeter = function(options) {
    var settings = $.extend({
    }, options );
 
    this.each(function() {
      var me = $(this);
      var title = me.data('title');
      var rating = me.data('rating');
      var scale = me.data('scale');
      me.append('<h3>' + title + '</h3>');
      for(var i = 0; i < scale; i++) {
        me.append('<span class="tick ' + (i < rating ? 'on' : 'off') + '"></span>')
      }
      me.append('<div class="clearfix"></div>')
    });
  };
})(jQuery);

 $('.skill-meter').SkillMeter();

const myResume = new Biography("Tali Rotteveel", "224-655-8058", "talirotteveel@hotmail.com", "Chicago", "IL");
const rightpoint = new Job("Developer Intern", "Rightpoint Consulting", "10/2017 - present");
const northside = new Job("Server", "Northside Bar and Grill", "04/2016 - 02/2017");
const decero = new Job("Server", "De Cero", "06/2015 - 10/2016");
const bluemartini = new Job("Hostess", "Blue Martini", "06/2014 - 07/2015");
const beanz = new Job("Barista", "Beanz Coffee Cafe", "06/2013 - 07/2014");
const school = new Education("Northeastern Illinois University", "2013-2017", "Computer Science");

document.getElementById("name").innerHTML = myResume.name;
document.getElementById("phone-number").innerHTML = myResume.phoneNumber;
document.getElementById("email-address").innerHTML = myResume.emailAddress;
document.getElementById("location").innerHTML = myResume.location;
document.getElementById("current-company").innerHTML = rightpoint.company;
document.getElementById("current-dates").innerHTML = rightpoint.date;
document.getElementById("current-position").innerHTML = rightpoint.position;
document.getElementById("employer").innerHTML = print(relevantJobs);
document.getElementById("school").innerHTML = school.institution;
document.getElementById("dates").innerHTML = school.dates;
document.getElementById("major").innerHTML = school.major;
document.getElementById("courses").innerHTML = "Relevant courses: " + courses; 
document.getElementById("testimonials").innerHTML = print(testimonials);
