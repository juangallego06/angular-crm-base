import { Component } from '@angular/core';
import { ClienteInfoDetalleComponent } from './cliente-info-detalle/cliente-info-detalle.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { TendenciaChartComponent } from '../../../shared/components/tendencia-chart/tendencia-chart.component';
import { ClientePreferenciasDetalleComponent } from './cliente-preferencias-detalle/cliente-preferencias-detalle.component';
import { TableMovimientosComponent } from '../../../shared/components/table-movimientos/table-movimientos.component';

@Component({
  selector: 'app-cliente-page',
  imports: [
    ClienteInfoDetalleComponent,
    CardComponent,
    TendenciaChartComponent,
    ClientePreferenciasDetalleComponent,
    TableMovimientosComponent,
  ],
  templateUrl: './cliente-page.component.html',
  styleUrl: './cliente-page.component.css',
})
export class ClientePageComponent {}
