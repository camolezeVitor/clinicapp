import { BehaviorSubject, Observable } from "rxjs";

export interface DynamicHandlerProtocol<T> {
    actualValidationValue: T;
    templateSubject$: BehaviorSubject<Function>;
    validateChangeAndEmitOutput: () => void | Observable<T>; 
}