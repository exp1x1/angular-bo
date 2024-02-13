import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    mail: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    comment: new FormControl(null, Validators.required),
  });

  onSubmit() {
    this.contactForm.reset();
    alert('contact sent');
  }
}
