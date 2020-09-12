import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Pink from "../ColorTherapy/pink"
import Green from "../ColorTherapy/green"
import Blue from "../ColorTherapy/blue"
import Orange from "../ColorTherapy/orange"
import Yellow from "../ColorTherapy/yellow"
import "./colorstyle.css"

export default function Color() {
  return (<div>
    <div className="title">
      Color Therapy
  </div>
  <div className="colors">
    <Pink/> Red is used to stimulate the body and mind and to increase circulation.
    <Orange/> Orange is used to heal the lungs and to increase energy levels.
    <Yellow/> Yellow is thought to stimulate the nerves and purify the body.
    <Green/> Green is used to create a calming atmosphere and induce peace of mind.
    <Blue/>Blue is believed to soothe illnesses and treat pain.
    </div>
    </div>
  );
}
