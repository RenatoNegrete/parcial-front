import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../modelo/Entidad';
import { EntidadService } from '../../servicios/entidad.service';

@Component({
  selector: 'app-show',
  imports: [CommonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{

  datosEntidades: Entidad[] = []

  constructor(
    private entidadService: EntidadService
  ){}

  ngOnInit(): void {
      this.cargarEntidades()
  }

  async cargarEntidades() {
    try {
      this.datosEntidades = await this.entidadService.getEntidades();
    } catch (error) {
      console.error('Error cargando entidades:', error);
    }
  }

}
