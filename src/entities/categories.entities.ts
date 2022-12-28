import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Property from "./properties.entitys";


@Entity('categories')
class Category{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(() => Property, propertie => propertie.category)
    properties: Property[]

}

export default Category;