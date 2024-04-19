package druid

import (
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/core/proto"
)

func (druid *Druid) registerTigersFurySpell() {
	actionID := core.ActionID{SpellID: 5217}
	energyMetrics := druid.NewEnergyMetrics(actionID)
	instantEnergy := 20.0 * float64(druid.Talents.KingOfTheJungle)

	dmgBonus := 80.0
	cdReduction := core.TernaryDuration(druid.HasPrimeGlyph(proto.DruidPrimeGlyph_GlyphOfTigersFury), time.Second*3, 0)

	druid.TigersFuryAura = druid.RegisterAura(core.Aura{
		Label:    "Tiger's Fury Aura",
		ActionID: actionID,
		Duration: 6 * time.Second,
		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			druid.PseudoStats.BonusDamage += dmgBonus

			if druid.PrimalMadnessAura != nil {
				druid.PrimalMadnessAura.Activate(sim)
			}
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
			druid.PseudoStats.BonusDamage -= dmgBonus

			if druid.PrimalMadnessAura.IsActive() && !druid.BerserkAura.IsActive() {
				druid.PrimalMadnessAura.Deactivate(sim)
			}
		},
	})

	spell := druid.RegisterSpell(Cat, core.SpellConfig{
		ActionID: actionID,
		Flags:    core.SpellFlagAPL,
		Cast: core.CastConfig{
			CD: core.Cooldown{
				Timer:    druid.NewTimer(),
				Duration: time.Second*30 - cdReduction,
			},
		},
		ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
			return !druid.BerserkAura.IsActive()
		},

		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
			druid.AddEnergy(sim, instantEnergy, energyMetrics)

			druid.TigersFuryAura.Activate(sim)
		},
	})

	druid.TigersFury = spell
}
