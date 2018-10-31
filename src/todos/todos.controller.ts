import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get(':id')
  findOne(@Param('id') id) {
    return `return todo #${id}`
  }

  @Post()
  create() {
    return 'add new todo'
  }

  @Get()
  findAll() {
    return 'return all todos'
  }
}
