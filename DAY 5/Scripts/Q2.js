class User {
  constructor(name,age,email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.count=0;
    this.courses=[];
  }
  coins(){
    console.log(`${this.name} has ${this.count} coins`);
    return this;
  }
  login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User
{
  constructor(name,age,email) {
    super(name,age,email);
  }
  addCoins(User)
  {
    User.count++;
    console.log(`${User.name} has ${User.count} coins`);
    return this;
  }
  removeCoins(User)
  {
    User.count--;
    console.log(`${User.name} has ${this.count} coins`);
    return this;
  }
}


class Admin extends Moderator
{

  constructor(name,age,email)
  {
    super(name,age,email);
  }

  addCourse(User,course)
  {
    User.courses.push(course);

    console.log(`${User.name}has been added to the ${course}. Total courses ${User.name} has are ${User.courses}`);

    return this;
   }

   removeCourse(User,course)
    {

     User.courses.pop(course);

     console.log(`${User.name}has been removed from the ${course}. Total courses ${User.name} has are ${User.courses}`);
     return this;

    }

}


let user1 = new User('Barney',25,'barney@gmail.com');
 user1.login().coins().logout();

let user2 = new User('lily',21,'lily@gmail.com');
user2.login().coins().logout();

let mod1 = new Moderator('Tes',28,'mosby@gmail.com');
mod1.login();
mod1.addCoins(user1).addCoins(user2);

let admin1 = new Admin('Marshal',29,'marshal@gmail.com');
admin1.login();
admin1.addCourse(user1,['python','css']).removeCourse(user1,'python');
