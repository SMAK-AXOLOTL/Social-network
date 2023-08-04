export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string | null
    followed: boolean
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
}
export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type PostType = {
    id: number
    message: string
    rating: number
}

export type PhotosType = {
    small: string | null
    large: string | null
}