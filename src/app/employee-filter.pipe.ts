import {Pipe,PipeTransform} from '@angular/core';
import {IEmployee} from './employee';
@Pipe({
    name:'employeeFilterByName'
})
export class EmployeeFilterByName implements PipeTransform{
    transform(employees:IEmployee[],filterby:string):IEmployee[]{
        filterby=filterby?filterby.toLowerCase():null
        return filterby? employees.filter((employee:IEmployee) =>
        employee.employeeName.toLowerCase().indexOf(filterby)!==-1
        ||
         employee.department.toLowerCase().indexOf(filterby)!==-1
        ||
         employee.designation.toLowerCase().indexOf(filterby)!==-1
        ):employees;
        
    }
}