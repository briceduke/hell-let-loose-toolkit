import type { DistanceSchema, LineData } from './schemas';
import { ArtilleryType } from './schemas';

export const getLineData = (artilleryType: ArtilleryType): LineData => {
	switch (artilleryType) {
		case ArtilleryType.German:
			return { slope: -0.2370882353, intercept: 1001.525 };
		case ArtilleryType.American:
			return { slope: -0.2370882353, intercept: 1001.525 };
		default:
			return { slope: -0.2370882353, intercept: 1001.525 };
	}
};
export const calculateFiringSolution = (schema: DistanceSchema): number => {
	const { slope, intercept } = getLineData(schema.artilleryType);
	return Math.round(schema.distance * slope + intercept);
};
