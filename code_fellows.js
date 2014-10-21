function codeFellows (address) {
  this.address = address;
  this.motto = "Learn more faster.";
  this.founded = 2013;
  this.students = {};
  this.addStudent = addStudent;
  this.toString = toString

  function addStudent (name, info) {
    this.students[name] = info
  }

  function toString () {
    return Object.keys(this)
  }

};

var newBranch = new codeFellows("511 Boren Ave N, Seattle, WA 98109");

newBranch.addStudent('Amy', {age: 27, program: 'rails dev accelerator', career: 'web dev'})
newBranch.addStudent('Ben', {age: 43, program: 'UX dev accelerator', career: 'UX design'})

console.log(newBranch.students)
console.log(newBranch.toString())
