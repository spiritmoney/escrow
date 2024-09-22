// import { IsNotEmpty, IsString } from 'class-validator';


export class CreateDisputeDto {
    // @IsNotEmpty()
    disputingPartyId: number; // ID of the user initiating the dispute

    // @IsString()
    // @IsNotEmpty()
    description: string;
}
