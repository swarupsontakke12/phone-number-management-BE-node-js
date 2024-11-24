import axios from 'axios';
import LoggerService from './loggerService.js';
let phoneNumbers = [];

export const getPhoneData = async () => {
    const url = process.env.API_URL;
    try {
        LoggerService.info(`Calling external API: ${url}`);
        const response = await axios.get(url);
        LoggerService.info('External API responded successfully.');
        // Simulated messageCount to show the data
        phoneNumbers = response.data.map((item) => ({
            ...item,
            messageCount: Math.floor(Math.random() * 100),
        }));
        return phoneNumbers;
    } catch (error) {
        LoggerService.error('Error calling external API', error);
        throw error;

    }
};


export const getPhoneDataByStatus = async (req) => {
    LoggerService.info(`Calling status API to get data depending on status requested by frontend: ${req.body.status}`);
    try {
        const requestedStatus = req.body.status;
        if (!requestedStatus) {
            throw new Error('please select status from frontend')
        }
        const response = await axios.get(process.env.API_URL);
        LoggerService.info('External API responded successfully.');

        if (requestedStatus.toLowerCase() === 'all') {
            LoggerService.info('User selected all filter from frontend.');
            return phoneNumbers;
        }
        else {
            LoggerService.info(`User selected ${requestedStatus} filter from frontend.`);
            return phoneNumbers.filter((data) => data.status.toLowerCase() === requestedStatus.toLowerCase())
        }
    }
    catch (error) {
        LoggerService.info('error in status api', error);
        throw error;

    }
}

