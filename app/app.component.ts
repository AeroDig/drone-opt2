import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { Drone } from './model/drone';

@Component({
    selector: 'drone-app',
    templateUrl: './app/html/app.component.html'
})

export class AppComponent { 
	droneType = "";
	calculatedAltitudeDisplay = "";
	calculatedWeightDisplay = "";
	unitsLength = ["Meters", "Ft"];
	unitsWeight = ["Grams", "Lbs"];
	
  model = new Drone("Grams", "Meters");
	
	onPropChange(event:any) {
		if(this.model.numProps == 3) { this.droneType = "Tricopter"; return; }
		if(this.model.numProps == 4) { this.droneType = "Quadcopter"; return; }
		if(this.model.numProps == 6) { this.droneType = "Hexacopter"; return; }
		if(this.model.numProps == 8) { this.droneType = "Octocopter"; return; }
  }
	
	onAltitudeChange(event:any) {
		if(this.model.altitudeUnit == "Meters")
		{
			this.calculatedAltitudeDisplay = String(this.model.altitude / 1000.0) + " Kilometers";
		} else if(this.model.altitudeUnit == "Ft") {
			var miles = this.model.altitude / 5280.0;
			var plural = miles > 0 ? "" : "s";
			this.calculatedAltitudeDisplay = String(miles) + " Mile" + plural;
		}
	}
	
	onWeightChange(event:any)
	{
		if(this.model.weightUnit == "Lbs")
		{
			this.calculatedWeightDisplay = String(this.model.frameWeight) + " Lbs";
		} else if(this.model.weightUnit == "Grams") {
			this.calculatedWeightDisplay = String(this.model.frameWeight / 1000) + " Kilograms";
		}
	}
  
	submitted = false;
  
	onSubmit() { this.submitted = true; }
	
	// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}