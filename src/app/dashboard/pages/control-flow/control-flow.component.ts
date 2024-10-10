import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


type Grade = "A" | "B" | "F"

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './control-flow.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
