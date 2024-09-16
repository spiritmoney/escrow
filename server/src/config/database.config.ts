import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseConfig = {
  imports: [ConfigModule], // Ensure ConfigModule is imported
  inject: [ConfigService], // Inject ConfigService
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    url: configService.get<string>('DATABASE_URL'),  // Use DATABASE_URL
    autoLoadEntities: true, // Automatically load entities
    synchronize: true,      // Synchronize entities with the database (use with caution in production)
    ssl: {
      rejectUnauthorized: false,  // Ensure SSL connection for RDS if required
    },
  }),
};
