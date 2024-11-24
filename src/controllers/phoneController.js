import { getPhoneData, getPhoneDataByStatus } from '../services/phoneService.js';
import LoggerService from '../services/loggerService.js';
//Logger service to log the event for requested phone number api

export const fetchPhoneData = async (req, res, next) => {
    try {
        const data = await getPhoneData();

        if (!data || !Array.isArray(data) || data.length === 0) {

            LoggerService.warn('No phone numbers available.');

            return res.status(404).json({
                error: 'No phone numbers available.',
            });
        }
        LoggerService.warn('Phone Numbers loaded successfully.');

        res.status(200).json({
            message: 'Phone numbers fetched successfully.',
            data,
        });
    } catch (error) {
        LoggerService.error('Error fetching phone data', error);
        next({
            status: error.response?.status || 500,
            message: error.message || 'Failed to fetch phone data.',
        });
    }
};

export const getPhoneDataOnStatus = async (req, res, next) => {
    try {
        const data = await getPhoneDataByStatus(req);
        LoggerService.warn('filtered data fetched successfully.');
        res.status(200).json({
            message: 'filtered data fetched successfully.',
            data,
        });

    }
    catch (error) {
        LoggerService.error('Error fetching filtered data', error);
        next({
            status: error.response?.status || 500,
            message: error.message || 'Failed to fetch phone data.',
        });

    }

}