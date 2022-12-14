import * as businessRepository from "../Repositories/businessRepository.js";

export async function getBusinessData(businessId: number){
    const businessData = await businessRepository.findById(businessId);

    if(!businessData){
        throw {
            type: "notFound",
            message: "Business not found"
        }
    }

    return businessData
}