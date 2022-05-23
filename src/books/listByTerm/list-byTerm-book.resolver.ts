import { Args, Query, Resolver } from '@nestjs/graphql';
import { BookDto } from '../dto/book.dto';
import { FindBookByTermInput } from '../inputs/book.input';
import ListByTermBookService from './list-byTerm-book.service';

@Resolver()
export class ListByTermBookResolver {
  constructor(private booksService: ListByTermBookService) {}

  // Eu, como usuário, desejo listar os livros cadastrados filtrando por uma palavra chave;
  @Query(() => [BookDto])
  async findByTerm(@Args('input') input: FindBookByTermInput) {
    return this.booksService.findByTerm(input);
  }
}
