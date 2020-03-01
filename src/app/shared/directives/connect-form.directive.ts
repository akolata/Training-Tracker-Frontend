import {Directive, Input, OnDestroy, OnInit} from "@angular/core";
import * as fromStore from '../../reducers';
import {FormGroupDirective} from "@angular/forms";
import {Store} from "@ngrx/store";
import {debounceTime, take, takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Directive({
  selector: '[connectForm]'
})
export class ConnectFormDirective implements OnInit, OnDestroy {
  @Input('connectForm') selector;
  @Input() debounce: number = 300;
  @Input('formAction') action;

  unsubscribe: Subject<void>;

  constructor(private formGroupDirective: FormGroupDirective, private store: Store<fromStore.AppState>) {
    this.unsubscribe = new Subject<void>();
  }

  ngOnInit(): void {
    this.store.select(this.selector).pipe(
      take(1),
      tap(formValue => this.formGroupDirective.form.patchValue(formValue))
    ).subscribe();

    this.formGroupDirective.form.valueChanges
      .pipe(
        debounceTime(this.debounce),
        takeUntil(this.unsubscribe),
        tap(formValue => {
          this.store.dispatch(this.action({form: formValue}));
          console.log(formValue);
        })
      ).subscribe();

  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
