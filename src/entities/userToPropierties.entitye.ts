import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Property from "./properties.entitys";
import User from "./users.entities";


@Entity('shecdules_users_properties')
class UserToProperty{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(()=> Property, property => property.schedules)
    property: Property

    @ManyToOne(()=> User, user => user.schedules)
    user: User

}

export default UserToProperty;