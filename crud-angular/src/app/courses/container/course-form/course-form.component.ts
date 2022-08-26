import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../model/course';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    name: [''], //new FormControl('', {nonNullable: true}),
    category: [''] //new FormControl('', {nonNullable: true})
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['CourseResolver'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        result => this.onSucess("Curso salvo com sucesso!", result),
        error => this.onError("Erro ao salvar Curso", error));
  }

  onCancel() {
    this.location.back();
  }

  private onSucess(sucessMsg: string, result: Course) {
    console.log(result);
    this.snackBar.open(sucessMsg, '', { duration: 2000 });
    this.onCancel();
  }

  private onError(errorMsg: string, error: any) {
    console.log(error);
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
