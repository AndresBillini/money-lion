export interface FeedContent {
    id: string;
    imageUri: string;
    title: string;
    subTitle: string;
    author: string;
    content: string;
    numberOfComments: number;
    comments: Comment[];
}

export interface ContentCard {
    id: string;
    imageUri: string;
    textData: TextData;
    metadata: Metadata;
    comments: Comment[];
}

interface TextData {
    title: string;
    subTitle: string;
    body: string;
    author: Author;
}

interface Author {
    first: string;
    last: string;
}

interface Metadata {
    priority: number;
    publishDate: string;
}

interface Comment {
    text: string;
    author: string;
    profilePic: string;
    likes: number;
}

