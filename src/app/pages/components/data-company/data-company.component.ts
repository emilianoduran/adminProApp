import { Component, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { mailPattern } from './mailpattern';
import { Company } from '../../../interfaces/company.interface';
import { AuthService } from '../../../services/shared/auth.service';
import { DataCompanyService } from '../../../services/service.index';

// Importar interfaces
declare function init_plugins_theme();

@Component({
  selector: 'app-data-company',
  templateUrl: './data-company.component.html',
  styleUrls: ['./data-company.component.css']
})
export class DataCompanyComponent implements OnInit {
  controls: any;
  public formDataCompany: FormGroup;
  public CompanyInfo: Company;
  public Pattern: string;

  constructor(public _cd: DataCompanyService, private _auth: AuthService) {
    this.CompanyInfo = this._cd.INFO;
    init_plugins_theme();
    console.log(this.CompanyInfo);
  }

  ngOnInit() {
    this.formDataCompany = new FormGroup({
      id: new FormControl('LIDwwmxAJhTtXdOm3wqO'),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      profession: new FormControl('', [Validators.required, Validators.minLength(5)]),
      logoURL: new FormControl(),
      role: new FormControl('ADMIN_ROLE'),
      about: new FormArray([new FormControl('', Validators.required)]),
      userInfo: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern((this.Pattern = mailPattern))]),

        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password1: new FormControl(''),

        location: new FormGroup({
          country: new FormControl('', [Validators.required, Validators.minLength(4)]),
          province: new FormControl('', [Validators.required, Validators.minLength(4)]),
          city: new FormControl('', [Validators.required, Validators.minLength(4)]),
          address: new FormControl('', [Validators.required, Validators.minLength(4)]),
          floorDoor: new FormControl(''),
          cp: new FormControl('')
        }),
        // TODO: El usuario debería tener como opcion la posibilidad de agregar más números convertir en array
        mobile: new FormGroup({
          countryCodeAndPrefixMobile: new FormControl(''),
          areaCodeMobile: new FormControl(''),
          numberMobile: new FormControl('')
        }),
        phone: new FormGroup({
          countryCodeAndPrefixPhone: new FormControl(''),
          areaCodePhone: new FormControl(''),
          numberPhone: new FormControl('')
        }),
        socialNetwork: new FormGroup({
          facebook: new FormControl('', [Validators.required, Validators.minLength(5)]),
          instagram: new FormControl(''),
          googlePlus: new FormControl(''),
          youTube: new FormControl(''),
          vimeo: new FormControl(''),
          behance: new FormControl('')
        })
      })
    });

    this.formDataCompany.setValue(this._cd.INFO);
    this.formDataCompany.controls['userInfo'].controls['password1'].setValidators([Validators.required, Validators.minLength(8), this.noigual.bind(this.formDataCompany)]);
  }

  // TODO Crear una función externa
  noigual(control: FormControl): { [s: string]: boolean } {
    let formDataCompany;
    formDataCompany = this;

    if (control.value !== this.controls['userInfo'].controls['password'].value) {
      return {
        noigual: true
      };
    }
    return null;
  }
  /**
   * saveChanges
   */

  public saveChanges() {
    // TODO Avisar al usuario con una alerta si el formulario se guardó.
    if (this.formDataCompany.valid) {
      this.formDataCompany.value.about = [];
      // Extrae los parrafos directamente del html por id
      this.extractParagraphs();
      // Iguala el objeto con la forma
      this.CompanyInfo = this.formDataCompany.value;
      console.log(this.formDataCompany);
      this._cd.update(this.CompanyInfo);
      console.log('Formulario guardado correctamente');
    } else {
      console.log('Revisar formulario');
    }
    // reset content about
  }

  /**
   * extraerParrafos
   */
  public extractParagraphs() {
    // Esta función extrae cáda salto de línea y lo convierte en un elemento de array
    // para luego  insertarlo en el html en una etiqueta de parrafo con un ng-for
    // Utiliza Vanilla Js
    // TODO: Revisar función;

    let textarea;
    textarea = document.getElementById('nosotros');
    let parrafos;

    parrafos = textarea.value.split('\n');

    for (let i = 0; i < parrafos.length; i++) {
      const element = parrafos[i];
      if (element === '') {
        continue;
      } else {
        this.formDataCompany.value.about.push(element);
      }
    }
  }
}
