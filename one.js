let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};

group.showList();

//2 arrow function
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student);
        });
    }
};

group1.showList();

//3 bind
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};

group3.showList();

//4
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }, this);
    }
};
group4.showList();

//5 call
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        this.students.forEach(stu => function (student) {
            console.log(this.title + ": " + student);
        }.call(this, stu));
    }
};
group5.showList();


/////222222
// the answer is After the loop.





