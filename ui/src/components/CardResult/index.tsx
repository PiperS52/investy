import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import styles from './styles.module.scss';

export const CardResult: React.FC<{
  title: string;
  shortDescription: string,
  longDescription: string,
  fundsRaised: number,
  fundsTarget: number,
  numberOfInvestors: number,
  category: string,
  location: string,
  closingDate: string,
  problemStatement: string,
  solutionStatement: string,
  useOfFunds: string,
  customers: string
}> = ({ title, shortDescription, longDescription, fundsRaised, fundsTarget, numberOfInvestors, category, location, closingDate, problemStatement, solutionStatement, useOfFunds, customers }) => {
  return (
    <>
      <Card className={styles.card} variant="outlined">
        <CardContent>
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
          <p>{category}</p>
          <p>{shortDescription}</p>
          <p>{longDescription}</p> 
          <p>Funds Raised: ${fundsRaised.toLocaleString()}</p>
          <p>Funds Target: ${fundsTarget.toLocaleString()}</p>
          <p>Number of Investors: {numberOfInvestors}</p>
          <p>Location: {location}</p>
          <p>Closing Date: {new Date(closingDate).toLocaleDateString()}</p>
          <p>Problem Statement: {problemStatement}</p>
          <p>Solution Statement: {solutionStatement}</p>
          <p>Use of Funds: {useOfFunds}</p>
          <p>Customers: {customers}</p>
          <p>
            Status:{' '}
            {new Date(closingDate) < new Date()
              ? 'Closed' : 'Active'}
          </p>
        </CardContent>
      </Card>
    </>
  );
};
