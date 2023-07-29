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

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
    }

    photos: {
        small: string
        large: string
    }
}