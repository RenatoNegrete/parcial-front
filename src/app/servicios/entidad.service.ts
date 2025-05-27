import { Injectable } from '@angular/core';
import { Entidad } from '../modelo/Entidad';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private apiUrl = 'http://localhost:8081/api/entidad'

  constructor() { }

  getEntidades(): Promise< Entidad[] > {
    return axios.get<Entidad[]>(this.apiUrl).then(
      response => response.data
    ).catch((error) => {
      console.error('Error fetching data:', error);
      return [];
    }
    );
  }

  createEntidad(entidad: Entidad): Promise<Entidad> {
    return axios.post<Entidad>(this.apiUrl, entidad)
      .then(response => response.data)
      .catch(error => {
        console.error('Error creando entidad:', error);
        throw error;
      });
  }

}
