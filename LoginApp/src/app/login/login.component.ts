import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  errorMessage!:string;
  loginForm!: FormGroup;
  pwrdtype:string="password";
  eye:string="bi bi-eye";


  constructor(private userSer: UserService, private router: Router, private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.required],
      upass: ['', Validators.required]
    }
      )
      
  }

onClick(){
  this.userSer.postUser(this.loginForm.value.uname, this.loginForm.value.upass).subscribe((res:any)=>{
    var uname2 = this.loginForm.value.uname;
    if(res.message){
      this.errorMessage= res.message;
    }else{
      this.errorMessage='';
      if(uname2==='admin'){
        this.router.navigate(['/admin'])
      }else if(uname2==='user'){
        this.router.navigate(['/user'])
      }else if(uname2==='manager'){
        this.router.navigate(['/manager'])
      }else if(uname2==='programmer' || uname2==='developer'){
        this.router.navigate(['/programmer'])
      }

    }
  },(error)=>{});
  
}


icon(pwrd:any){
  if (pwrd.type==="password"){
    this.pwrdtype="text";
    this.eye= "bi bi-eye-slash";
  }else{
    this.pwrdtype="password";
    this.eye= "bi bi-eye";
  
  }
 

}
}