import { SimpleBank } from './component';

describe('SimpleBank', () => {
    let component: SimpleBank;

    beforeEach(() => {
        component = new SimpleBank();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
