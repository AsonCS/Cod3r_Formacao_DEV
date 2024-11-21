import { error } from '@sveltejs/kit'
import autores from '../../../constants/autores.js'

export function load(
    dados
) {
    const authorId = dados.params.id

    const author = autores.find(a => a.id === authorId)

    if (author) {
        return {
            author
        }
    } else {
        error(404, 'Autor não encontrado')
    }
}
