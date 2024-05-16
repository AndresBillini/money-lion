import services from "..";
import { FeedContent } from "../interfaces";


describe("Test Content Feed", () => {
    let contentFeed: FeedContent[]|string = [];
    beforeEach(async () => {
        contentFeed = await services.getContentFeed();
    });

    it("Get Content Feed", () => {
        if (contentFeed.length > 0) {
            expect(contentFeed.length).toBeGreaterThan(0);

            const firstContent = contentFeed.at(1) as FeedContent;
            expect(firstContent).toHaveProperty("id");
            expect(firstContent).toHaveProperty("imageUri");
            expect(firstContent).toHaveProperty("title");
            expect(firstContent).toHaveProperty("subTitle");
            expect(firstContent).toHaveProperty("author");
            expect(firstContent).toHaveProperty("content");
            expect(firstContent).toHaveProperty("numberOfComments");
            expect(firstContent).toHaveProperty("comments");
            expect(firstContent.id).toBe("497f6eca-6276-4993-bfeb-53cbbbba6f08");
        } else {
            expect(contentFeed).toBe('There was an error with the API');
        }
    });
});