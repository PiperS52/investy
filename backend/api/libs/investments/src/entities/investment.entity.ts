import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investments')
export class Investment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'title', length: 255 })
  title: string;

  @Column({ type: 'varchar', name: 'short_description', length: 750 })
  shortDescription: string;

  @Column({ type: 'varchar', name: 'long_description', length: 3000 })
  longDescription: string;

  @Column({ type: 'integer', name: 'funds_raised' })
  fundsRaised: number;

  @Column({ type: 'integer', name: 'funds_target' })
  fundsTarget: number;

  @Column({ type: 'smallint', name: 'number_of_investors' })
  numberOfInvestors: number;

  @Column({ type: 'varchar', name: 'category', length: 255 })
  category: string;

  @Column({ type: 'varchar', name: 'location', length: 255 })
  location: string;

  @Column({ type: 'date', name: 'closing_date' })
  closingDate: string;

  @Column({ type: 'varchar', name: 'problem_statement', length: 750 })
  problemStatement: string;

  @Column({ type: 'varchar', name: 'solution_statement', length: 750 })
  solutionStatement: string;

  @Column({ type: 'varchar', name: 'use_of_funds', length: 750 })
  useOfFunds: string;

  @Column({ type: 'varchar', name: 'customers', length: 750 })
  customers: string;
}
