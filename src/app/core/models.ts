export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export class Category {
    id: number;
}

export class Article {
    id: number;
    title: string;
    author = new User();
    createdDate: Date;
    content: string;
    category = new Category();
    language: string;
}

export class Video {
    id: number;
    title: string;
    author = new User();
    createdDate: Date;
    youtubeId: string;
    description: string;
    category = new Category();
    language: string;
}
