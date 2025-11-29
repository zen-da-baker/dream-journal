import { DreamLinkModel } from "./DreamLinkModel";
import { LineModel } from "./LineModel";

// This is an extension of the dream link which contains the actual body of the dream which are line objects
export class DreamModel extends DreamLinkModel {

    body: Array< LineModel>;

    constructor( targetBody: Array<LineModel> = [] ) {

        // Inherit the constructor from the parent class
        super();

        this.body = targetBody;

    }

}