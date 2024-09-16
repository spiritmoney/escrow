import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class EscrowEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    seller: string;
  
    @Column()
    verifier: string;
  
    @Column()
    description: string;
  
    @Column()
    amount: string; 
    
    @Column({ default: 'Pending' })
    status: string;
  
    @Column({ nullable: true })
    winner?: string;
  
    @Column({ nullable: true })
    arbitrator?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
