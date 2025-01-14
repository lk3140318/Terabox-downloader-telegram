const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://teraboxapp.com/s/1RCBLl4RBXh446ZKoHgHZJt_Q`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
