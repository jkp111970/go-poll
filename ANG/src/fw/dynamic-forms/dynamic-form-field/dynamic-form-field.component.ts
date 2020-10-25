import { Component, OnInit, Input } from '@angular/core';
import { FieldDefinition } from '../fielddefinition';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fw-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements OnInit {

  constructor() { }

  @Input()
  field: FieldDefinition;
  @Input()
  action: string;
  @Input()
  form: FormGroup;
  @Input()
  submitted: boolean;

  ngOnInit(): void {
  }

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

}
