class student{
    constructor(name)
    {
        this.name=name;
    }
    display()
    {
        console.log(this.name);
    }
}
class student1 extends student{
    constructor(name,rollno)
    {
        super(name);
        this.rollno=rollno;
    }
    display1()
    {
        console.log(this.name+" "+this.rollno);
    }

}
let s=new student1("abcd",100);
s.display1();