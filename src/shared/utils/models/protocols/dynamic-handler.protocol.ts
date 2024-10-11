import { BehaviorSubject, Observable } from "rxjs";

export interface DynamicHandlerProtocol<T> {
    actualValidationValue: T;
    templateSubject$: BehaviorSubject<T>;
    validateChangeAndEmitOutput: () => void | Observable<T>; 
    initialEmmit: () => void | Observable<T>;
}