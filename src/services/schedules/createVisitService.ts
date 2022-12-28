import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entitys";
import User from "../../entities/users.entities";
import UserToProperty from "../../entities/userToPropierties.entitye";
import { AppError } from "../../errors";
import { IScheduleRequest } from "../../interfaces/schedules";


const createVisitService = async(dataVisit: IScheduleRequest, userId: number): Promise<Object>=>{
    const visitRepository = AppDataSource.getRepository(UserToProperty)
    const propertyRepository = AppDataSource.getRepository(Property)
    const userRepository = AppDataSource.getRepository(User)

    const dataValidete = new Date(dataVisit.date).getDay() // monday = 0 , sunday = 6

    if(dataValidete > 5 ){
        throw new AppError("Non-business days of the week",400)
    }

    const hourInhour = parseInt(`${dataVisit.hour[0]}${dataVisit.hour[1]}${dataVisit.hour[3]}${dataVisit.hour[4]}`)
    
    if(hourInhour < 800 || hourInhour > 1800){
        throw new AppError("Non-business hours",400)
    }

    const property = await propertyRepository.findOneBy({ id: dataVisit.propertyId })
    if(!property){
        throw new AppError("Property not exists",404)
    }

    const user = await userRepository.findOneBy({ id: userId })

    if(!user){
        throw new AppError("User not exists",404)
    }

    const scheduleDateAndHourExist = await visitRepository.createQueryBuilder('shecdules_users_properties')
    .innerJoinAndSelect('shecdules_users_properties.property', 'property').
    where('shecdules_users_properties.hour = :hour',{ hour: dataVisit.hour}).
    andWhere('shecdules_users_properties.date = :date',{ date: dataVisit.date}).
    andWhere('property.id = :id_property',{ id_property: dataVisit.propertyId}).
    getOne()

    if(scheduleDateAndHourExist){
        throw new AppError("There is already a visitor at that date and time",409)
    }

    const userScheduleDateAndHourExist = await visitRepository.createQueryBuilder('shecdules_users_properties')
    .innerJoinAndSelect('shecdules_users_properties.user', 'user').
    where('shecdules_users_properties.hour = :hour',{ hour: dataVisit.hour}).
    andWhere('shecdules_users_properties.date = :date',{ date: dataVisit.date}).
    andWhere('user.id = :id_user',{ id_user: userId})
    .getOne()

    if(userScheduleDateAndHourExist){
        throw new AppError("User is already scheduled",409)
    }

    const newVisit = visitRepository.create({...dataVisit, property: property, user: user})
    await visitRepository.save(newVisit)


    return {message: "Successfully scheduled visit"}


}

export default createVisitService;