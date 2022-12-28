import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('addresses')
class Addresse{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column({ nullable: true })
    number: string

    @Column()
    city: string

    @Column()
    state: string
}

export default Addresse;