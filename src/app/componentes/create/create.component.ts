import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Entidad } from '../../modelo/Entidad';
import { EntidadService } from '../../servicios/entidad.service';

@Component({
  selector: 'app-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  entidad: Entidad = {
    id: 0,
    nombre: '',
    nit: ''
  };

  constructor(private entidadService: EntidadService) {}

  async guardarEntidad() {
    try {
      console.log(this.entidad)
      const resultado = await this.entidadService.createAdministrador(this.entidad);
      console.log('Entidad creada:', resultado);
      this.entidad = { id: 0, nombre: '', nit: '' };
    } catch (error) {
      console.error('Error al crear la entidad:', error);
    }
  }

}
