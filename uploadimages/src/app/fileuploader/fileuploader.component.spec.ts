import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploaderComponent } from './fileuploader.component';

describe('FileuploaderComponent', () => {
  let component: FileuploaderComponent;
  let fixture: ComponentFixture<FileuploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
