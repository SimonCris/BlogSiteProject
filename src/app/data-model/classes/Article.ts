/** DataModel relativo ad un oggetto Article */
export class Article {

  private _data: Date;
  private _titolo: string;
  private _imagePath: string;
  private _imagePathFromStorage: any;
  private _testo: string;
  private _descrizione: string;

  constructor(data?: Date, titolo?: string, imagePath?: string, imagePathFromStorage?: any, testo?: string, descrizione?: string) {
    this._data = !!data ? new Date(data) : new Date();
    this._titolo = !!titolo ? titolo : '';
    this._testo = !!testo ? testo : '';
    this._imagePath = !!imagePath ? imagePath : '';
    this._imagePathFromStorage = !!imagePathFromStorage ? imagePathFromStorage : '';
    this._descrizione = !!descrizione ? descrizione : '';
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

  get imagePathFromStorage(): any {
    return this._imagePathFromStorage;
  }

  set imagePathFromStorage(value: any) {
    this._imagePathFromStorage = value;
  }

  get testo(): string {
    return this._testo;
  }

  set testo(value: string) {
    this._testo = value;
  }

  get descrizione(): string {
    return this._descrizione;
  }

  set descrizione(value: string) {
    this._descrizione = value;
  }
}

export class ArticleFactory {

  /**
   * Genera un'istanza dell'oggetto Article a partire da un object
   * @param obj
   */
  static getInstanceFromObject(obj: any): Article {
    return !!obj ? new Article(
      new Date(obj.data),
      obj.titolo,
      obj.imagePath,
      '', // Campo che verrà popolato con l'url proveniente dallo storage di Firebase
      obj.testo,
      obj.descrizione
    ) : new Article();
  }

  /**
   * Genera una lista di oggetti Article a partire da un object
   * @param list
   */
  static getInstanceListFromParse(list: any): Article[] {
    let articlesList: Article[] = [];
    if (list && list.length > 0) {
      list.forEach((elem: any) => {
        articlesList.push(ArticleFactory.getInstanceFromObject(elem));
      });
    }
    return articlesList;
  }

}
