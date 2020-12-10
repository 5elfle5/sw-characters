export interface Collection<T> {
    count: number;
    next: string;
    previous?: any;
    results: T[];
}
