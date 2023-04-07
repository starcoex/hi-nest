// import { UpdateEpisodeDto } from './dtos/update-episode.dto';
// import { CreateEpisodeDto } from './dtos/create-episode.dto';
// import { CreatePodcastDto } from './dtos/create-podcast.dto';
// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
// } from '@nestjs/common';
// import { PodcastsService } from './podcasts.service';
// import { UpdatePodcastDto } from './dtos/update-podcast.dto';

// @Controller('podcasts')
// export class PodcastsController {
//   constructor(private readonly podcastsService: PodcastsService) {}
//   @Get()
//   getAll() {
//     return this.podcastsService.getAll();
//   }
//   @Post()
//   create(@Body() podCasts: CreatePodcastDto) {
//     return this.podcastsService.create(podCasts);
//   }
//   @Get('/:id')
//   getOne(@Param('id') id: number) {
//     return this.podcastsService.getOne(id);
//   }
//   @Patch('/:id')
//   update(@Param('id') id: number, @Body() updateData: UpdatePodcastDto) {
//     return this.podcastsService.update(id, updateData);
//   }
//   @Delete('/:id')
//   remove(@Param('id') id: number) {
//     return this.podcastsService.deleteOne(id);
//   }
//   // @Get('/:id/episodes')
//   // getEpisodes(@Param('id') id: number) {
//   //   return `Get episodes ${id} episodes`;
//   // }
//   // @Post('/:id/episodes')
//   // postEpisodes(@Param('id') id: number) {
//   //   return `This will Post Episodes ${id}`;
//   // }
//   // @Patch('/:id/episodes/:episodeId')
//   // patchEpisodes(@Param() params: string[]) {
//   //   console.log(params);
//   //   return `EpisodeId`;
//   // }
//   // @Delete('/:id/episodes/:episodeId')
//   // removeEpisode(@Param() params: string[]) {
//   //   return `Epsiode Delete`;
//   // }
// }
// @Controller('/podcasts/:id')
// export class EpisodeController {
//   constructor(private readonly podcastsService: PodcastsService) {}
//   @Get('/episodes')
//   getEpisodes(@Param('id') podcastId: number) {
//     return this.podcastsService.getEpisode(podcastId);
//   }
//   @Post('/episodes')
//   createEpisode(
//     @Param('id') podcastId: number,
//     @Body() createEpisodeDto: CreateEpisodeDto,
//   ) {
//     return this.podcastsService.createEpisode(podcastId, createEpisodeDto);
//   }
//   @Delete('/episodes/:episodeId')
//   deleteEpisode(
//     @Param('id') podcastId: number,
//     @Param('episodeId') episodeId: number,
//   ) {
//     return this.podcastsService.deleteEpisode(podcastId, episodeId);
//   }
//   @Patch('/episodes/:episodeId')
//   updateEpisode(
//     @Param('podcastId') podcastId: number,
//     @Param('episodeId') episodeId: number,
//     @Body() updateEpisodeDto: UpdateEpisodeDto,
//   ) {
//     return this.podcastsService.updateEpisode(
//       podcastId,
//       episodeId,
//       updateEpisodeDto,
//     );
//   }
// }
