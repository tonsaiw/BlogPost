import { Controller, HttpCode, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('/login')
  async login(@Request() req, @Res({ passthrough: true }) res) {
    
    // sign jwt
    const access_token = await this.authService.signJwt(req.user);
    // save the token in the cookie
    res.cookie('access_token', access_token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return {
      message: 'Login successful', username: req.user.username
    };
  } 
  @Post('logout')
  @HttpCode(200)
  async logout(@Res() res) {
    res.cookie('access_token', '', {
      httpOnly: true, // This should match how the cookie was initially set
      expires: new Date(0), // Set to a past date to delete the cookie
      path: '/', // Match the path the cookie was set on
      sameSite: 'Strict', // Match other cookie settings
      secure: process.env.NODE_ENV === 'production', // Set `secure` in production
    });
    
    return res.json({ message: 'Logout successful' });
  }
  
}

