export interface EquipmentType {
  id: number,
  model: string,
  equipment_type: string,
  location_id: number
}

export interface LocationType {
  id: number,
  room_name: string,
  building_type: string,
  equipment: EquipmentType[]
}
