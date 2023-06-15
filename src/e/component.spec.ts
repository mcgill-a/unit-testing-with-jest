import { Engine } from './component';

describe('Engine', () => {
    let component: Engine;

    beforeEach(() => {
        component = new Engine();
    });

    it('should exist', () => {
        expect(component).toBeTruthy();
    });
});
