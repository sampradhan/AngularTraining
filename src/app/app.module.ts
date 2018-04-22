import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component'
import {EmployeeComponent} from './employee.component'
import {EmployeeFilterByName} from './employee-filter.pipe'
@NgModule({
imports:[
    BrowserModule,
    FormsModule
    ],
declarations:[
    AppComponent
    ,EmployeeComponent
    ,EmployeeFilterByName
],
bootstrap:[
    AppComponent
    ]
})
export class AppModule{
   
}
