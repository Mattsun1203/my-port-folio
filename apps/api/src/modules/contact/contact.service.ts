import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  async send(dto: CreateContactDto): Promise<{ success: boolean }> {
    // TODO: メール送信の実装 (nodemailer)
    // 現時点ではログ出力のみ
    console.log('[ContactService] New contact message received:', {
      name: dto.name,
      email: dto.email,
      messageLength: dto.message.length,
    });

    return { success: true };
  }
}
