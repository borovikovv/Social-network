export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type DialogType = {
    id: number,
    name: string,
    image: string
}

export type MessageType = {
    id: number,
    text: string
}
export type PostType = {
    id: number,
    text: string
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}