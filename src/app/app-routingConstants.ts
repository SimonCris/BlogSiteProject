
export class AppRoutingConstants {

  public static path = {
    home : "home",
    whoIAm: "chiSono",
    tellAboutMe: "diconoDiMe"
  };

  /**
   * Costanti relative alle maschere
   */
  public static masksState = {
    stateHome : "home",
    stateWhoIAm: "chiSono",
    stateTellAboutMe: "diconoDiMe"
  };

  public static fullPath(key: any): string {

    switch (key) {

      case 'home':
        return 'portal/' + this.path.home;

      case 'chiSono':
        return 'portal/' + this.path.whoIAm;

      case 'diconoDiMe':
        return 'portal/' + this.path.tellAboutMe;

      default:
        return 'portal/' + this.path.home;

    }

  };

}
