
export class AppRoutingConstants {

  public static path = {
    home : "home",
    whoIAm: "whoIAm",
    tellAboutMe: "tellAboutMe"
  };

  /**
   * Costanti relative alle maschere
   */
  public static masksState = {
    stateHome : "home",
    stateWhoIAm: "whoIAm",
    stateTellAboutMe: "tellAboutMe"
  };

  public static fullPath(key: any): string {

    switch (key) {

      case 'home':
        return 'portal/' + this.path.home;

      case 'whoIAm':
        return 'portal/' + this.path.whoIAm;

      case 'tellAboutMe':
        return 'portal/' + this.path.tellAboutMe;

      default:
        return 'portal/' + this.path.home;

    }

  };

}
