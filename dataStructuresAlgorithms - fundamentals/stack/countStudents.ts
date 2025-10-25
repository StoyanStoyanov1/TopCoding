function countStudents(students: number[], sandwiches: number[]): number {
    let rotations: number = 0;

    while (students.length && rotations < students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();

            rotations = 0;
        } else {
            students.push(students.shift());
            rotations++;
        }

       
    }

    return students.length;
};