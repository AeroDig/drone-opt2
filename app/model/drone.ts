export class Drone {
	public numProps: number;
	public frameWeight: number;
	public altitude: number;
	
	public weightUnit: string;
	public altitudeUnit: string;
	
	public propDiameter: number;
	public noBlades: number;
	
	public propPitch: number;
	
	public propRpm; number;
	public pConst: number;
	
	public kv: number;
	
	constructor(weightUnit, altitudeUnit
	) { 
		this.weightUnit = weightUnit;
		this.altitudeUnit = altitudeUnit;
		this.altitude = 0.0;
	}
}