import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {



  courseTitle=""
  courseDescription=""
  courseVenue=""
  duration=""
  courseDate=""

  constructor(private api:ApiService){}

  readValue =()=>{
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseVenue":this.courseVenue,
    "duration":this.duration,"courseDate":this.courseDate}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("added successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseVenue=""
          this.duration=""
          this.courseDate=""
        }else{
          alert("something went wrong")
        }
      }
    )
  }

}
