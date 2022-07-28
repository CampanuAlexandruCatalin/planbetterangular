import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventRenderedArgs, EventSettingsModel, ScheduleComponent, View } from '@syncfusion/ej2-angular-schedule';
import { timer } from 'rxjs';

@Component({
  selector: 'app-studentday',
  templateUrl: './studentday.component.html',
  styleUrls: ['./studentday.component.scss']
})
export class StudentdayComponent implements OnInit {

  dateTime: Date| null | undefined;
  @ViewChild('scheduleObj') public scheduleObj: ScheduleComponent | undefined ;

  public selectedDate: Date = new Date();


  public datas: string[] = ['Day'];

  public onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data['CategoryColor'] as string;
    if (!args.element || !categoryColor) {
      return;
    }

  }

  constructor(public router: Router) {
  }
  ngOnInit(): void {
    this.dateTime=new Date();
    timer(0,1000).subscribe(()=>{
      this.dateTime=new Date()
    })

  }
}
