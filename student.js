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
let s=new student("abcd");
s.display();