import { Calculator } from './component';

describe('Calculator', () => {
    let component: Calculator;

    beforeEach(() => {
        component = new Calculator();
    });

    it('should exist', () => {
        expect(component).toBeTruthy();
    });
});
