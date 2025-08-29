using EchoesOfTheVeil.Definitions;

namespace EchoesOfTheVeil.Components;

public struct Effect {
  public int AddedAt;
  public int Duration;
  public Attributes Attributes;
  public bool IsStackable;
  public bool Resistable;
  public bool Permanent;
  public EffectTarget Target;
  public Requirements Requirements;

  public Effect() {
    AddedAt = 0; // TODO after time system
  }
}

public enum EffectTarget {
  Self,
  Target,
  Both
}