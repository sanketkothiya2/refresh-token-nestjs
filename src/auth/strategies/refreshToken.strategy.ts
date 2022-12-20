import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: process.env.JWT_REFRESH_SECRET,
      secretOrKey: 'toprefsecret',
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: any) {
    console.log("🚀 ~ file: refreshToken.strategy.ts:21 ~ validate ~ payload", payload)
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    console.log("🚀 ~ file: refreshToken.strategy.ts:22 ~ validate ~ refreshToken", refreshToken)
    return { ...payload, refreshToken };
  }
}
