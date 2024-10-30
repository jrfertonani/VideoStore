import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCreateComponent } from './videos-create.component';

describe('VideosCreateComponent', () => {
  let component: VideosCreateComponent;
  let fixture: ComponentFixture<VideosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
