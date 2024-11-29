export interface ApiResponse<T> {
    codeStatus: number
    data?: T | null
    error?: any | null
}
