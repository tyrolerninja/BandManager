import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    postCode: string;
    
    @Column()
    city: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    instrumentType: InstrumentType;

    @Column()
    memberType: MemberType;
}