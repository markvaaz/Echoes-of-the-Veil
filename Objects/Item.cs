using EchoesOfTheVeil.Components;
using EchoesOfTheVeil.Definitions;

namespace EchoesOfTheVeil.Objects;

public class Item {
  public int Amount;
  public bool Binded;
  public bool Equipable;
  public bool Stackable;
  public Attributes Attributes;
  public Requirements Requirements;
}

public struct RequiredItemAmount {
  public PrefabID PrefabID;
  public int Amount;
  public bool Consume;
}