import { Shop } from './component';

describe('Shop', () => {
    let component: Shop;

    beforeEach(() => {
        component = new Shop();
    });

    it('should exist', () => {
        expect(component).toBeTruthy();
    });
});
