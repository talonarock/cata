import { EligibleWeaponType, IconSize, PlayerClass } from '../player_class';
import { PlayerSpec } from '../player_spec';
import { BloodDeathKnight, FrostDeathKnight, UnholyDeathKnight } from '../player_specs/death_knight';
import { ArmorType, Class, Race, RangedWeaponType, WeaponType } from '../proto/common';
import { DeathKnightSpecs } from '../proto_utils/utils';

export class DeathKnight extends PlayerClass<Class.ClassDeathKnight> {
	static protoID = Class.ClassDeathKnight as Class.ClassDeathKnight;
	static friendlyName = 'Death Knight';
	static hexColor = '#c41e3a';
	static specs: Record<string, PlayerSpec<DeathKnightSpecs>> = {
		[BloodDeathKnight.name]: BloodDeathKnight,
		[FrostDeathKnight.name]: FrostDeathKnight,
		[UnholyDeathKnight.name]: UnholyDeathKnight,
	};
	static races: Race[] = [
		Race.RaceBloodElf,
		Race.RaceDraenei,
		Race.RaceDwarf,
		Race.RaceHuman,
		Race.RaceGnome,
		Race.RaceGoblin,
		Race.RaceNightElf,
		Race.RaceOrc,
		Race.RaceTauren,
		Race.RaceTroll,
		Race.RaceUndead,
		Race.RaceWorgen,
	];
	static armorTypes: ArmorType[] = [ArmorType.ArmorTypePlate, ArmorType.ArmorTypeMail, ArmorType.ArmorTypeLeather, ArmorType.ArmorTypeCloth];
	static weaponTypes: EligibleWeaponType[] = [
		{ weaponType: WeaponType.WeaponTypeAxe, canUseTwoHand: true },
		{ weaponType: WeaponType.WeaponTypeMace, canUseTwoHand: true },
		{ weaponType: WeaponType.WeaponTypePolearm, canUseTwoHand: true },
		{ weaponType: WeaponType.WeaponTypeSword, canUseTwoHand: true },
		// TODO: validate proficiencies
	];
	static rangedWeaponTypes: RangedWeaponType[] = [RangedWeaponType.RangedWeaponTypeSigil];

	readonly protoID = DeathKnight.protoID;
	readonly friendlyName = DeathKnight.name;
	readonly hexColor = DeathKnight.hexColor;
	readonly specs = DeathKnight.specs;
	readonly races = DeathKnight.races;
	readonly armorTypes = DeathKnight.armorTypes;
	readonly weaponTypes = DeathKnight.weaponTypes;
	readonly rangedWeaponTypes = DeathKnight.rangedWeaponTypes;

	static getIcon = (size: IconSize): string => {
		return `https://wow.zamimg.com/images/wow/icons/${size}/class_deathknight.jpg`;
	};

	getIcon = (size: IconSize): string => {
		return DeathKnight.getIcon(size);
	};
}
