const axios = require('axios');

const ATERNOS_API_URL = 'https://aternos.org/api/servers/Mert5588.aternos.me/status';
const CHECK_INTERVAL = 600000;  // 10 dakika

async function checkServer() {
    try {
        const response = await axios.get(ATERNOS_API_URL);
        console.log(`Server Status: ${response.data.status}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

setInterval(checkServer, CHECK_INTERVAL);
