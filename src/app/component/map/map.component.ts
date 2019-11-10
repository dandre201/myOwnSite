import {Component} from '@angular/core';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';


@Component({
    selector: 'my-app',
    templateUrl: './map.component.html',
    
})

export class mapComponent {

    public map_ChartData = [
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

    public map_ChartOptions = {
       // region: '154',
       enableRegionInteractivity: true,
    };
  
}