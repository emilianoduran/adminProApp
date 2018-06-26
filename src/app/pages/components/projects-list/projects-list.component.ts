import { Component, OnInit, ViewChild } from '@angular/core';
import swal from 'sweetalert';
declare function init_plugins_theme();
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  public swal:any;
  constructor() {
    init_plugins_theme();
  }

  ngOnInit() {}

  /**
   * deleteProject
   */
  public deleteProject() {
    swal({
      title:'Esto es un título',
      text: 'Hello world!',
      
    });
    swal({
      title:'¿Quieres Eliminarlo?',
      text:'¿Estas a punto de eliminar este portfolio?',
      icon: 'warning',
       buttons: ["Cancelar", "Si, lo quiero Borrar!"],
      dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
          swal('Se fue! Has eliminado este portfolio!', {
            icon: 'success',
          });
        } else {
          swal('Por el momento safó!',{icon:'error'});
        }
      });
  }


 
}
}
