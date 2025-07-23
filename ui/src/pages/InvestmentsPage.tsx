import { useGetInvestmentsQuery } from '../services/investments';
import Box from '@mui/material/Box';
// import styles from './styles.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import { InvestmentsGrid } from '../components/InvestmentsGrid';

export const InvestmentsPage: React.FC = () => {
  const { investments, isLoading, isError } =
    useGetInvestmentsQuery(
      undefined,
      {
        selectFromResult: ({ data, isLoading, isError }) => ({
          investments: data ?? [],
          isLoading,
          isError,
        }),
        refetchOnMountOrArgChange: true,
      }
    );
  
  console.log('line 21', investments);

  return (
    <>
      <div>
        <h1>Investments</h1>
        {isLoading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
        {isError && <p>Error loading investments</p>}
        {!investments.length ? (
          <p>No investments found</p>
        ) : (
          <InvestmentsGrid investments={investments} />
        )}
      </div>
    </>
  );
};
