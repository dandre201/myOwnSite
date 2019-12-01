import {Component, OnInit} from '@angular/core';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';
import {MatTabChangeEvent} from '@angular/material';



@Component({
    selector: 'my-app',
    templateUrl: './map.component.html',
    
})

export class mapComponent implements OnInit  {


    public map_ChartData;
    
    
    ngOnInit() {
        this.map_ChartData = [
            ['Country', 'Visted'],
            ['Germany', 600],
            ['United States', 600],
            ['Finland', 600],
            ['Sweden', 600],
            ['France', 600],
            ['RU', 600],
            ['Spain', 600],
            ['Portugal', 600],
            ['Italy', 600],
            ['United kingdom', 600],
            ['Ireland', 600],
            ['Norway', 600],
            ['Poland', 600],
            ['Denmark', 600],
            ['Belguim', 600],
            ['Netherlands', 600],
            ['Switzerland', 600],
            ['Malta', 600],
            ['Cyprus', 600],
            ['Iceland', 600],
            ['Estonia', 600],
            ['Bulgaria', 600],
            ['Luxembourg', 600]
        ];
      }

    tabChanged(tabChangeEvent: MatTabChangeEvent): void {
        console.log('tabChangeEvent => ', tabChangeEvent);
        console.log('index => ', tabChangeEvent.index);
        this.drawMap(tabChangeEvent.index);
        
      }

        //TODO: subscribe to an event

     drawMap(map){
        console.log("map = ", map);

        if(map=0) 
        {
             this.map_ChartData = [
                ['Country', 'Visted'],
                ['Germany', 600],
                ['United States', 600],
                ['Finland', 600],
                ['Sweden', 600],
                ['France', 600],
                ['RU', 600],
                ['Spain', 600],
                ['Portugal', 600],
                ['Italy', 600],
                ['United kingdom', 600],
                ['Ireland', 600],
                ['Norway', 600],
                ['Poland', 600],
                ['Denmark', 600],
                ['Belguim', 600],
                ['Netherlands', 600],
                ['Switzerland', 600],
                ['Malta', 600],
                ['Cyprus', 600],
                ['Iceland', 600],
                ['Estonia', 600],
                ['Bulgaria', 600],
                ['Luxembourg', 600]
            ];
        }

        else if(map=1) 
        {
            this.map_ChartData = [
                ['Country', 'Visted'],
                ['Hungary', 600],
                ['United kingdom', 600],
                ['Albania', 600],
                ['Bangladesh', 600],
                ['Mexico', 600],
                ['Peru', 600],
                ['Honduras', 600],
                ['Algeria', 600],
                ['Russia', 600],
                ['Kazakhstan', 600],
                ['Pakistan', 600],
                ['India', 600],
                ['Uzbekistan', 600],
                ['Iran', 600],
                ['Vietnam', 600],

              
            ];
        }

        else
        {
            this.map_ChartData = [
                ['Country', 'Visted'],
                ['United Kingdom', 600],
            ];

         }

    }
  
}