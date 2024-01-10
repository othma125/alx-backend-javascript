export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const firstStudent: Student = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 34,
    location: 'San Francisco'
};
const secondStudent: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'New York'
};
const studentsList: Student[] = [firstStudent, secondStudent];
