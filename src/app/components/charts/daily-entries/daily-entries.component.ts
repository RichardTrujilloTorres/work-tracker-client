import {AfterViewInit, Component, OnDestroy, OnInit, NgZone} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {EntriesService} from '../../../services/http/entries/entries.service';
import {EntriesResponseData, Entry} from '../../../../common/types';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-daily-entries',
  templateUrl: './daily-entries.component.html',
  styleUrls: ['./daily-entries.component.css']
})
export class DailyEntriesComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone, private entriesService: EntriesService) { }


  async ngOnInit() {
    this.entriesService.latest()
        .subscribe((data: EntriesResponseData) => {
          this.buildChartData(data.data.entries);
    });
  }

  private buildChartData(entries: Entry[]) {
    const chartData = [];
    entries.map(entry => {
      chartData.push({
        date: new Date(entry.startTime),
        value: entry.commits.length
      });
    });

    this.chart.data = chartData;

    const dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    this.chart.cursor = new am4charts.XYCursor();

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    this.chart.scrollbarX = scrollbarX;
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('daily-entries', am4charts.XYChart);

      chart.paddingRight = 20;
      this.chart = chart;
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
