import { error } from '@sveltejs/kit'
import series from '../../../constants/series.js'

export function load(
    dados
) {
    const serieId = dados.params.id

    const serie = series.find(a => a.id === serieId)

    if (serie) {
        return {
            serie
        }
    } else {
        error(404, 'Serie não encontrada')
    }
}
