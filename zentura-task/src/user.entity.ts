import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', unique: true, nullable: false })
    uid: string;
  
    @Column({ type: 'varchar', unique: true, nullable: false })
    email: string;
  
    @Column({ type: 'varchar', nullable: true })
    given_name: string;
  
    @Column({ type: 'varchar', nullable: true })
    middle_name: string;
  
    @Column({ type: 'varchar', nullable: true })
    name: string;
  
    @Column({ type: 'varchar', nullable: true })
    family_name: string;
  
    @Column({ type: 'varchar', nullable: true })
    nickname: string;
  
    @Column({ type: 'varchar', nullable: true })
    phone_number: string;
  
    @Column({ type: 'text', nullable: true })
    comment: string;
  
    @Column({ type: 'varchar', nullable: true })
    picture: string;
  
    @Column({ type: 'varchar', nullable: true })
    directory: string;
  
    @Column({ type: 'json', nullable: true })
    metadata: object
  
    @Column({ type: 'simple-array', nullable: true })
    tags: string[];
  
    @Column({ type: 'boolean', default: false })
    is_suspended: boolean;
  
    @Column({ type: 'boolean', default: false })
    is_bot: boolean;
  }
  