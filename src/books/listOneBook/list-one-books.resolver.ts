import { Args, Query, Resolver } from '@nestjs/graphql';
import { BookDto } from '../dto/book.dto';
import { FindBookInput } from '../inputs/book.input';
import ListOneBookService from './list-one-books.service';

@Resolver()
export class ListOneBookResolver {
  constructor(private booksService: ListOneBookService) {}

  // Eu, como usuário, desejo listar os livros cadastrados filtrando por uma palavra chave ou pelo id do livro;
  @Query(() => BookDto)
  async findBook(@Args('input') input: FindBookInput) {
    return this.booksService.findOne(input);
  }
}
