import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private homeService: HomeService) {}

  nameRegex = /^[a-zA-z].*/
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/


  clientForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex)])
  })

  submitForm() {
    const clientInfo = {
      name: this.clientForm.value.name!!,
      email: this.clientForm.value.email!!,
      phone: this.clientForm.value.phone!!
    }

    this.homeService.addClientInfo(clientInfo).subscribe((res) => {
      console.log(res)
    })
  }

  get Name() {
    return this.clientForm.get('name') as FormControl
  }
  get Email() {
    return this.clientForm.get('email') as FormControl
  }
  get Phone() {
    return this.clientForm.get('phone') as FormControl
  }
}
