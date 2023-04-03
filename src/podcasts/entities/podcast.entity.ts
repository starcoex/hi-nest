import { Episode } from './episode.entity';

export class PodCast {
  id: number;
  title: string;
  category: string;
  rating: number;
  episodes: Episode[];
}
