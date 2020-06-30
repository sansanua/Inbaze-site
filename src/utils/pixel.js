/* eslint-disable no-undef */

export const trackLead = () => {
    console.log("fbq('track', 'Lead');");
    fbq('track', 'Lead');
};

export const trackSubmitApplication = () => {
    console.log("fbq('track', 'SubmitApplication');");
    fbq('track', 'SubmitApplication');
};
