import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamissueComponent } from './teamissue.component';

describe('TeamissueComponent', () => {
  let component: TeamissueComponent;
  let fixture: ComponentFixture<TeamissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
