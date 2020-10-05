import {Controller, Get, Param, Post, Body, HttpCode, NotFoundException, Header} from '@nestjs/common'
import { MemberService } from "./member.service";
import { Member } from './member.entity';
import { MemberDto } from './dto/member.dto'
import { Put } from '@nestjs/common/decorators/http/request-mapping.decorator';


@Controller('members')
export class MemberController{
    constructor(private readonly memberService: MemberService) {}

    @Get()
    findAll(): Promise<Member[]> {
        return this.memberService.findAll();
      }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Member> {
        const member = this.memberService.findOne(id);
        if (!member) {
            throw new NotFoundException();
        }
        return member;
    }

    @Post()
    @HttpCode(204)
    @Header("Cache-Control", "none")
    createMember(@Body() memberDto: MemberDto): Promise<Member>
    {
        return this.memberService.create(memberDto);
    }

    @Put(':id')
    updateMember(@Param('id') id: number,
        @Body() memberDto: MemberDto): Promise<Member>
    {
        return this.memberService.update(id, memberDto);
    }
}