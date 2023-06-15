export class Calculator {
    public add(a: number, b: number): number {
        return a + b;
    }

    public subtract(a: number, b: number): number {
        return a - b;
    }

    public sum(numbers: number[]): number {
        return numbers.reduce((total, current) => (total += current));
    }
}
