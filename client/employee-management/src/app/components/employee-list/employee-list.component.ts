import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeelist: any


  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getEmployees().subscribe(res => {
      console.log(res)
      this.employeelist = res
    })
  }
  
  onDelete(id: string) {
    this.apiService.deleteEmployee(id)
  }

}
