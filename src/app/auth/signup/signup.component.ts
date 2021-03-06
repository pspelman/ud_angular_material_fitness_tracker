import { Component, OnInit } from '@angular/core'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: any
  private minimumAge = 18
  constructor() { }

  ngOnInit(): void {
    this.maxDate = new Date()
    this.maxDate.setFullYear(this.maxDate.getFullYear() - this.minimumAge)

  }

  onSubmit(form: NgForm): void {
    console.log(`form: `, form)
  }
}
