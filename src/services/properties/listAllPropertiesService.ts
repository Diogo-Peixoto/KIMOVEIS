import AppDataSource from "../../data-source"
import Property from "../../entities/properties.entitys"

const listAllPropertiesService = async(): Promise<Array<Property>> =>{
    const propertyRepository = AppDataSource.getRepository(Property)

    const properties = propertyRepository.find({ relations: {
        address: true
    }})

    return properties

}

export default listAllPropertiesService