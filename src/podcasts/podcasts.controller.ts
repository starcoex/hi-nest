import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}
  @Get()
  getAll() {
    return this.podcastsService.getAll();
  }
  @Post()
  create(@Body() podCasts) {
    console.log(podCasts);
    return this.podcastsService.create(podCasts);
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.podcastsService.getOne(id);
  }
  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData) {
    return this.podcastsService.update(id, updateData);
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.podcastsService.deleteOne(id);
  }
  @Get('/:id/episodes')
  getEpisodes(@Param('id') id: string) {
    return `Get episodes ${id} episodes`;
  }
  @Post('/:id/episodes')
  postEpisodes(@Param('id') id: string) {
    return `This will Post Episodes ${id}`;
  }
  @Patch('/:id/episodes/:episodeId')
  patchEpisodes(@Param() params: string[]) {
    console.log(params);
    return `EpisodeId`;
  }
  @Delete('/:id/episodes/:episodeId')
  removeEpisode(@Param() params: string[]) {
    return `Epsiode Delete`;
  }
}
