import axios from "axios"

export default {
    saveMedia : function(mediaData) {
        return axios.post("/api/movies", mediaData)
    },
    getMedia: function(){
        return axios.get("/api/profile")
    }
}