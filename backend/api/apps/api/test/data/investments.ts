import { v4 as uuidv4 } from 'uuid';
import { formatISO } from 'date-fns';

import { INVESTMENT_FIELD_VALUES } from '@app/investments/constants/field-values';

const investmentId = uuidv4();
const { categories, locations } = INVESTMENT_FIELD_VALUES;

export const investments = [
  {
    id: investmentId,
    title: 'Meals-On-Wheels',
    shortDescription: 'A promising tech startup focusing on AI solutions.',
    longDescription: 'A promising tech startup focusing on AI solutions...',
    fundsRaised: 500000,
    fundsTarget: 1000000,
    numberOfInvestors: 11,
    category: categories[0],
    location: locations[0],
    closingDate: formatISO(new Date(), { representation: 'date' }),
    problemStatement:
      'The problem we are solving is the lack of efficient meal delivery services for the elderly.',
    solutionStatement:
      'Our solution is a tech-driven platform that connects volunteers with elderly individuals in need of meal delivery.',
    useOfFunds:
      'The funds will be used to develop the platform, hire staff, and market the service.',
    customers: 'Tesco, Asda, and local community centers.',
  },
];
