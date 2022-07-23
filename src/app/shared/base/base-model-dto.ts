import { BaseModel } from './base-model';

export class BaseDto extends BaseModel implements Readonly<BaseDto> {

  public static transformDto(dto: Partial<any> | any, fields: string[]) {
    let it = new BaseDto();

    it.uid = dto.uid;

    for (let field of fields) {
      it[field] = dto[field];
    }

    if (!dto['deletedAt'])
    delete it['deletedAt'];

    return it;
  }

  public static transformDtos(dto: Partial<any[]> | any[], fields: string[]) {
    let dtos = [];

    for (let item of dto) {
      dtos.push(this.transformDto(item, fields));
    }

    return dtos;
  }
}
