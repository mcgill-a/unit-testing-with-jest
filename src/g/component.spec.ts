import { ColumnApi, ColumnHeaderParams, CustomColumnHeader } from './component';

describe('CustomColumnHeader', () => {
    let component: CustomColumnHeader;

    beforeEach(() => {
        component = new CustomColumnHeader();
    });

    it('should return undefined if no display name', () => {
        expect(component.displayName).toBeUndefined();
    });

    it('should set the display name on init', () => {
        const params = mockParams('foo', {});

        component.init(params);

        expect(component.displayName).toEqual(params.headerName);
    });

    it('should not be expanded if params are undefined', () => {
        expect(component.isExpanded).toBe(false);
    });

    it('should be expanded when column expanded is true', () => {
        component.init(mockParams('foo', mockApi(true)));

        expect(component.isExpanded).toBe(true);
    });

    it('should not be expanded when column expanded is false', () => {
        component.init(mockParams('foo', mockApi(false)));

        expect(component.isExpanded).toBe(false);
    });

    it('should not throw on toggle if params are undefined', () => {
        expect(() => component.toggle()).not.toThrow();
    });

    it('should set expanded to true on toggle if not expanded', () => {
        const api = mockApi(false);
        component.init(mockParams('foo', api));

        component.toggle();

        expect(api.setExpanded).toHaveBeenCalledWith(true);
    });

    it('should set expanded to false on toggle if expanded', () => {
        const api = mockApi(true);
        component.init(mockParams('foo', api));

        component.toggle();

        expect(api.setExpanded).toHaveBeenCalledWith(false);
    });

    function mockApi(isExpanded: boolean): ColumnApi {
        return <ColumnApi>{
            isExpandable: jest.fn(),
            isExpanded: jest.fn(() => isExpanded),
            setExpanded: jest.fn()
        };
    }

    function mockParams(headerName: string, api: Partial<ColumnApi>): ColumnHeaderParams {
        return <ColumnHeaderParams>{ headerName, api };
    }
});
