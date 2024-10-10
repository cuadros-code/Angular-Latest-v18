import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';


type Grade = "A" | "B" | "F"

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  
  public showContent = signal(false)
  public grade = signal<Grade>("A")

  public techs =  signal(["Angular", "React", "Vue", "Astro"])
  public techs2 =  signal([])


  toggleContent() {
    this.showContent.update( value => !value)
  }


  changeGrade(grade: Grade){
    this.grade.set(grade)
  }

}
