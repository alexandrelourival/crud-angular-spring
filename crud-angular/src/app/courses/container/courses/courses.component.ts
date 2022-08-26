import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar Cursos', error);
          return of([])
        })
      );
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onDelete(record: Course) {
    console.log(record);
    this.coursesService.delete(record).subscribe(_result => this.onSucess(), error => console.log(error));
  }

  onEdit(record: Course) {
    this.router.navigate(['edit', record._id], { relativeTo: this.route });
  }

  onSucess() {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar Cursos', error);
          return of([])
        })
      );
  }

  onError(errorMsg: string, error: any) {
    console.log(error);
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

}
