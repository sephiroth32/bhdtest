export class Comment{
    id : number;
    article_id: number;
    content : string;
    name: string;
    email: string;
    website: string;
    dates: {
        created: string,
        updated: string
    }

}