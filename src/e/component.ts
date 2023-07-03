export enum Status {
    started,
    stopped
}

export class Engine {
    private _status: Status = Status.stopped;

    public get status(): Status {
        return this._status;
    }

    public start(): void {
        this._status = Status.started;
        console.log('starting');
    }

    public stop(): void {
        this._status = Status.stopped;
        console.log('stopping');
    }
}
