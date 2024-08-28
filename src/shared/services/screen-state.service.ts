import { ScreenState } from "@enums/states";
import { BehaviorSubject } from "rxjs";

let windowChangeTest$ = new BehaviorSubject<ScreenState>(ScreenState.DESKTOP);

setTimeout(() => {
  windowChangeTest$.next(ScreenState.DESKTOP)
}, 2000);
setTimeout(() => {
  windowChangeTest$.next(ScreenState.MOBILE)
}, 3000);
setTimeout(() => {
  windowChangeTest$.next(ScreenState.DESKTOP)
}, 4000);
setTimeout(() => {
  windowChangeTest$.next(ScreenState.MOBILE)
}, 5000);
setTimeout(() => {
  windowChangeTest$.next(ScreenState.DESKTOP)
}, 6000);
setTimeout(() => {
  windowChangeTest$.next(ScreenState.MOBILE)
}, 7000);


export { windowChangeTest$ }