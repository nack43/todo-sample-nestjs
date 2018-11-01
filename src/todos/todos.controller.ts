import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get(':id')
  findOne(@Param('id') id) {
    return `return todo #${id}`
  }

  @Post()
  create(@Body() createTodoDto) {
    return 'add new todo'
  }

  @Get()
  findAll() {
    return 'return all todos'
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateTodoDto) {
    return `update todo #${id}`
  }
  
  @Delete(':id')
  remove(@Param('id') id) {
    return `delete todo #${id}`
  }

}
