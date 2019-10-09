import { Gender } from "./gender";

class Person {
    private gender: Gender = Gender.MALE;

    constructor(private name = "No name yet", private age = 0) {}

    public getName = () => this.name;

    public getAge = () => this.age;

    public getGender = () => this.gender;

    public setName = (firstName: string, lastName = '') => {
        this.name = `${firstName} ${lastName}`.trim();
    }

    public incrementAge = () => this.age += 1;
}

export default Person;