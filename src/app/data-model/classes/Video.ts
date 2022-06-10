/** DataModel relativo ad un oggetto Video */
export class Video {

  private _data: Date;
  private _titolo: string;
  private _videoPath: string;
  private _videoPathFromStorage: any;
  private _descrizione: string;

  constructor(data?: Date, titolo?: string, videoPath?: string, videoPathFromStorage?: any, descrizione?: string) {
    this._data = !!data ? new Date(data) : new Date();
    this._titolo = !!titolo ? titolo : '';
    this._descrizione = !!descrizione ? descrizione : '';
    this._videoPath = !!videoPath ? videoPath : '';
    this._videoPathFromStorage = !!videoPathFromStorage ? videoPathFromStorage : '';
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

  get videoPath(): string {
    return this._videoPath;
  }

  set videoPath(value: string) {
    this._videoPath = value;
  }

  get descrizione(): string {
    return this._descrizione;
  }

  set descrizione(value: string) {
    this._descrizione = value;
  }

  get videoPathFromStorage(): any {
    return this._videoPathFromStorage;
  }

  set videoPathFromStorage(value: any) {
    this._videoPathFromStorage = value;
  }
}

export class VideoFactory {

  /**
   * Genera un'istanza dell'oggetto Video a partire da un object
   * @param obj
   */
  static getInstanceFromObject(obj: any): Video {
    return !!obj ? new Video(
      new Date(obj.data),
      obj.titolo,
      obj.videoPath,
      '', // Campo che verrà popolato con l'url proveniente dallo storage di Firebase
      obj.descrizione
    ) : new Video();
  }

  /**
   * Genera una lista di oggetti Video a partire da un object
   * @param list
   */
  static getInstanceListFromParse(list: any): Video[] {
    let videosList: Video[] = [];
    if (list && list.length > 0) {
      list.forEach((elem: any) => {
        videosList.push(VideoFactory.getInstanceFromObject(elem));
      });
    }
    return videosList;
  }

}
