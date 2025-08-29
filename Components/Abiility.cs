using EchoesOfTheVeil.Definitions;

namespace EchoesOfTheVeil.Components;

public struct Ability {
  public int Damage;
  public int Healing;
  public int ManaCost;
  public int Cooldown;
  public float CriticalDamageMultiplier;
  public bool CanMiss;
  public PrefabID[] OnSuccessEffects;
  public PrefabID[] OnCriticalSuccessEffects;
  public PrefabID[] OnFailureEffects;
  public PrefabID[] OnCriticalFailEffects;
  public Requirements Requirements;
  public Luck Luck;
  public int Difficulty;
}