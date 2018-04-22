import {Component} from '@angular/core'
import {IEmployee} from './employee'
@Component({
    selector:'sam-employee',
    templateUrl:"./employee.component.html"
})
export class EmployeeComponent{
    title="Employee Contacts";
    filterByName="";
    showImage=true;
    imageWidth=50;
    showHideText="Hide Image";
    //employees=IEmployee[]
    employees:IPerson[]=[
        {
            imageUrl:'../assets/images/md_pic.jpg',
            employeeId:'EMP-01000',
            employeeName:'Samuel Prdhan',
            designation:'Developer',
            department:'Information Technology'
        },
        {
            imageUrl:'../assets/images/user_photo.jpg',
            employeeId:'EMP-002',
            employeeName:'Mithum Kumar Singh',
            designation:'Project Lead',
            department:'Finance'
        },
        {
            imageUrl:'../assets/images/user_icon.png',
            employeeId:'EMP-003',
            employeeName:'Sanjay Loot',
            designation:'Executive',
            department:'Marketing'
        }
    ]

    toggleImage:void(){
        this.showImage=!this.showImage;
        this.showHideText=this.showImage?'Hide Image':'Show Image';
    }
}