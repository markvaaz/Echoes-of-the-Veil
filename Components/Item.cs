using EchoesOfTheVeil.Definitions;

namespace EchoesOfTheVeil.Components;

public struct Item {
  public bool Binded;
  public bool Equipable;
  public bool Stackable;
  public Attributes Attributes;
  public Requirements Requirements;
  public float Weight;
}

public struct RequiredItemAmount {
  public PrefabID PrefabID;
  public int Amount;
  public bool Consume;
}