import {ELEMENTS_TYPE} from "../models/elements-type";
import {ElementImage, ElementLink, ElementText} from "../models/elements-classes";
import {Observable, of} from "rxjs";


export   function getElementConstructor(elementKind: ELEMENTS_TYPE) {
  switch (elementKind) {
    case ELEMENTS_TYPE.TEXT:
      return ElementText;

    case ELEMENTS_TYPE.IMAGE:
      return ElementImage;

    case ELEMENTS_TYPE.LINK:
      return ElementLink;
  }
}

export function  handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };
}


