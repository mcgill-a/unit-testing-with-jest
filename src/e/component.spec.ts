import { Engine, Status } from './component';

describe('Engine', () => {
    let component: Engine;

    beforeEach(() => {
        component = new Engine();
        jest.spyOn(console, 'log').mockImplementation(() => null);
    });

    it('should start the engine', () => {
        component.start();
        expect(component.status).toBe(Status.started);
    });

    it('should stop the engine', () => {
        component.start();
        component.stop();
        expect(component.status).toBe(Status.stopped);
    });
});
