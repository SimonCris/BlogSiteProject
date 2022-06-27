
export class AppRoutingConstants {

  public static path = {
    home : "home",
    whoIAm: "chiSono",
    tellAboutMe: "diconoDiMe",
    works: "works",
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
    imageConsulting: "consulenzaImmagine",
    shopping: "shopping",
    styleAnalysis: "analisiStile",
    contacts: "contatti"
  };

  /**
   * Costanti relative alle maschere
   */
  public static masksState = {
    stateHome : "home",
    stateWhoIAm: "chiSono",
    stateTellAboutMe: "diconoDiMe",
    stateWorks: "works",
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
    stateServicesListImageConsulting: "consulenzaImmagine",
    stateServicesListShopping: "shopping",
    stateServicesListStyleAnalysis: "analisiStile",
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

      case this.path.works:
        return 'portal/' + this.path.works;

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

      case this.path.imageConsulting:
        return 'portal/' + this.path.imageConsulting;

      case this.path.shopping:
        return 'portal/' + this.path.shopping;

      case this.path.styleAnalysis:
        return 'portal/' + this.path.styleAnalysis;

      case this.path.contacts:
        return 'portal/' + this.path.contacts;

      default:
        return 'portal/' + this.path.home;

    }

  };

}
