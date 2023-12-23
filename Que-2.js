class student{
    constructor(name,email){
        this.name=name;
        this.email =email;
        this.courses=[]
    }
    enroll(course){
        this.courses.push(course);
        console.log(`${this.name} has enrolled in ${course}.`);
    }
    showCourses() {
        console.log(`${this.name}'s enrolled courses: ${this.courses.join(', ')}`);
    }
}

const student1 = new student('Mukesh','mukesh@gmail.com')
student1.enroll('full stack web development')
student1.showCourses()