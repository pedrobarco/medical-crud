export interface CreateCaseDto {
    description: string;
}

export interface UpdateCaseDto {
    description?: string;
    isClosed?: boolean;
}
