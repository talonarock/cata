import { EligibleWeaponType, IconSize, PlayerClass } from '../player_class';
import { PlayerSpec } from '../player_spec';
import { PlayerSpecs } from '../player_specs';
import { ArmorType, Class, Race, RangedWeaponType, WeaponType } from '../proto/common';
import { DruidSpecs } from '../proto_utils/utils';

export class Druid extends PlayerClass<Class.ClassDruid> {
	static classID = Class.ClassDruid as Class.ClassDruid;
	static friendlyName = 'Druid';
	static hexColor = '#ff7d0a';
	static specs: Record<string, PlayerSpec<DruidSpecs>> = {
		[PlayerSpecs.BalanceDruid.friendlyName]: PlayerSpecs.BalanceDruid,
		[PlayerSpecs.FeralDruid.friendlyName]: PlayerSpecs.FeralDruid,
		[PlayerSpecs.RestorationDruid.friendlyName]: PlayerSpecs.RestorationDruid,
	};
	
	static races: Race[] = [
		// [A]
		Race.RaceNightElf,
		Race.RaceWorgen,
		// [H]
		Race.RaceTauren,
		Race.RaceTroll,
	];
	static armorTypes: ArmorType[] = [ArmorType.ArmorTypeLeather, ArmorType.ArmorTypeCloth];
	static weaponTypes: EligibleWeaponType[] = [
		{ weaponType: WeaponType.WeaponTypeDagger },
		{ weaponType: WeaponType.WeaponTypeFist },
		{ weaponType: WeaponType.WeaponTypeMace, canUseTwoHand: true },
		{ weaponType: WeaponType.WeaponTypeOffHand },
		{ weaponType: WeaponType.WeaponTypeStaff, canUseTwoHand: true },
		{ weaponType: WeaponType.WeaponTypePolearm, canUseTwoHand: true },
	];
	static rangedWeaponTypes: RangedWeaponType[] = [RangedWeaponType.RangedWeaponTypeRelic];

	readonly classID = Druid.classID;
	readonly friendlyName = Druid.name;
	readonly hexColor = Druid.hexColor;
	readonly specs = Druid.specs;
	readonly races = Druid.races;
	readonly armorTypes = Druid.armorTypes;
	readonly weaponTypes = Druid.weaponTypes;
	readonly rangedWeaponTypes = Druid.rangedWeaponTypes;

	static getIcon = (size: IconSize): string => {
		return `https://wow.zamimg.com/images/wow/icons/${size}/class_druid.jpg`;
	};

	getIcon = (size: IconSize): string => {
		return Druid.getIcon(size);
	};
}
