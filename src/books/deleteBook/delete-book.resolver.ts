import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FindBookInput } from '../inputs/book.input';
import DeleteBooksService from './delete-book.service';

@Resolver()
export class DeleteBooksResolver {
  constructor(private booksService: DeleteBooksService) {}

  // Eu, como usuário, desejo deletar um livro informando seu id.
  @Mutation(() => String)
  async deleteBook(@Args('input') input: FindBookInput) {
    return this.booksService.deleteBook(input._id);
  }
}
