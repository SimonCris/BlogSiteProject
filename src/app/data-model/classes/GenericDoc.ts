/** DataModel relativo ad un oggetto generico che rappresenta un media file */
export class GenericDoc {

  private _data: Date;
  private _titolo: string;
  private _mediaPath: string;
  private _mediaPathFromStorage: any;
  private _descrizione: string;
  private _isVideo: boolean;
  private _isPhoto: boolean;

  constructor(data?: Date, titolo?: string, mediaPath?: string, mediaPathFromStorage?: any, descrizione?: string, isVideo?: boolean, isPhoto?: boolean) {
    this._data = !!data ? new Date(data) : new Date();
    this._titolo = !!titolo ? titolo : '';
    this._mediaPath = !!mediaPath ? mediaPath : '';
    this._mediaPathFromStorage = !!mediaPathFromStorage ? mediaPathFromStorage : '';
    this._descrizione = !!descrizione ? descrizione : '';
    this._isVideo = !!isVideo ? isVideo : false;
    this._isPhoto = !!isPhoto ? isPhoto : false;
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

  get mediaPath(): string {
    return this._mediaPath;
  }

  set mediaPath(value: string) {
    this._mediaPath = value;
  }

  get mediaPathFromStorage(): any {
    return this._mediaPathFromStorage;
  }

  set mediaPathFromStorage(value: any) {
    this._mediaPathFromStorage = value;
  }

  get descrizione(): string {
    return this._descrizione;
  }

  set descrizione(value: string) {
    this._descrizione = value;
  }

  get isVideo(): boolean {
    return this._isVideo;
  }

  set isVideo(value: boolean) {
    this._isVideo = value;
  }

  get isPhoto(): boolean {
    return this._isPhoto;
  }

  set isPhoto(value: boolean) {
    this._isPhoto = value;
  }
}

export class GenericDocFactory {

  /**
   * Genera un'istanza dell'oggetto GenericDoc a partire da un object
   * @param obj
   */
  static getInstanceFromObject(obj: any): GenericDoc {
    return !!obj ? new GenericDoc(
      new Date(obj.data),
      obj.titolo,
      obj.mediaPath,
      '', // Campo che verrà popolato con l'url proveniente dallo storage di Firebase
      obj.descrizione,
      obj.isVideo,
      obj.isPhoto
    ) : new GenericDoc();
  }

  /**
   * Genera una lista di oggetti GenericDoc a partire da un object
   * @param list
   */
  static getInstanceListFromParse(list: any): GenericDoc[] {
    let genericDocList: GenericDoc[] = [];
    if (list && list.length > 0) {
      list.forEach((elem: any) => {
        genericDocList.push(GenericDocFactory.getInstanceFromObject(elem));
      });
    }
    return genericDocList;
  }

}
