import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  protected readonly jwtService: JwtService; // Change to protected

  constructor(jwtService: JwtService) {
    super();
    this.jwtService = jwtService; // Initialize in constructor
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    console.log("Token: ", token);

    try {
      // Verify the token and decode the payload
      const decodedToken = this.jwtService.verify(token);
      console.log('Decoded Token:', decodedToken); // Debug the decoded token

      request.user = decodedToken;

      return true;
    } catch (error) {
      console.log('Error during token validation:', error.message); // Log error message for debugging
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  private extractTokenFromHeader(request): string | null {
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return null; // Return null if no Bearer token is found
    }

    return authorizationHeader.split(' ')[1]; // Return the token part of the Bearer header
  }
}
