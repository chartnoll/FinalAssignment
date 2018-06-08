import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch
} from 'routing-controllers'
import Batch from './entity'
import User from '../users/entity'


@JsonController()
export default class BatchController {

    @Authorized()
    @Post('/batches')
    @HttpCode(201)
    async createBatch(
        @CurrentUser() user: User,
        @Body() newBatch
    ) {
        console.log(newBatch, "Being created...")
        const entity = await Batch.create(newBatch).save()

        return entity
    }

    @Authorized()
    @Get('/batches/:id([0-9]+)')
    getGame(
        @Param('id') id: number
    ) {
        return Batch.findOneById(id)
    }

    @Authorized()
    @Get('/batches')
    getGames() {
        return Batch.find()
    }
}

