import Box from '@mui/material/Box';
import styles from './styles.module.scss';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import { CardResult } from '../CardResult';

import { Investment } from '../../services/investments/types';

export const InvestmentsGrid: React.FC<{
  investments: Investment[];
}> = ({ investments }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {investments.map((investment, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }} // 3 per row on md and up, 2 per row on sm, 1 per row on xs
              key={`${investment.id}-${index}`}
            >
              <CardResult
                title={investment.title}
                shortDescription={investment.shortDescription}
                longDescription={investment.longDescription}
                fundsRaised={investment.fundsRaised}
                fundsTarget={investment.fundsTarget}
                numberOfInvestors={investment.numberOfInvestors}
                category={investment.category}  
                location={investment.location}
                closingDate={investment.closingDate}
                problemStatement={investment.problemStatement}
                solutionStatement={investment.solutionStatement}
                useOfFunds={investment.useOfFunds}
                customers={investment.customers}
              />
            </Grid>
          ))}
          {investments.length === 2 && (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                className={styles.card}
                variant="outlined"
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  background: 'transparent',
                }}
              />{' '}
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};
