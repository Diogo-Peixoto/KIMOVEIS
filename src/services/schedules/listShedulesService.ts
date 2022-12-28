import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entitys";
import { AppError } from "../../errors";
import { ISchedulePropertiesResponse } from "../../interfaces/schedules";
import { scheduleArrayResponseSchema } from "../../schemas/schedules";


const listShedulesService = async(propertyID: string): Promise<ISchedulePropertiesResponse> => {
    const propertyRepository = AppDataSource.getRepository(Property)

    const property = await propertyRepository.findOneBy({ id: propertyID })

    if(!property){
        throw new AppError("Property not exists",404)
    }

    const schedules = await propertyRepository.createQueryBuilder('properties')
    .innerJoinAndSelect('properties.schedules', 'schedules').
    innerJoinAndSelect('schedules.user','user').
    where('properties.id = :id_property', { id_property: propertyID }).
    select(['properties','schedules', 'user.id']).
    getOne()
    

    const responseValidate = await scheduleArrayResponseSchema.validate(schedules,{
        stripUnknown: true
    })

    return responseValidate
}

export default listShedulesService;