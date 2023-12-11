

export interface NavButtonConfig {
    routerLink: string;
    text: string;
}

export enum SandboxRoutes {
    ANGULAR_NEW_FEATURES = 'ng-new-features',
    BOOKS_APP = 'books',
}


/////////////// BOOKS APP //////////////////////////


export interface Book {
    id?: string;
    title: string;
    author: string;
    year: string;
    category?: Category;
    tags?: string[];
    type?: BookType;   // fiction or non-fiction
}

export enum Category {
    DRAMA = 'drama',
    HUMOR = 'humor',
    BIOGRAPHY = 'biography',
    HORROR = 'horror',
    MYSTERY = 'mystery',
    CHILDRENS = 'childrens',
    YOUNG_ADULT = 'young-adult',
    SCIENCE_FICTION = 'science-fiction',
    ROMANCE = 'romance',
    HISTORY = 'history',
    FANTASY = 'fantasy',
    SCIENCE = 'science',

}

export enum BookType {
    FICTION = 'fiction',
    NON_FICTION = 'non-fiction',
}






//////////////////////////////////////////////