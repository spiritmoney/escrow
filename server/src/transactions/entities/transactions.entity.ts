import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from 'src/users/entities/users.entity';
import { ProductEntity } from 'src/products/entities/products.entity';
import { EscrowEntity } from 'src/escrow/entities/escrow.entity';

@Entity()
export class TransactionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.id)
    buyer: UserEntity;

    @ManyToOne(() => ProductEntity, (product) => product.id)
    product: ProductEntity;

    @Column()
    amount: string;

    @Column({ default: 'Pending' })
    status: string;

    @ManyToOne(() => EscrowEntity, (escrow) => escrow.id, { nullable: true })
    escrow?: EscrowEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
