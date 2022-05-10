
export class AppRoutingConstants {

  public static path = {
    home : "home",
    whoIAm: "chiSono",
    tellAboutMe: "diconoDiMe",
    armocromia: "armocromia",
    wedding: "wedding",
    lookChange: "cambioLook",
    faceShapes: "formeViso",
    bodyShapes: "formeCorpo",
    makeUpInPalette: "makeUpInPalette",
    qualifications: "qualifiche",
    blog: "blog",
    blogArticles: "articoli",
    blogVideos: "video",
    blogPhotos: "foto",
    servicesList: "listaServizi",
    contacts: "contatti"
  };

  /**
   * Costanti relative alle maschere
   */
  public static masksState = {
    stateHome : "home",
    stateWhoIAm: "chiSono",
    stateTellAboutMe: "diconoDiMe",
    stateArmocromia: "armocromia",
    stateWedding: "wedding",
    stateLookChange: "cambioLook",
    stateFaceShapes: "formeViso",
    stateBodyShapes: "formeCorpo",
    stateMakeUpInPalette: "makeUpInPalette",
    stateQualifications: "qualifiche",
    stateBlog: "blog",
    stateBlogArticles: "articoli",
    stateBlogVideos: "video",
    stateBlogPhotos: "foto",
    stateServicesList: "listaServizi",
    stateContacts: "contatti"
  };

  public static fullPath(key: any): string {

    switch (key) {

      case this.path.home:
        return 'portal/' + this.path.home;

      case this.path.whoIAm:
        return 'portal/' + this.path.whoIAm;

      case this.path.tellAboutMe:
        return 'portal/' + this.path.tellAboutMe;

      case this.path.armocromia:
        return 'portal/' + this.path.armocromia;

      case this.path.wedding:
        return 'portal/' + this.path.wedding;

      case this.path.lookChange:
        return 'portal/' + this.path.lookChange;

      case this.path.bodyShapes:
        return 'portal/' + this.path.bodyShapes;

      case this.path.faceShapes:
        return 'portal/' + this.path.faceShapes;

      case this.path.makeUpInPalette:
        return 'portal/' + this.path.makeUpInPalette;

      case this.path.qualifications:
        return 'portal/' + this.path.qualifications;

      case this.path.blog:
        return 'portal/' + this.path.blog;

      case this.path.blogArticles:
        return 'portal/' + this.path.blogArticles;

      case this.path.blogPhotos:
        return 'portal/' + this.path.blogPhotos;

      case this.path.blogVideos:
        return 'portal/' + this.path.blogVideos;

      case this.path.servicesList:
        return 'portal/' + this.path.servicesList;

      case this.path.contacts:
        return 'portal/' + this.path.contacts;

      default:
        return 'portal/' + this.path.home;

    }

  };

}
