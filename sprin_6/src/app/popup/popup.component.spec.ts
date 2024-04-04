import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupComponent } from './popup.component';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('detectar que salgan cosas corectas en html si tipo es pagina',()=>{
    component.tipo = 'paginas';
    component.titulo = 'test titulo';
    component.descripcion = 'test descripcion';
    fixture.detectChanges();
    const popupElement: HTMLElement = fixture.nativeElement;
    expect(popupElement.querySelector('.modal_head h2')?.textContent).toContain('test titulo');
    expect(popupElement.querySelector('.modal_body p')?.textContent).toContain('test descripcion');
  });

  it('detectar que salgan cosas corectas en html si tipo es lengua',()=>{
    component.tipo = 'lenguas';
    component.titulo2 = 'test titulo2';
    component.descripcion2 = 'test descripcion2';
    fixture.detectChanges();
    const popupElement: HTMLElement = fixture.nativeElement;
    expect(popupElement.querySelector('.modal_head h2')?.textContent).toContain('test titulo2');
    expect(popupElement.querySelector('.modal_body p')?.textContent).toContain('test descripcion2');
  })
});
