export class CreateUserDto {
    uid: string;
    email: string;
    given_name?: string;
    middle_name?: string;
    name?: string;
    family_name?: string;
    nickname?: string;
    phone_number?: string;
    comment?: string;
    picture?: string;
    directory?: string;
    metadata?: Record<string, any>;
    tags?: string[];
    is_suspended?: boolean;
    is_bot?: boolean;
  }
  