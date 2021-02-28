/**
 * Api calls
 */
import axios from 'axios';
import config from './constants';

export class QuApiCalls {
    static async getCities() {
        const {data} = await axios.get(`${config.url.API_URL}/cities`);
        return data;
    }
    static async getFacilities(city) {
        const { data } = await axios.get(`${config.url.API_URL}/facilities?city=${city}`);
        return data;
    }

    static async getServices(facility) {
        const {data} = await axios.get(`${config.url.API_URL}/services?facility=${facility}`);
        return data;
    }
    static async createTicket(ticket) {
        const response = await axios.post(
            `${config.url.API_URL}/tickets/`, 
            ticket
        );
        return response;
    }
    static async sendEmail(email, ticketId) {
        const body = {
            email, ticketId
        };
        console.log(body)
        const response = await axios.post(
            `${config.url.API_URL}/tickets/email`,
            body
        );
        return response;
    }
};
