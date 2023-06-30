import { Controller, Get } from '@nestjs/common';

@Controller('todo/1')
export class TodoController {
    @Get()
    getTodos(){
        return [1,2,3]
    }
}

