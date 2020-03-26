import {MemberDefinition} from '../interfaces/member-definition';

export class Member implements MemberDefinition {
  id: string;
  name: string;

  constructor(params: MemberDefinition) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
