import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {
  loading = false;
  listCuestionarios: Cuestionario[] = [];

  constructor(private cuestionarioService: CuestionarioService,
              private respuestaCuestionarioService: RespuestaCuestionarioService,          
              private router: Router) { }

  ngOnInit(): void {
    this.getListCuestionarios();
  }

  getListCuestionarios(): void {
    this.loading = true;
    this.cuestionarioService.getListCuestionarios().subscribe(data => {
      console.log(data);
      this.loading = false;
      this.listCuestionarios = data;
    });
  }

  ingresarNombre(idCuestionario: number): void {
    this.respuestaCuestionarioService.idCuestionario = idCuestionario;
    this.router.navigate(['/inicio/ingresarNombre']);
  }

}