import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dAccno="";
  dPswd="";
  dAmount="";

  wAccno="";
  wPswd="";
  wAmount="";

  depositForm=this.fb.group({
    dAccno:[''],
    dPswd:[''],
    dAmount:['']

  })

  withdrawForm=this.fb.group({
    wAccno:[''],
    wPswd:[''],
    wAmount:['']

  })

  constructor( private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){
    var accno=this.depositForm.value.dAccno;
    var pswd=this.depositForm.value.dPswd;
    var amount=this.depositForm.value.dAmount;

    const result=this.dataService.deposit(accno,pswd,amount)

    if(result){
      alert("Your account has been credited with "+amount+" and new balance is "+result)
    }
  }

  withdraw(){
    var accno=this.withdrawForm.value.wAccno;
    var pswd=this.withdrawForm.value.wPswd;
    var amount=this.withdrawForm.value.wAmount;

    const result=this.dataService.withdraw(accno,pswd,amount)

    if(result){
      alert(+amount+" has been debited from your account and new balance is "+result)
    }
  }
}
