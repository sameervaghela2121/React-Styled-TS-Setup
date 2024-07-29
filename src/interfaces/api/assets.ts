namespace AssetsTypes {
  // =========  Get Asset Details  =========

  export namespace GetAssetDetails {
    // Get Asset Details Request

    export interface Request {
      assetId: string;
    }

    // Get Asset Details Response

    export interface Response {
      data: ResponseObj[];
    }

    export interface ResponseObj {
      title: string;
      start: number;
      end: number;
      interactivities: Interactivity[];
    }

    export interface Interactivity {
      _id: string;
      book: string;
      bookVersion: string;
      type: string;
      content: Content;
    }

    export interface Content {
      page: number;
      x: number;
      y: number;
    }
  }

  export interface Error {
    statusCode: number;
    errorCode: string;
    message: string[];
    error: string;
  }
}

export default AssetsTypes;
