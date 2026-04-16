import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

describe('ContactController', () => {
  let controller: ContactController;
  let service: ContactService;

  beforeEach(() => {
    // NestJS の DI はデコレータメタデータに依存するため、
    // Vitest (esbuild) 環境ではインスタンスを手動で組み立てる
    service = new ContactService();
    controller = new ContactController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return success when valid dto is provided', async () => {
    const dto = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message for contact form.',
    };

    const result = await controller.create(dto);
    expect(result).toEqual({ success: true });
  });

  it('should call contactService.send with the dto', async () => {
    const dto = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message for contact form.',
    };

    const sendSpy = vi.spyOn(service, 'send').mockResolvedValue({ success: true });
    await controller.create(dto);
    expect(sendSpy).toHaveBeenCalledWith(dto);
  });
});
