import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.scss']
})
export class OnboardingFormComponent implements OnInit {
  submitted = false;
  onboardingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.onboardingForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      businessType: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      state: ['', [Validators.required]],
      zipCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      docs: [null, Validators.required]
    });
  }

  get f() {
    return this.onboardingForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.onboardingForm.invalid) {
      alert('Invalid request');
    } else {
      alert(JSON.stringify(this.onboardingForm.value));
    }
  }
}
