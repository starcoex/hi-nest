import { PodCast } from './entities/podcast.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PodcastsService {
  private podcasts: PodCast[] = [];
  getAll(): PodCast[] {
    return this.podcasts;
  }
  getOne(id: string): PodCast {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`podcasts with id ${id} not found`);
    }
    return podcast;
  }
  deleteOne(id: string) {
    this.getOne(id);
    this.podcasts.filter((podcast) => podcast.id !== +id);
  }
  create(casts) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...casts,
    });
  }
  update(id: string, updateData) {
    const podcast = this.getOne(id);
    this.deleteOne(id);
    this.podcasts.push({ ...podcast, ...updateData });
  }
}
