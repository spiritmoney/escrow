import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, // Use the secret from environment variables
    });
  }

  async validate(payload: any) {
    console.log('JWT Validation Payload:', payload); // Log the token's payload

    if (!payload) {
      console.log('Invalid JWT Payload'); // Log if the payload is invalid
      throw new UnauthorizedException('Invalid token payload');
    }

    // Return user information or other payload data needed for authorization
    return { id: payload.userId, email: payload.email }; // Assuming userId and email are part of the payload
  }
}
