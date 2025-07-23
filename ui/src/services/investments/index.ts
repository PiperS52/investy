import { Investment } from './types';
import { api } from '../api';

export const investmentsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getInvestments: build.query<
      Investment[],
      void
    >({
      query: () => ({
        url: `/investments`,
        method: 'GET',
      }),
      providesTags: ['Investments'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetInvestmentsQuery, useLazyGetInvestmentsQuery } =
  investmentsApi;
