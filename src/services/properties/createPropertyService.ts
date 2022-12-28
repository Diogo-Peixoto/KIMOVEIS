import AppDataSource from "../../data-source";
import Addresse from "../../entities/addresses.entityes";
import Category from "../../entities/categories.entities";
import Property from "../../entities/properties.entitys";
import { AppError } from "../../errors";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async(propertyData:IPropertyRequest): Promise<Property>  =>{
    const propertyRepository = AppDataSource.getRepository(Property)
    const addresRepository = AppDataSource.getRepository(Addresse)
    const categoryRepository = AppDataSource.getRepository(Category)
    
    const category = await categoryRepository.findOneBy({id: propertyData.categoryId})

    if(!category){
        throw new AppError("Category not exist",404)
    }

    const addresExist = await addresRepository.findOneBy(propertyData.address)

    if(addresExist){
        throw new AppError("Address  exist",409)
    }

    const newAddres = addresRepository.create(propertyData.address)
    await addresRepository.save(newAddres)


    const newProperty = propertyRepository.create({...propertyData, address: newAddres, category: category }, )
    await propertyRepository.save(newProperty)

    return newProperty



}

export default createPropertyService;