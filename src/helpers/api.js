export const buildImageURL = (path, size = "w500") => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}

export const buildBackdropURL = (path, size = "original") => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}
