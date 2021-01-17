import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  addForm: FormGroup;
  EmployeeProfile: any[] = ['Finance','BDM','HR','QA','Seals','Admin','CPA']

  constructor(
    private apiService: ApiServiceService,
    private fb: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      designation: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.apiService.createEmployee(this.addForm.value)
        .subscribe(data => { console.log(data)})
      this.router.navigate(['/list-employee'])
    }
  }

}
