import { formatISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';
import { INVESTMENT_FIELD_VALUES } from '../constants/field-values';

const { categories, locations } = INVESTMENT_FIELD_VALUES;

export class GetInvestmentDto {
  @ApiProperty({
    description: 'Unique identifier for the investment',
    example: uuidv4(),
  })
  id: string;

  @ApiProperty({
    description: 'Title of the investment',
    example: 'Meals-On-Wheels',
  })
  title: string;

  @ApiProperty({
    description: 'Short description of the investment',
    example: 'A promising tech startup focusing on AI solutions.',
  })
  shortDescription: string;

  @ApiProperty({
    description: 'Long description of the investment',
    example: 'A promising tech startup focusing on AI solutions...',
  })
  longDescription: string;

  @ApiProperty({
    description: 'The amount of funds raised so far',
    example: '500000',
  })
  fundsRaised: number;

  @ApiProperty({
    description: 'The target amount of funds to be raised',
    example: '500000',
  })
  fundsTarget: number;

  @ApiProperty({
    description: 'The number of investors who have invested so far',
    example: '15',
  })
  numberOfInvestors: number;

  @ApiProperty({
    description: 'Category of the investment',
    enum: categories,
    example: 'Technology',
  })
  category: string;

  @ApiProperty({
    description: 'Location of the investment',
    enum: locations,
    example: 'USA',
  })
  location: string;

  @ApiProperty({
    description: 'The closing date of the investment in ISO format',
    example: formatISO(new Date(), { representation: 'date' }),
  })
  closingDate: string;

  @ApiProperty({
    description: 'Problem statement for the investment',
    example: 'Currently there is an issue with...',
  })
  problemStatement: string;

  @ApiProperty({
    description: 'Solution statement for the investment',
    example: 'We address this challenge by...',
  })
  solutionStatement: string;

  @ApiProperty({
    description: 'How funds raised are intended to be used',
    example: 'Marketing, product development, and hiring.',
  })
  useOfFunds: string;

  @ApiProperty({
    description: 'Existing customers',
    example: 'Barclays, HSBC, and Lloyds Bank.',
  })
  customers: string;
}
