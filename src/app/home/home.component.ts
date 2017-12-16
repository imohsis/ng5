import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
//import { trigger,style,transition,animate,keyframes,query,sequence } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
itemCount: number;  
goalText: string ="my first goal";
goals = [];
  constructor(private _data: DataService) { }
goal:string = "my first goal";
  ngOnInit() {
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res =>this.goals = res);
    this._data.changeGoal(this.goals);
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount= this.goals.length;
    this._data.changeGoal(this.goals);
    
  }
  removeItem(i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

}
