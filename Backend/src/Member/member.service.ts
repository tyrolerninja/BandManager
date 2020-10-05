import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberDto } from './dto/member.dto';
import { Member } from './member.entity';

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(Member)
        private memberRepository: Repository<Member>) {}
    
    findAll(): Promise<Member[]> {
        return this.memberRepository.find();
    }

    findOne(id: number): Promise<Member> {
        return this.memberRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.memberRepository.delete(id);
    }

    async create(memberDto: MemberDto) : Promise<Member> {
        const member = this.mapMemberDtoToMember(memberDto);        
        return this.memberRepository.save(member)
    }

    async update(id: number, memberDto: MemberDto) : Promise<Member> {
        await this.memberRepository.findOneOrFail(id);
        
        const member = this.mapMemberDtoToMember(memberDto);

        return this.memberRepository.save(member)
    }

    private mapMemberDtoToMember(
        memberDto: MemberDto) : Member {
        const member = new Member();
        member.name = memberDto.name;
        member.address = memberDto.address;
        member.postCode = memberDto.postCode;
        member.city = memberDto.city;
        member.phoneNumber = memberDto.phoneNumber;
        member.email = memberDto.email;
        member.instrumentType = memberDto.instrumentType;
        member.memberType = memberDto.memberType;

        return member;
    }
        

    // addMedlem(name: string, address: string, postCode: number, city: string, instrumentType: InstrumentType, phoneNumber: string, email: string, memberType: MemberType): number {
    //     const id = Math.random;
        // this.members.push(new Member(id, name, address, postCode, city, instrumentType, phoneNumber, email, memberType))
        // return id;
}