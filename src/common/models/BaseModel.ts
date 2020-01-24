import * as _ from "lodash";
import { Toolkit } from "../../Toolkit";

/**
 * @author arifnpm
 */
export class BaseModel {
	public id: string;

	constructor(id?: string) {
		this.id = id?id: Toolkit.UID();
	}

	public getID(): string {
		return this.id;
	}
}
