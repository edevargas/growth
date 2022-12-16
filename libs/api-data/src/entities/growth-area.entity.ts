import { ApiProperty } from '@nestjs/swagger';
export class GrowthArea {
  @ApiProperty({ example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8', description: "uuid"})
  id: string;
  name: string;
  description: string;
  icon: string;
}
