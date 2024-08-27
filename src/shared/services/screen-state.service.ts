import { ScreenState } from "@enums/states";
import { BehaviorSubject } from "rxjs";

let windowChangeTest$ = new BehaviorSubject<ScreenState>(ScreenState.DESKTOP);

setTimeout(() => {
  windowChangeTest$.next(ScreenState.DESKTOP)
}, 5000);
setTimeout(() => {
  windowChangeTest$.next(ScreenState.MOBILE)
}, 10000);

export { windowChangeTest$ }