
export class AppRoutingConstants {

  public static path = {
    home : 'home'
  };

  /**
   * Costanti relative alle sezioni dell'applicativo
   */
  public static masksState = {
    stateHome : 'home'
  };

  public static fullPath(key: string): string {

    switch(key) {
      case 'home':
        return 'portal/' + this.path.home;

      default:
        return 'portal/' + this.path.home;
    }

  }

}
