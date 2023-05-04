import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface LoginProps {
    email: string
    password: string
}

interface Props {
    user: {
        name: string
        email: string
        imgUri: string
    }
    token: string | null,
    login: (data: LoginProps) => void
    logout: () => void
}

export const useAuth = create<Props>()(
    persist(
        (set, get) => ({
            user: {
                name: '',
                email: '',
                imgUri: 'https://github.com/gabomoreira.png'
            },
            token: 'token',
            login: (data) => set(state => ({
                user: {
                    email: data.email,
                    name: 'Nome do studante',
                    imgUri: state.user.imgUri
                },
                token: 'token'
            })),
            logout: () => set(state => ({
                user: {
                    email: '',
                    name: '',
                    imgUri: ''
                },
                token: null
            })),
        }),
        {
            name: '@learn-app/auth',
        }
    )
)