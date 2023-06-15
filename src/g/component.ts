export interface ColumnHeaderParams {
    headerName: string;
    api: {
        isExpandable: () => boolean;
        isExpanded: () => boolean;
        setExpanded: (expanded: boolean) => void;
    };
}

export interface ColumnHeader {
    init(params: ColumnHeaderParams): void;
}

export class CustomColumnHeader implements ColumnHeader {
    private params?: ColumnHeaderParams;

    public get displayName(): string | undefined {
        return this.params?.headerName;
    }

    public get isExpanded(): boolean {
        return !!this.params?.api.isExpanded();
    }

    public init(params: ColumnHeaderParams): void {
        this.params = params;
    }

    public toggle(): void {
        if (!this.params) return;
        this.params.api.setExpanded(!this.isExpanded);
    }
}
