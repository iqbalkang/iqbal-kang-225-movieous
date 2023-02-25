import customFetch from '../utils/axios'

const postTrailer = async (trailer, setUploadProgress) => {
  try {
    const { data } = await customFetch.post(`/movie/upload-trailer`, trailer, {
      onUploadProgress: ({ loaded, total }) => {
        setUploadProgress(Math.floor((loaded / total) * 100))
      },
    })
    return { data }
  } catch (error) {
    const { response } = error
    if (response?.data) return { error: response.data }
    return { error }
  }
}

const postMovie = async movieInfo => {
  try {
    const { data } = await customFetch.post(`/movie`, movieInfo)
    return { data }
  } catch (error) {
    console.log(error)
    const { response } = error
    if (response?.data) return { error: response.data }
    return { error }
  }
}

const getMovies = async (page, limit) => {
  try {
    const { data } = await customFetch.get(`/movie?page=${page}$limit=${limit}`)
    return { data }
  } catch (error) {
    console.log(error)
    const { response } = error
    if (response?.data) return { error: response.data }
    return { error }
  }
}

export { postTrailer, postMovie, getMovies }
