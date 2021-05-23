import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim="Your Perfect Banking Partner"
 

  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })


  constructor(private dataService:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    if(this.registerForm.valid){

      var uname=this.registerForm.value.uname;
      var acno=this.registerForm.value.acno;
      var pswd=this.registerForm.value.pswd;
    
      const result=this.dataService.register(acno,uname,pswd)
      if(result){
          alert("Registration Successful...");
      this.router.navigateByUrl("");
      }
      else{
        alert("User Exists...Please Login")
      }
    }
    else{
      alert("Invalid Form")
    }
  }


}
