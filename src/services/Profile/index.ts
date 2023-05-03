import { api } from "..";

export interface ProfileProps {
    imgUri: string
    email: string
}

export async function getProfileData(): Promise<ProfileProps> {
    try {
        const response = await api.get('/profile')
        const data = response.data ? response.data : []

        return data
    } catch (error) {
        throw new Error('Não foi possível carregar os dados do perfil')
    }
}