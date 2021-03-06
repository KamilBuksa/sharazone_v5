import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Auth } from '../../auth/entities/auth.entity';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    title: string;

    @Column()
    lead: string;

    @Column()
    body: string;


    @ManyToOne(
      () => Auth,
      (auth) => auth.articles,
      // {nullable:true}
    )
    auth:Auth;

    @Column({nullable:true})
    photoId:number;
}