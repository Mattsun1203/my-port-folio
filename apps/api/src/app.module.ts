import { Module } from '@nestjs/common';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [ContactModule],
})
export class AppModule {}
