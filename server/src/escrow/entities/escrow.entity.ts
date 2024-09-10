import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { TransactionEntity } from 'src/transactions/entities/transactions.entity';

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

    @ManyToOne(() => TransactionEntity, (transaction) => transaction.id)
    transaction: TransactionEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
