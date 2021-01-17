import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  editForm: FormGroup;
  EmployeeProfile: any[] = ['Finance', 'BDM', 'HR', 'QA', 'Seals', 'Admin', 'CPA']
  id: string = this.actRoute.snapshot.paramMap.get('id');
  data: any

  constructor(
    private apiService: ApiServiceService,
    private fb: FormBuilder,
    public router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.apiService.getOneEmployee(this.id)
      .subscribe((res: any) => {
        this.editForm.setValue({
          name: res.name,
          email: res.email,
          designation: res.designation,
          phoneNumber: res.phoneNumber
        })
      }, (error: any) => console.log(error))
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      designation: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.apiService.UpdateEmploy(this.id, this.editForm.value)
      this.router.navigate(['/list-employee'])
    }
  }

}
