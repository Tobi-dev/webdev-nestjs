import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    identificationId: string;
}
