export class AdoptableCat{
	finnId: string;
	name: string;
	hasDistemperShots: boolean;
	hasRabiesVax: boolean;
	snapTested: boolean;
	isFixed: boolean;
	isAvailable: boolean;
	birthDate: Date;
	intakeDate: Date;
	adoptDate: Date;
	deathDate: Date;
	coatDescription: string;
	genDescription: string;
	adoptedName: string;
	adoptionFee: number;
	sex: string;
	healthConditionStatus: string;
	pictures: CatPicture[];
}

export class CatPicture{
	image: File;
	caption: string;
	url: string;
}