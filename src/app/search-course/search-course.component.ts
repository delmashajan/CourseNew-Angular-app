import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {

  courseTitle=""

  constructor(private api:ApiService){}
  searchCourse:any=[]

  readValue=()=>{
    let data:any={
      "courseTitle":this.courseTitle}
      console.log(data)
      this.api.searchCourse(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.length==0) {
            alert("invalid course title")
            
          } else {
            this.searchCourse=response
            
          }
        }
      )
  
  }

}
