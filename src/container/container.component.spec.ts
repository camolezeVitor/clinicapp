import { TestBed } from "@angular/core/testing";
import { CLContainerComponent } from "./container.component";

describe("CLContainerComponent", () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CLContainerComponent
      ],
    }).compileComponents();
  });
      
  it("should exist", () => {
    const fixture = TestBed.createComponent(CLContainerComponent);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  })
})