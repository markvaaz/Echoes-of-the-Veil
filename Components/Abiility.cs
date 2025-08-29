using EchoesOfTheVeil.Definitions;

namespace EchoesOfTheVeil.Components;

public struct Ability {
  public int Damage;
  public int Healing;
  public int ManaCost;
  public int Cooldown;
  public float CriticalDamageMultiplier;
  public bool CanMiss;
  public Effect[] OnSuccessEffects;
  public Effect[] OnCriticalSuccessEffects;
  public Effect[] OnFailureEffects;
  public Effect[] OnCriticalFailEffects;
  public Requirements Requirements;
  public LuckRequirement LuckRequirement;
}