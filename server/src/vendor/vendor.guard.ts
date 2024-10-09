import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'src/users/users.controller';
import { VendorService } from './vendor.service';
import { ProductCategory } from './vendor.schema';
import { UserService } from 'src/users/users.service';

@Injectable()
export class VendorGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly vendorService: VendorService,  private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const decodedToken = this.jwtService.verify(token);

      console.log('Decoded Token:', decodedToken); // Debug: Print decoded token

      // Attach decoded token to the request object
      request.user = decodedToken;

      const user = await this.userService.findUserById(request.user.userId); // Assuming userId is in the token payload
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      request.user = user; // Attach the comple
      console.log('User Data:', request.user); 
      if (request.user && request.user.role === UserRole.VENDOR) {
        // Check if the vendor's category is valid
        // const vendor = await this.vendorService.getVendorDashboard(request.user);
        // const isValidVendorCategory = Object.values(ProductCategory).includes(vendor.category);

        // if (isValidVendorCategory) {
        //   return true;
        // } else {
        //   throw new ForbiddenException('Invalid vendor category');
        // }
        return true;
        // return true;
      } else {
        throw new ForbiddenException('You do not have permission to access this resource');
      }
    } catch (error) {
            console.error('Error during token validation:', error.message); // Debug: Print error

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
