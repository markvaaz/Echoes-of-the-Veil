using EchoesOfTheVeil.Objects;

namespace EchoesOfTheVeil.Components;

public struct Gear {
  public Item? Head;
  public Item? Chest;
  public Item? Legs;
  public Item? Feet;
  public Item? Hands;
  public Item? MainHand;
  public Item? OffHand;
  public Item? Neck;
  public Item? Ring1;
  public Item? Ring2;

  public readonly Attributes GetAttributes() {
    Attributes attributes = new();
    if (Head is not null) attributes += Head.Attributes;
    if (Chest is not null) attributes += Chest.Attributes;
    if (Legs is not null) attributes += Legs.Attributes;
    if (Feet is not null) attributes += Feet.Attributes;
    if (Hands is not null) attributes += Hands.Attributes;
    if (MainHand is not null) attributes += MainHand.Attributes;
    if (OffHand is not null) attributes += OffHand.Attributes;
    if (Neck is not null) attributes += Neck.Attributes;
    if (Ring1 is not null) attributes += Ring1.Attributes;
    if (Ring2 is not null) attributes += Ring2.Attributes;
    return attributes;
  }
}
