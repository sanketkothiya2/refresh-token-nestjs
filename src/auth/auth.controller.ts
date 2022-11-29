import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  signin(@Body() data: AuthDto) {
    return this.authService.signIn(data);
  }

  @Get('test')
  test(@Req() req: Request) {
    console.log('it\'s working ');
    return 'its working'
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: Request) {
    this.authService.logout(req.user['sub']);
  }

  // @Get('test')
  // test(@Req() req: Request) {
  //   console.log('it\'s working ');
  //   return 'its working'
  // }

  // @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  // refreshTokens(@Req() req: Request) {
  refreshTokens() {
    console.log('refresh tokens');
    return { message: 'hello' }
    // const userId = req.user['sub'];
    // if (userId) {
    //   return userId

    // } else {
    //   return { message: "null user" }
    // }
    // console.log("🚀 ~ file: auth.controller.ts ~ line 33 ~ AuthController ~ refreshTokens ~ userId", userId)
    // const refreshToken = req.user['refreshToken'];
    // console.log("🚀 ~ file: auth.controller.ts ~ line 35 ~ AuthController ~ refreshTokens ~ refreshToken", refreshToken)
    // return this.authService.refreshTokens(userId, refreshToken);
  }
}
