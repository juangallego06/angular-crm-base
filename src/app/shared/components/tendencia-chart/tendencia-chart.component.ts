import { AfterViewInit, Component } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'tendencia-chart',
  imports: [],
  templateUrl: './tendencia-chart.component.html',
  styleUrl: './tendencia-chart.component.css',
})
export class TendenciaChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    const options = {
      chart: {
        type: 'area',
        height: 320,
        toolbar: { show: false },
      },

      series: [
        {
          name: 'Ventas',
          data: [120, 140, 135, 180, 210, 240, 230],
        },
      ],

      stroke: {
        curve: 'smooth',
        width: 3,
      },

      dataLabels: {
        enabled: true,
        offsetY: -10,
      },

      grid: {
        padding: {
          left: 20,
        },
      },

      yaxis: {
        min: 100,
        tickAmount: 5,
      },

      xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
      },
    };

    const chart = new ApexCharts(
      document.querySelector('#ventasTrend'),
      options,
    );

    chart.render();
  }
}
