import { NavButtonConfig, SandboxRoutes } from "./interfaces";
import { Book, Category, BookType } from './interfaces';


export const SANDBOX_NAV_BUTTONS:NavButtonConfig[] = [
    {routerLink: SandboxRoutes.ANGULAR_NEW_FEATURES, text: 'Ng new features'},
    {routerLink: SandboxRoutes.BOOKS_APP, text: 'Book list manager'},
    
];


/////////////// BOOKS APP //////////////////////

export const GREAT_GATSBY: Book = {
    id: '1010',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: '1925',
    category: Category.DRAMA,
    type: BookType.FICTION,
    tags: [],
};

export const LORD_OF_THE_RINGS: Book = {
    id: '1020',
    title: 'The Lord of The Rings',
    author: 'J.R.R. Tolkein',
    year: '1937',
    category: Category.FANTASY,
    type: BookType.FICTION,
    tags: [],
};

export const CATCHER_IN_THE_RYE: Book = {
    id: '1030',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: '1951',
    category: Category.DRAMA,
    type: BookType.FICTION,
    tags: [],
};

export const NINETEEN_EIGHTY_FOUR: Book = {
    id: '1040',
    title: '1984',
    author: 'Gerorge Orwell',
    year: '1949',
    category: Category.SCIENCE_FICTION,
    type: BookType.FICTION,
    tags: [],
};

export const PRIDE_AND_PREJUDICE: Book = {
    id: '1050',
    title: 'Price and Prejudice',
    author: 'Jane Austen',
    year: '1813',
    category: Category.ROMANCE,
    type: BookType.FICTION,
    tags: [],
};

export const CATCH_TWENTY_TWO: Book = {
    id: '1060',
    title: 'Catch 22',
    author: 'Joseph Heller',
    year: '1961',
    category: Category.HUMOR,
    type: BookType.FICTION,
    tags: [],
};

export const ANIMAL_FARM: Book = {
    id: '1070',
    title: 'Animal Farm',
    author: 'George Orwell',
    year: '1945',
    category: Category.HISTORY,
    type: BookType.FICTION,
    tags: [],
};

export const BRAVE_NEW_WORLD: Book = {
    id: '1080',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: '1931',
    category: Category.SCIENCE_FICTION,
    type: BookType.FICTION,
    tags: [],
};

export const BRIEF_HISTORY_OF_TIME: Book = {
    id: '1090',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    year: '1988',
    category: Category.SCIENCE,
    type: BookType.NON_FICTION,
    tags: [],
};

export const SILENT_SPRING: Book = {
    id: '1100',
    title: 'Silent Spring',
    author: 'Rachel Carson',
    year: '1962',
    category: Category.SCIENCE,
    type: BookType.NON_FICTION,
    tags: [],
};

// export const : Book = {
//     title: '',
//     author: '',
//     year: '',
//     category: Category.SCIENCE_FICTION,
//     type: BookType.FICTION,
//     tags: [],
// };

export const ALL_BOOKS: Book[] = [
    GREAT_GATSBY,
    LORD_OF_THE_RINGS,
    CATCHER_IN_THE_RYE,
    NINETEEN_EIGHTY_FOUR,
    PRIDE_AND_PREJUDICE,
    CATCH_TWENTY_TWO,
    ANIMAL_FARM,
    BRAVE_NEW_WORLD,
    BRIEF_HISTORY_OF_TIME,
    SILENT_SPRING,
];

export const BOOK_INITIALIZER: Book = {
    id: '0',
    title: '',
    author: '',
    year: '',
    category: Category.SCIENCE_FICTION,
    type: BookType.FICTION,
    tags: [],
};

///////////////////////////////////////////////