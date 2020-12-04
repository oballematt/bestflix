import axios from "axios"

export default {
    saveMedia : function(result) {
        return axios.post("/api/movies", result)
    },
    getMedia: function(){
        return axios.get("/api/profile")
    }
}