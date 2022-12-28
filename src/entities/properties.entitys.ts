import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Addresse from "./addresses.entityes";
import Category from "./categories.entities";
import UserToProperty from "./userToPropierties.entitye";


@Entity('properties')
class Property{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: false })
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    value: number

    @Column({ type: 'integer' })
    size: number

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToOne(()=> Addresse) @JoinColumn()
    address: Addresse

    @ManyToOne(()=> Category, category => category.properties)
    category: Category

    @OneToMany(()=> UserToProperty, userToProperty => userToProperty.property)
    schedules: UserToProperty[]
}

export default Property;