import { ContentCard, FeedContent } from "./interfaces";

const mockApi = 'https://stoplight.io/mocks/engine/fullstack-spec/52502230/content';

const getFeedContent = (): Promise<FeedContent[]|string> => {
    return new Promise<FeedContent[]|string>(async (resolve, reject) => {
        try {
            const fetchContent = await fetch(mockApi);
            const content = await fetchContent.json();
    
            const feedContent: FeedContent[] = content.contentCards.map((card: ContentCard) => {
                return {
                    id: card.id,
                    imageUri: card.imageUri,
                    title: card.textData.title,
                    subTitle: card.textData.subTitle,
                    author: `${card.textData.author.first} ${card.textData.author.last}`,
                    content: card.textData.body,
                    numberOfComments: card.comments.length,
                    comments: card.comments
                };
            });
    
            resolve(feedContent);
        } catch (_err) {
            reject(`There was an error with the API`);
        }
    });
};

const services = {
    getFeedContent
};

export default services;