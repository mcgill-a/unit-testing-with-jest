export type Status = 'started' | 'stopped';

export class Engine {
    private _status: Status = 'stopped';

    public get status(): 'started' | 'stopped' {
        return this._status;
    }

    public start(): void {
        this._status = 'started';
        console.log('starting');
    }

    public stop(): void {
        this._status = 'stopped';
        console.log('stopping');
    }
}
