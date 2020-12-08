import axios from "axios"

export default {
    saveMedia: function (result) {
        return axios.post("/api/movies", result)
    },
    getMedia: function (id) {
        return axios.get("/api/movies" + id)
    },
    getMedia: function () {
        return axios.get("/api/movies")
    },
    deleteMedia: function (id) {
        return axios.delete("/api/movies/" + id);
    },

}