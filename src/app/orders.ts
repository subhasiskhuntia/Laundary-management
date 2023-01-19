export class Orders {
    constructor(
        public id:number,
        public topWearQuantity:number,
        public bottomWearQuantity:number,
        public woolenClothQuantity:number,
        public othersQuantity:number,
        public contactPerson:string,
        public description:string,
        public pickUpDate:Date,
        public orderStatus:number
    ){}
}
