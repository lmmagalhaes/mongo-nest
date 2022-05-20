import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BookDto } from '../dto/book.dto';
import { BookInput } from '../inputs/book.input';
import CreateBooksService from './create-book.service';

@Resolver()
export class CreateBooksResolver {
  constructor(private booksService: CreateBooksService) {}

  // Eu, como usuário, desejo cadastrar um livro informando seu nome e o nome do seu autor;
  @Mutation(() => BookDto)
  async createBook(@Args('input') input: BookInput) {
    return this.booksService.create(input);
  }
}
