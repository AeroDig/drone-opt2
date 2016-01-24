///<reference path="../node_modules/angular2/src/core/metadata.d.ts"/>
import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { Drone } from './model/drone';
import {CalculationService} from './service/calculation'

@Component({
    selector: 'drone-app',
    templateUrl: './app/view/drone-parameters.html'
})

export class AppComponent {
	unitSelected = UnitSystem.Metric;
	weightLabels:  String[];
	lengthLabels: String[];
	droneDescription = "";
	propDescription = "";

	calculatedAltitudeDisplay = "";
	calculatedWeightDisplay = "";
	unitsLength = ["Meters", "Ft"];
	unitsWeight = ["Grams", "Lbs"];

	constructor(public calcService:CalculationService) {
		this.weightLabels[UnitSystem.Metric] = "Kg";
		this.weightLabels[UnitSystem.Standard] = "Lbs";

		this.lengthLabels[UnitSystem.Metric] = "m";
		this.lengthLabels[UnitSystem.Standard] = "ft";
	}

  model = new Drone("Grams", "Meters");

	onPropChange(event:any) {
		if(this.model.numProps == 3) { this.droneDescription = "Tricopter"; return; }
		if(this.model.numProps == 4) { this.droneDescription = "Quadcopter"; return; }
		if(this.model.numProps == 6) { this.droneDescription = "Hexacopter"; return; }
		if(this.model.numProps == 8) { this.droneDescription = "Octocopter"; return; }
  }

	onAltitudeChange(event:any) {
		if(this.model.altitude <= 0) { return };
		if(this.model.altitudeUnit == "Meters")
		{
			this.calculatedAltitudeDisplay = String(this.model.altitude / 1000.0) + " Kilometers";
		} else if(this.model.altitudeUnit == "Ft") {
			var miles = this.model.altitude / 5280.0;
			var plural = miles > 0 ? "" : "s";
			this.calculatedAltitudeDisplay = String(miles.toFixed(2)) + " Mile" + plural;
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

	onUnitChange(event:any)
	{
		this.model.altitudeUnit = this.unitsLength[this.unitSelected];
		this.model.weightUnit = this.unitsWeight[this.unitSelected];
	}

	submitted = false;

	onSubmit() { this.submitted = true; }

	// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}