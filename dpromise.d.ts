export interface DPromise<T> extends Promise<T> {
    resolve(v?: T): void;
    reject(e: any): void;
    readonly callback: (e: any, v?: T) => void;
    readonly resolved: boolean;
    readonly rejected: boolean;
}
export function deferPromise<T>(): DPromise<T>;
