export class Drone {
	public numProps: number;
	public frameWeight: number;
	public altitude: number;
	
	public weightUnit: string;
	public altitudeUnit: string;
	
	constructor(weightUnit, altitudeUnit
	) { 
		this.weightUnit = weightUnit;
		this.altitudeUnit = altitudeUnit;
	}
}