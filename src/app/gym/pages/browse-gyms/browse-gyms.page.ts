import {Component, OnDestroy, OnInit} from '@angular/core';
import * as fromDialogs from '../../dialogs';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tt-browse-gyms',
  templateUrl: './browse-gyms.page.html',
  styleUrls: ['./browse-gyms.page.scss']
})
export class BrowseGymsPage implements OnInit, OnDestroy {

  unsubscribe: Subject<void>;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.unsubscribe = new Subject<void>();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(fromDialogs.AddGymDialog, {
      height: '250px',
      disableClose: true
    });
    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((gymCreated: boolean) => {
        if (gymCreated) {
          this.snackBar.open('Gym created!', 'Close', {
            duration: 10_000
          });
        }
      });
  }

}
