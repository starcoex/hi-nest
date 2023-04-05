import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { PodCast } from './entities/podcast.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';

@Injectable()
export class PodcastsService {
  private podcasts: PodCast[] = [];
  getAll(): { podcasts: PodCast[]; err: string | null } {
    return { podcasts: this.podcasts, err: null };
  }
  getOne(id: number): { podcast: PodCast | null; err: string | null } {
    const foundPodcast = this.podcasts.filter((podcast) => podcast.id === id);
    if (foundPodcast.length === 0) {
      return { podcast: null, err: 'Podcast not found' };
    }
    if (foundPodcast.length === 1) {
      return { podcast: foundPodcast[0], err: null };
    }
    if (foundPodcast.length > 2) {
      return { podcast: null, err: 'More than one items with same id.' };
    }
    // if (!foundPodcast) {
    //   throw new NotFoundException(`podcasts with id ${id} not found`);
    // }
    // return { podcast: foundPodcast, err: null };
  }
  deleteOne(id: number): { err: string | null } {
    // this.getOne(id);
    // this.podcasts.filter((podcast) => podcast.id !== id);
    this.podcasts = this.podcasts.filter((p) => p.id !== id);
    return { err: null };
  }
  create({ title: title, category: category }: CreatePodcastDto): {
    id: number;
    err: string | null;
  } {
    const id = Date.now();
    this.podcasts.push({
      id,
      title,
      category,
      rating: 0,
      episodes: [],
    });
    return { id, err: null };
    // casts: CreatePodcastDto ) {
    // this.podcasts.push({
    //   id: this.podcasts.length + 1,
    //   ...casts,
    //   episodes: [],
    // });
  }
  update(id: number, updateData: UpdatePodcastDto): { err: string | null } {
    const { podcast, err: findErr } = this.getOne(id);
    if (findErr) {
      return { err: findErr };
    }
    const { err: deleteErr } = this.deleteOne(id);
    if (deleteErr) {
      return { err: deleteErr };
    }
    // this.deleteOne(id);
    this.podcasts.push({ ...podcast, ...updateData });
    return { err: null };
  }
  getEpisode(podcastId: number): {
    episodes: Episode[] | null;
    err: string | null;
  } {
    const { podcast, err } = this.getOne(podcastId);
    if (err) {
      return { episodes: null, err };
    }
    return { episodes: podcast.episodes, err: null };
  }
  createEpisode(
    podcastId: number,
    { title, category }: CreateEpisodeDto,
  ): { epsodeId: number | null; err: string | null } {
    const { podcast, err: findErr } = this.getOne(podcastId);
    if (findErr) {
      return { epsodeId: null, err: findErr };
    }
    const epsodeId = Date.now();
    const newEpisode: Episode = { id: epsodeId, title, category, rating: 0 };
    const { err } = this.update(podcastId, {
      ...podcast,
      episodes: [...podcast.episodes, newEpisode],
    });
    if (err) {
      return { epsodeId: null, err };
    }
    return { epsodeId: epsodeId, err: null };
  }
  deleteEpisode(podcastId: number, episodeId: number): { err: string | null } {
    const { podcast, err: findErr } = this.getOne(podcastId);
    if (findErr) {
      return { err: findErr };
    }
    const { err } = this.update(podcastId, {
      episodes: podcast.episodes.filter((episode) => episode.id !== episodeId),
    });
    if (err) {
      return { err };
    }
    return { err: null };
  }
  findEpisode(
    podcastId: number,
    episodeId: number,
  ): { episode: Episode | null; err: string | null } {
    const { episodes, err: findErr } = this.getEpisode(podcastId);
    if (findErr) {
      return { episode: null, err: 'Episode not found' };
    }
    const episode = episodes.find((episode) => episode.id === episodeId);
    if (!episode) {
      return { episode: null, err: 'Episode not found' };
    }
    return { episode, err: null };
  }
  updateEpisode(
    podcastId: number,
    episodeId: number,
    updateEpisodeDto: UpdateEpisodeDto,
  ): { err: string | null } {
    const { episode, err: findEpisodeErr } = this.findEpisode(
      podcastId,
      episodeId,
    );
    if (findEpisodeErr) {
      return { err: findEpisodeErr };
    }
    const { err: deleteErr } = this.deleteEpisode(podcastId, episodeId);
    if (deleteErr) {
      return { err: deleteErr };
    }
    const { podcast, err: foundPodcastErr } = this.getOne(podcastId);
    if (foundPodcastErr) {
      return { err: foundPodcastErr };
    }
    this.update(podcastId, {
      ...podcast,
      episodes: [...podcast.episodes, { ...episode, ...updateEpisodeDto }],
    });
    return { err: null };
  }
}
