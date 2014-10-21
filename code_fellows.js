function CodeFellows (address) {
  this.address = address;
  this.motto = "Learn more faster.";
  this.founded = 2013;
  this.students = {};
}
 
CodeFellows.prototype.addStudent = function(name, info) {
  this.students[name] = info
};
 
CodeFellows.prototype.toString = function() {
  for (var property in this) {
    if (this.hasOwnProperty(property)) {
      console.log(property + ": " + this[property]);
    }
  }
};
 
var newBranch = new CodeFellows("511 Boren Ave N, Seattle, WA 98109");
 
newBranch.addStudent('Amy', {age: 27, program: 'rails dev accelerator', career: 'web dev'})
newBranch.addStudent('Ben', {age: 43, program: 'UX dev accelerator', career: 'UX design'})
 
console.log(newBranch.students)
console.log(newBranch.toString())
