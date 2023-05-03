import { api } from "..";

export interface Course {
    id: string
    title: string
    img: string
}

export async function getAllCourses(): Promise<Course[]> {
    try {
        const response = await api.get('/courses')
        const data = response.data ? response.data : []

        return data
    } catch (error) {
        throw new Error('Não foi possível carregar os cursos')
    }
}