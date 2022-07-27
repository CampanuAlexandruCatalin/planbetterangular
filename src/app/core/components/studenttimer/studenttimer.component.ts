import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-studenttimer',
  templateUrl: './studenttimer.component.html',
  styleUrls: ['./studenttimer.component.scss']
})
export class StudenttimerComponent implements OnInit {
  selected: Date | null | undefined;
  dateTime: Date| null | undefined;

  ms:any='0'+0;
  sec:any='0'+0;
  min:any='0'+0;
  hr:any='0'+0;
  starttimer:any;
  runing=false;

  constructor(public router: Router) {
  }

  start():void{
    if(!this.runing){
      this.runing=true;
      this.starttimer=setInterval(()=>{
      this.ms++;
      this.ms=this.ms<10?'0'+this.ms:this.ms;

      if(this.ms===100)
      {
        this.sec++;
        this.sec=this.sec<10?'0'+this.sec:this.sec;
        this.ms='0'+0;
      }

      if(this.sec==60)
      {
        this.min++;
        this.min=this.min<10?'0'+this.min:this.min;
        this.sec='0'+0;
      }

      if(this.min==60)
      {
        this.hr++;
        this.hr=this.hr<10?'0'+this.hr:this.hr;
        this.min='0'+0;
      }
    },10);
    }
    else{
      this.stop();
    }
  }

  stop():void{
    clearInterval(this.starttimer);
    this.runing=false;
  }
  reset():void{
    clearInterval(this.starttimer);
    this.runing=false;
    this.hr=this.min=this.sec=this.ms='0'+0;
  }
  ngOnInit(): void {
    this.dateTime=new Date();
    timer(0,1000).subscribe(()=>{
      this.dateTime=new Date()
    })
  }
}
