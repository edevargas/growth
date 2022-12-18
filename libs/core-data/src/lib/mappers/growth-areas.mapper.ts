import { GrowthArea as GrowthAreaApi } from "@flab/api-data";
import { GrowthArea } from "../models/growth-area";

export function mapGrowthAreaFromApiToLocalGrowthArea(growthAreaApi: GrowthAreaApi): GrowthArea {
  const growthArea = new GrowthArea();
  if(growthAreaApi.id) growthArea.id = growthAreaApi.id;
  if(growthAreaApi.description) growthArea.description = growthAreaApi.description;
  if(growthAreaApi.name) growthArea.name = growthAreaApi.name;
  if(growthAreaApi.icon) growthArea.icon = growthAreaApi.icon;

  return growthArea;
}
