const fs = require("fs")
const inquirer = require("inquirer")



class TeamMember {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return 'Team Member';
    }
  }
  class Manager extends TeamMember {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    getRole() {
      return 'Manager';
    }
  }
  class Engineer extends TeamMember {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }
  
    getRole() {
      return 'Engineer';
    }
  }
  class Intern extends TeamMember {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }
  
    getRole() {
      return 'Intern';
    }
  }
  class Team {
    constructor() {
      this.manager = null;
      this.engineers = [];
      this.interns = [];
    }
  
    addManager(name, id, email, officeNumber) {
      this.manager = new Manager(name, id, email, officeNumber);
    }
  
    addEngineer(name, id, email, github) {
      const engineer = new Engineer(name, id, email, github);
      this.engineers.push(engineer);
    }
  
    addIntern(name, id, email, school) {
      const intern = new Intern(name, id, email, school);
      this.interns.push(intern);
    }
  
    generateHTML() {
      // generate HTML file here
    }
  }
  