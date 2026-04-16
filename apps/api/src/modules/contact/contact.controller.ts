import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactService } from './contact.service';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send a contact message' })
  @ApiResponse({ status: 200, description: 'Message sent successfully.' })
  @ApiResponse({ status: 400, description: 'Validation failed.' })
  async create(@Body() dto: CreateContactDto): Promise<{ success: boolean }> {
    return this.contactService.send(dto);
  }
}
