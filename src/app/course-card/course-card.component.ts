import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';
import {NgClass, NgStyle} from '@angular/common';
import {CdkMenu} from '@angular/cdk/menu';

@Component({
  selector: 'course-card',
  imports: [
    NgClass,
    NgStyle,
    CdkMenu
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({
    required:true
  })
  course: Course;

  @Input({required:true})
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();


  onCourseViewed() {
      console.log("Card component - button clicked");

      this.courseSelected.emit(this.course);
  }

  cardClasses(){
    return {
      'beginner': this.course.category == 'BEGINNER',
      'intermediate': this.course.category == 'INTERMEDIATE',
      'advanced': this.course.category == 'ADVANCED',

    }
  }

  cardStyles() {
    return {'text-decoration': 'underline'};
  }
}
