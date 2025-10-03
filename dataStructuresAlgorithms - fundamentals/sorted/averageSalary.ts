function averageSalary(salary: number[]): number {
    const minSalary: number = Math.min(...salary);
    const maxSalary: number = Math.max(...salary);
    const sum: number = salary.reduce((a, b) => a + b, 0);

    const averageSalary: number = (sum - minSalary - maxSalary) / (salary.length - 2);

    return averageSalary;
};