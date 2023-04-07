import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { PodcastsService } from './podcasts.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PodCast } from './entities/podcast.entity';
import { CoreOutput } from './dtos/output.dto';
import {
  EpisodesOutput,
  EpisodesSearchInput,
  PodcastOutput,
  PodcastSearchInput,
} from './dtos/podcast.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';

@Resolver((of) => PodCast)
export class PodCastResolver {
  constructor(private readonly podcastsService: PodcastsService) {}
  @Query((returns) => [PodCast])
  getAllPodcasts() {
    return this.podcastsService.getAllPodcasts();
  }
  @Mutation((returns) => CoreOutput)
  createPodcast(@Args('input') createPodcastDto: CreatePodcastDto) {
    return this.podcastsService.createPodcast(createPodcastDto);
  }
  @Query((returns) => PodcastOutput)
  getPodcast(@Args('input') podcastSearchInput: PodcastSearchInput) {
    return this.podcastsService.getPodcast(podcastSearchInput.id);
  }
  @Mutation((returns) => CoreOutput)
  deletePodcast(@Args('input') podcastSearchInput: PodcastSearchInput) {
    return this.podcastsService.deleteOnePodcast(podcastSearchInput.id);
  }
  @Mutation((returns) => CoreOutput)
  updatePodcast(@Args('input') updatePodcastDto: UpdatePodcastDto): CoreOutput {
    return this.podcastsService.updatePodcast(updatePodcastDto);
  }
}

@Resolver((of) => Episode)
export class EpisodeResolver {
  constructor(private readonly podcastsService: PodcastsService) {}
  @Query((returns) => EpisodesOutput)
  getEpisodes(
    @Args('input') podcastSearchInput: PodcastSearchInput,
  ): EpisodesOutput {
    return this.podcastsService.getEpisode(podcastSearchInput.id);
  }
  @Mutation((returns) => CoreOutput)
  createEpisode(@Args('input') updateEpisodeDto: UpdateEpisodeDto) {
    return this.podcastsService.updateEpisode(updateEpisodeDto);
  }
  @Mutation((returns) => CoreOutput)
  deleteEpisode(
    @Args('input') episodesSearchInput: EpisodesSearchInput,
  ): CoreOutput {
    return this.podcastsService.deleteEpisode(episodesSearchInput);
  }
}
