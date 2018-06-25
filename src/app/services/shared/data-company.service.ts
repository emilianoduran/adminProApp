// ===================================
// CRUD Firestore tutorial youtube.
// ===================================
// Repositorio : https://github.com/bezael/crud-angular-5

import { Injectable } from '@angular/core';
import { Company, SocialNetwork } from '../../Interfaces/company.interface';
// Angular Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCompanyService {
  public INFO: Company;
  public social: SocialNetwork;
  private dataCompanyCollection: AngularFirestoreCollection<Company>;
  private imagesCompanyCollection: AngularFirestoreCollection<any>;
  private dataCompanyDoc: AngularFirestoreDocument<Company>;
  private datosCompany: Observable<Company[]>;
  private dataCompany: Observable<Company>;
  constructor(private afs: AngularFirestore) {
    // this.dataCompanyCollection = this.afs.collection('dataCompany', ref => ref);
    this.imagesCompanyCollection = this.afs.collection('projectsCollections', ref => ref);
    console.log('data company activo');
  }

  // ===================================
  // Create: one element on db
  // ===================================

  add(dataCompany: Company) {
    this.dataCompanyCollection.add(dataCompany);
  }
  // ===================================>
  // Read: All element on db
  // ===================================

  getAll(): Observable<Company[]> {
    this.datosCompany = this.dataCompanyCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Company;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.datosCompany;
  }

  // ===================================
  // Read: one element on dB
  // ===================================

  get(id: string) {
    this.dataCompanyDoc = this.afs.doc<Company>(`dataCompany/${id}`);
    this.dataCompany = this.dataCompanyDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Company;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.dataCompany;
  }
  // ===================================
  // Actualiza Documentos
  // ===================================

  public update(dataCompany: Company) {
    this.dataCompanyDoc = this.afs.doc(`dataCompany/${dataCompany.id}`);
    this.dataCompanyDoc.update(dataCompany);
  }

  // ===================================
  // Borra Docunmentos
  // ===================================

  public delete(dataCompany: Company) {
    this.dataCompanyDoc = this.afs.doc(`dataCompany/${dataCompany.id}`);
    this.dataCompanyDoc.delete();
  }

  // ===================================
  // Charge data on init app
  // ===================================

  public uploadData() {
    this.get('LIDwwmxAJhTtXdOm3wqO').subscribe(data => (this.INFO = data));
  }

  // ===================================
  // Add Portfolio
  // ===================================

  /**
   * addPortfolioImage
   */
  public addPortfolioImage(portfilioItem) {
    this.imagesCompanyCollection.add(portfilioItem);
  }
}
