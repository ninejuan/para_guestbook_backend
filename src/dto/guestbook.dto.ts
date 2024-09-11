import { ApiProperty } from '@nestjs/swagger';

export class GuestbookDto {
    @ApiProperty({
        description: "작성자의 이름입니다.",
        example: "10521 이주안"
    })
    name: String;

    @ApiProperty({
        description: "방명록 내용입니다.",
        example: "파파라 선린제 넘모 재미써여"
    })
    content: String;
}