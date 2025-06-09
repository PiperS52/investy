import { GetInvestmentDto } from './dto/get-investment.dto';
import { InvestmentsService } from './investments.service';
import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Investments')
@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all investments' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of investments.',
    type: [GetInvestmentDto],
  })
  async getAllInvestments(
    @Query(new ValidationPipe({ transform: true })) query: any,
  ): Promise<GetInvestmentDto[]> {
    // Logic to fetch all investments
    return [];
  }

  //   @Get(':id')
  //   @ApiOperation({ summary: 'Get investment by ID' })
  //   @ApiParam({ name: 'id', type: String, description: 'Investment ID' })
  //   @ApiResponse({ status: 200, description: 'Returns the investment details.' })
  //   @ApiResponse({ status: 404, description: 'Investment not found.' })
  //   async getInvestmentById(
  //     @Param('id', new ParseUUIDPipe()) id: string,
  //   ): Promise<GetInvestmentDto> {
  //     // Logic to fetch investment by ID
  //     return null;
  //   }
}
