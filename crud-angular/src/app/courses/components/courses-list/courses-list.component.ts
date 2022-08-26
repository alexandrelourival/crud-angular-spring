import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() delete = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course) {
    console.log("Editando curso");
    this.edit.emit(course);
  }

  onDelete(course: Course) {
    console.log("Deletando curso");
    this.delete.emit(course);
  }
}
