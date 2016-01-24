import {Drone} from "../model/drone";
import {Injectable} from "angular2/core";

@Injectable()

export class CalculationService {
	drone:Drone;

	constructor(drone:Drone ) {
		this.drone = drone;
	}

}