/** DataModel relativo ad un oggetto Photo */
export class Photo {

  private _data: Date;
  private _titolo: string;
  private _imagePath: string;
  private _imagePathFromStorage: any;
  private _descrizione: string;

  constructor(data?: Date, titolo?: string, imagePath?: string, imagePathFromStorage?: any, descrizione?: string) {
    this._data = !!data ? new Date(data) : new Date();
    this._titolo = !!titolo ? titolo : '';
    this._descrizione = !!descrizione ? descrizione : '';
    this._imagePath = !!imagePath ? imagePath : '';
    this._imagePathFromStorage = !!imagePathFromStorage ? imagePathFromStorage : '';
  }

  /** GETTER & SETTER */
  get data(): Date {
    return this._data;
  }

  set data(value: Date) {
    this._data = value;
  }

  get titolo(): string {
    return this._titolo;
  }

  set titolo(value: string) {
    this._titolo = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }

  get descrizione(): string {
    return this._descrizione;
  }

  set descrizione(value: string) {
    this._descrizione = value;
  }

  get imagePathFromStorage(): any {
    return this._imagePathFromStorage;
  }

  set imagePathFromStorage(value: any) {
    this._imagePathFromStorage = value;
  }
}

export class PhotoFactory {

  /**
   * Genera un'istanza dell'oggetto Photo a partire da un object
   * @param obj
   */
  static getInstanceFromObject(obj: any): Photo {
    return !!obj ? new Photo(
      new Date(obj.data),
      obj.titolo,
      obj.imagePath,
      '', // Campo che verrà popolato con l'url proveniente dallo storage di Firebase
      obj.descrizione
    ) : new Photo();
  }

  /**
   * Genera una lista di oggetti Photo a partire da un object
   * @param list
   */
  static getInstanceListFromParse(list: any): Photo[] {
    let photosList: Photo[] = [];
    if (list && list.length > 0) {
      list.forEach((elem: any) => {
        photosList.push(PhotoFactory.getInstanceFromObject(elem));
      });
    }
    return photosList;
  }

}
