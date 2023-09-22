import { z } from 'zod';

export enum ArtilleryType {
	German = 'German',
	Soviet = 'Soviet',
	American = 'American',
	British = 'British',
}

export const distanceSchema = z.object({
	distance: z.number().positive().int().min(100).max(1600),
	artilleryType: z.nativeEnum(ArtilleryType),
});

export type DistanceSchema = z.infer<typeof distanceSchema>;
export type LineData = { slope: number; intercept: number };
