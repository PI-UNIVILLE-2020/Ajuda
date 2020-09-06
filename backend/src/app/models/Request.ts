import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  BaseEntity
} from "typeorm";

import User from "./User";
import Item from "./Item";
import RequestHelper from "./RequestHelper";

@Entity("requests")
class Request extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  title: string;

  @Column("text")
  description: string;

  @Column("integer")
  status: number;

  @Column("varchar")
  latitude: string;

  @Column("varchar")
  longitude: string;

  @Column()
  owner_id: string;

  @Column()
  item_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "owner_id" })
  owner: User;

  @ManyToOne(() => Item)
  @JoinColumn({ name: "item_id" })
  item: Item;

  @ManyToMany(type => RequestHelper, requesthelper => requesthelper.requests)
  helpers: RequestHelper[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Request;