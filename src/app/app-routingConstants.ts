
export class AppRoutingConstants {

  public static path = {
    home : "home",
    whoIAm: "chiSono",
    tellAboutMe: "diconoDiMe",
    contacts: "contatti"
  };

  /**
   * Costanti relative alle maschere
   */
  public static masksState = {
    stateHome : "home",
    stateWhoIAm: "chiSono",
    stateTellAboutMe: "diconoDiMe",
    stateContacts: "contatti"
  };

  public static fullPath(key: any): string {

    switch (key) {

      case 'home':
        return 'portal/' + this.path.home;

      case 'chiSono':
        return 'portal/' + this.path.whoIAm;

      case 'diconoDiMe':
        return 'portal/' + this.path.tellAboutMe;

      case 'contatti':
        return 'portal/' + this.path.contacts;

      default:
        return 'portal/' + this.path.home;

    }

  };

}
