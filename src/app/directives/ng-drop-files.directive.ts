import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() files: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseOver.emit(true);
    this._preventDefault(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const transfer = this._getTransfer(event);

    if (!transfer) {
      return;
    }

    this.extractFiles(transfer.files);

    this._preventDefault(event);
    this.mouseOver.emit(false);
  }

  private _getTransfer(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private extractFiles(fileList: FileList) {
    // console.log( fileList );

    // tslint:disable-next-line:forin
    for (const property in Object.getOwnPropertyNames(fileList)) {
      const tempFile = fileList[property];

      if (this._archivoPuedeSerCargado(tempFile)) {
        const newFile = new FileItem(tempFile);
        this.files.push(newFile);
      }
    }
  }

  // Validaciones
  private _archivoPuedeSerCargado(file: File): boolean {
    if (!this._fileIsDropZone(file.name) && this._isImage(file.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _preventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileIsDropZone(name: string): boolean {
    for (const file of this.files) {
      if (file.name === name) {
        console.log('El Archivo' + name + ' ya esta agregado');
        return true;
      }
    }

    return false;
  }

  private _isImage(fileType: string): boolean {
    return fileType === '' || fileType === undefined ? false : fileType.startsWith('image');
  }
}
