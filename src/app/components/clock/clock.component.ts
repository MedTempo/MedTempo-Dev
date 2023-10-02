import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public currentTime: string = '';

  @Input() nextmed!: Date;
  @Input() nextnome!: string;

  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1);
  }

  updateTime() {
    const now = new Date();
    const diff = this.nextmed?.getTime() - new Date().getTime()
  
    const date = new Date(Date.now() + diff)

   // console.log(date)

    const hours = String(Math.floor(diff / (1000 * 60 * 60 ))).padStart(2, '0');
    const minutes = String(Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000 * 60)).slice(0,1).padStart(2, '0');
    const seconds = String(Math.floor(diff % (1000 * 60)) / 1000).slice(0,2).padStart(2, '0');
    const miliseconds = String(date.getMilliseconds()).padStart(2, '0');
  
    this.currentTime = `${hours}:${minutes}:${seconds}`;

   // console.log(this.currentTime)
  }
}
