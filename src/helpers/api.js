export const buildImageURL = (path, size = "w500") => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}
