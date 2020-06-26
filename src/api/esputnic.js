import axios from 'axios';

const get = (url) => {
    return axios
        .get(`https://esputnik.com${url}`, {
            auth: {
                username: 'Inbaze.info@gmail.com',
                password: 'Inbaze2020M_N',
            },
        })
        .then((result) => result.data);
};
const post = (url, body = {}) => {
    return axios
        .post(`https://esputnik.com${url}`, body, {
            auth: {
                username: 'Inbaze.info@gmail.com',
                password: 'Inbaze2020M_N',
            },
        })
        .then((result) => result.data);
};

const sendEmailEvent = (email, key, params) => {
    const body = {
        eventTypeKey: key,
        keyValue: email,
        params: params,
    };

    return post('/api/v1/event', body);
};

export const getInfo = () => {
    return get('/api/v1/account/info');
};

export const addContact = (email) => {
    return post('/api/v1/contact', {
        channels: [
            {
                type: 'email',
                value: email,
            },
        ],
    });
};

export const addContacts = (...contacts) => {
    const body = {
        contacts: contacts.map(({ email }) => ({
            // firstName: '...',
            // lastName: '...',
            channels: [
                {
                    type: 'email',
                    value: email,
                },
            ],
        })),
        dedupeOn: 'email',
    };
    debugger;
    return post('/api/v1/contacts', body);
};

export const sendSubscribeUsersEvent = (email, params) => {
    return sendEmailEvent(email, 'SubscribeUsers', params);
};
