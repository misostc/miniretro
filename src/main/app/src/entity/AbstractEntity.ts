export default interface AbstractEntity {
    id?:string,
    createdDate?: string,
    _links?: {
        self: {
            href: string
        }
    };
}