import { ID, guid } from '@datorama/akita';

export interface Beer {
  id: ID;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
}

export function createBeer({ name, image_url }: Partial<Beer>) {
  return {
    id: guid(),
    name,
    image_url
  } as Beer;
}
