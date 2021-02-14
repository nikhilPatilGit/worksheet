

export class DocumentMetadata {
    private title: string;
    private description: string;
    private startDate: string;
    private dueDate: string;

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getStartDate(): string {
        return this.startDate;
    }

    public setStartDate(startDate: string): void {
        this.startDate = startDate;
    }

    public getDueDate(): string {
        return this.dueDate;
    }

    public setDueDate(dueDate: string): void {
        this.dueDate = dueDate;
    }
}

export const InitialDocumentMetadata = () => {
    const meta: DocumentMetadata = new DocumentMetadata();
    meta.setTitle("");
    meta.setDescription("");
    meta.setStartDate("2020-01-01");
    meta.setDueDate("2020-01-01");
    return meta;
}