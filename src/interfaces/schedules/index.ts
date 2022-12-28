export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}

export interface ISchedulesResponse{
    user: object
    hour: string
    date: string
    id: string
}

export interface ISchedulePropertiesResponse{
    schedules: Array<ISchedulesResponse>
    
}