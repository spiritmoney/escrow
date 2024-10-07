import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'src/users/users.controller';
import { VendorService } from './vendor.service';

@Injectable()
export class VendorGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly vendorService: VendorService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const decodedToken = this.jwtService.verify(token);
      request.user = decodedToken;

      if (request.user && request.user.role === UserRole.VENDOR) {
        // Check if the vendor's category is valid
        const vendor = await this.vendorService.getVendorDashboard(request.user);
        if (vendor.category === 'Electronics' || vendor.category === 'Healthcare') {
          return true;
        } else {
          throw new ForbiddenException('Invalid vendor category');
        }
      } else {
        throw new ForbiddenException('You do not have permission to access this resource');
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  private extractTokenFromHeader(request): string | null {
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return null;
    }

    return authorizationHeader.split(' ')[1];
  }
}
