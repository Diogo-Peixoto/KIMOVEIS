import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm'
import { hashSync } from 'bcryptjs'
import UserToProperty from './userToPropierties.entitye'

@Entity('users')
class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column({ length: 50 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @Column({ default: false})
    isAdm: boolean

    @Column({ default: true})
    isActive: boolean

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToMany(()=> UserToProperty, userToProperty => userToProperty.user)
    schedules: UserToProperty[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

};

export default User;