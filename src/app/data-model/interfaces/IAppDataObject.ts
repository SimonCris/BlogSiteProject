/** Interfaccia che contiene tutti gli oggetti che vanno mantenuti in persistenza
 * durante la navigazione dell'applicativo */
export interface IAppDataObject {

  hash: string;
  state: string;
  previousState: string;

  lossDataPrev: any;
}
