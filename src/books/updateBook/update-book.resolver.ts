import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BookDto } from '../dto/book.dto';
import { UpdateBookInput } from '../inputs/book.input';
import UpdateBookService from './update-book.service';

@Resolver()
export class UpdateBookResolver {
  constructor(private booksService: UpdateBookService) {}

  // Eu, como usuário, desejo alterar um livro informando seu id, seu nome e o nome do seu autor;
  @Mutation(() => BookDto)
  async updateBook(@Args('input') input: UpdateBookInput) {
    return this.booksService.update(input);
  }
}
