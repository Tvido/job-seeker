import axios from 'axios';

const uriOffers = 'http://localhost:3333/api/v1/vacancies';
const uriResumes = 'http://localhost:3333/api/v1/candidates';

export const fetchOffers = () => axios.get(uriOffers);
export const createOffer = newOffer => axios.post(uriOffers, newOffer);

export const fetchResumes = () => axios.get(uriResumes);
export const createResume = newResume => axios.post(uriResumes, newResume);
