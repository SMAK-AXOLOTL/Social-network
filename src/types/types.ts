export type userType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string | null
    followed: boolean
}