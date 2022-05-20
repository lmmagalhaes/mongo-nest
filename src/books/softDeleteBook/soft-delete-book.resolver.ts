import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BookDto } from '../dto/book.dto';
import { SoftDeleteBookInput } from '../inputs/book.input';
import SoftDeleteBooksService from './soft-delete-book.service';

@Resolver()
export class SoftDeleteBooksResolver {
  constructor(private booksService: SoftDeleteBooksService) {}

  // Soft delete dos livros.
  @Mutation(() => BookDto)
  async softDeleteBook(@Args('input') input: SoftDeleteBookInput) {
    return this.booksService.softDelete(input);
  }
}
