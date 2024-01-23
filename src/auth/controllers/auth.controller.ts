import { Controller, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(authService: AuthService) {}

  @Post('/create')
  create(request: Request, response: Response) {}
}
