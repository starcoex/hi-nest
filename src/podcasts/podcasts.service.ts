import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { PodCast } from './entities/podcast.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { CoreOutput } from './dtos/output.dto';
import {
  EpisodesOutput,
  PodcastOutput,
  EpisodesSearchInput,
} from './dtos/podcast.dto';

@Injectable()
export class PodcastsService {
  private podcasts: PodCast[] = [];
  getAllPodcasts(): PodCast[] {
    return this.podcasts;
  }
  // getAll(): { podcasts: PodCast[]; err: string | null } {
  //   return { podcasts: this.podcasts, err: null };
  // }
  getPodcast(id: number): PodcastOutput {
    // const foundPodcast = this.podcasts.filter((podcast) => podcast.id === id);
    const podcast = this.podcasts.find((podcast) => podcast.id === id);
    if (!podcast) {
      return {
        ok: false,
        error: `${id} id podcast does't exist!`,
      };
    }
    return {
      ok: true,
      podcast,
    };
  }
  // if (foundPodcast.length === 0) {
  //   return { podcast: null, err: 'Podcast not found' };
  // }
  // if (foundPodcast.length === 1) {
  //   return { podcast: foundPodcast[0], err: null };
  // }
  // if (foundPodcast.length > 2) {
  //   return { podcast: null, err: 'More than one items with same id.' };
  // }

  deleteOnePodcast(id: number): CoreOutput {
    // this.getOne(id);
    // this.podcasts.filter((podcast) => podcast.id !== id);
    const { ok, error } = this.getPodcast(id);
    if (!ok) {
      return { ok, error };
    }
    this.podcasts = this.podcasts.filter((p) => p.id !== id);
    return { ok };
  }
  createPodcast({ title, category }: CreatePodcastDto): CoreOutput {
    // const id = Date.now();
    this.podcasts.push({
      id: this.podcasts.length + 1,
      title,
      category,
      rating: 0,
      episodes: [],
    });
    return { ok: true, error: null };
    // casts: CreatePodcastDto ) {
    // this.podcasts.push({
    //   id: this.podcasts.length + 1,
    //   ...casts,
    //   episodes: [],
    // });
  }
  updatePodcast({ id, ...rest }: UpdatePodcastDto): CoreOutput {
    // const { podcast, err: findErr } = this.getOne(id);
    const { ok, error, podcast } = this.getPodcast(id);
    if (!ok) {
      return { ok, error };
    }
    // if (findErr) {
    //   return { err: findErr };
    // }
    // const { err: deleteErr } = this.deleteOne(id);
    // if (deleteErr) {
    //   return { err: deleteErr };
    // }
    // this.deleteOne(id);
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== id);
    this.podcasts.push({ ...podcast, ...rest });
    return { ok };
  }

  getEpisode(podcastId: number): EpisodesOutput {
    const { ok, error, podcast } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    return { ok: true, episodes: podcast.episodes };
  }
  createEpisode({
    id: podcastId,
    title,
    category,
  }: CreateEpisodeDto): CoreOutput {
    const { ok, error, podcast } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    // const epsodeId = Date.now();
    const newEpisode: Episode = {
      id: podcast.episodes.length + 1,
      title,
      category,
    };
    // const { err } = this.update(podcastId, {
    //   ...podcast,
    //   episodes: [...podcast.episodes, newEpisode],
    // });
    // if (err) {
    //   return { epsodeId: null, err };
    // }
    this.updatePodcast({
      id: podcastId,
      episodes: [...podcast.episodes, newEpisode],
    });
    return { ok: true };
  }
  deleteEpisode({ podcastId, episodeId }: EpisodesSearchInput): CoreOutput {
    const { ok, error, podcast } = this.getPodcast(podcastId);
    // if (findErr) {
    //   return { err: findErr };
    // }
    if (!ok) {
      return { ok, error };
    }
    this.updatePodcast({
      id: podcastId,
      episodes: podcast.episodes.filter((episode) => episode.id !== episodeId),
    });
    // const { err } = this.update(podcastId, {
    //   episodes: podcast.episodes.filter((episode) => episode.id !== episodeId),
    // });
    // if (err) {
    //   return { err };
    // }
    return { ok: true };
  }
  // findEpisode(
  //   podcastId: number,
  //   episodeId: number,
  // ): { episode: Episode | null; err: string | null } {
  //   const { episodes, err: findErr } = this.getEpisode(podcastId);
  //   if (findErr) {
  //     return { episode: null, err: 'Episode not found' };
  //   }
  //   const episode = episodes.find((episode) => episode.id === episodeId);
  //   if (!episode) {
  //     return { episode: null, err: 'Episode not found' };
  //   }
  //   return { episode, err: null };
  // }
  updateEpisode({
    podcastId,
    episodeId,
    ...rest
  }: UpdateEpisodeDto): CoreOutput {
    // const { episode, err: findEpisodeErr } = this.findEpisode(
    //   podcastId,
    //   episodeId,
    // );
    const { ok, error, podcast } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }

    // if (findEpisodeErr) {
    //   return { err: findEpisodeErr };
    // }
    // const { err: deleteErr } = this.deleteEpisode(podcastId, episodeId);
    // if (deleteErr) {
    //   return { err: deleteErr };
    // }
    const episodeIndex = podcast.episodes.findIndex(
      ({ id }) => id === episodeId,
    );
    const newEpisode = { ...podcast.episodes[episodeIndex], ...rest };
    this.deleteEpisode({ podcastId, episodeId });
    const { podcast: changedPodcast } = this.getPodcast(podcastId);
    this.updatePodcast({
      id: podcastId,
      episodes: [...changedPodcast.episodes, newEpisode],
    });
    return { ok: true };
    // const { podcast, err: foundPodcastErr } = this.getOne(podcastId);
    // if (foundPodcastErr) {
    //   return { err: foundPodcastErr };
    // }
    // this.update(podcastId, {
    //   ...podcast,
    //   episodes: [...podcast.episodes, { ...episode, ...updateEpisodeDto }],
    // });
    // return { err: null };
  }
}
