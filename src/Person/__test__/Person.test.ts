import Person from '../Person';

describe('Person', () => {
    describe('No name and age', () => {
        const person = new Person();

        test('Should have "No name yet" for name as expected', () => {
            expect(person.getName()).toBe('No name yet');
        });

        test('Should have an age of 0 as expected', () => {
            expect(person.getAge()).toBe(0);
        });

        test('Should have an age of 1 after increment', () =>  {
            person.incrementAge();
            expect(person.getAge()).toBe(1);
        });

        test('Should have a new name after setting a name', () => {
            person.setName('Gordon', 'Mordo');
            expect(person.getName()).toBe('Gordon Mordo');
        });

        test('Should have a default gender', () => {
            expect(person.getGender()).toBe('MALE');
        });
    });

    describe('Has name and age', () => {
        const person = new Person('Thomas Addison', 20);

        test('Should have a name as expected', () => {
            expect(person.getName()).toBe('Thomas Addison');
        });

        test('Should have the same age as expected', () => {
            expect(person.getAge()).toBe(20);
        });

        test('Should have an incremented age after the incrementAge method', () => {
            person.incrementAge();
            expect(person.getAge()).toBe(21);
        });

        test('Should have a new name from the setName method', () => {
            person.setName('Patrick');
            expect(person.getName()).toBe('Patrick');
        });
    });
});