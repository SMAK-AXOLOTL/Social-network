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
    aboutMe: string
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

    photos: photosType
}

export type postType = {
    id: number
    message: string
    rating: number
}

export type photosType = {
    small: string | null
    large: string | null
}