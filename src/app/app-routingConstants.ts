
export class AppRoutingConstants {

  public static path = {
    home : "home"
  };

  /**
   * Costanti relative alle maschere
   */
  public static masksState = {
    stateHome : "home"
  };

  public static fullPath(key: any): string {

    switch (key) {

      case 'home':
        return 'portal/' + this.path.home;

      default:
        return 'portal/' + this.path.home;

    }

  };

}
