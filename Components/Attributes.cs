namespace EchoesOfTheVeil.Components;

public struct Attributes {
  public int HealthBonus;
  public int ManaBonus;
  public int InventorySlotBonus;
  public int Strength;
  public int Dexterity;
  public int Perception;
  public int Intelligence;
  public int Wisdom;
  public int Charisma;
  public int Constitution;
  public int Luck;

  public static Attributes operator +(Attributes a, Attributes b) => new() {
    HealthBonus = a.HealthBonus + b.HealthBonus,
    ManaBonus = a.ManaBonus + b.ManaBonus,
    InventorySlotBonus = a.InventorySlotBonus + b.InventorySlotBonus,
    Strength = a.Strength + b.Strength,
    Dexterity = a.Dexterity + b.Dexterity,
    Perception = a.Perception + b.Perception,
    Intelligence = a.Intelligence + b.Intelligence,
    Wisdom = a.Wisdom + b.Wisdom,
    Charisma = a.Charisma + b.Charisma,
    Constitution = a.Constitution + b.Constitution,
    Luck = a.Luck + b.Luck
  };

  public static Attributes operator -(Attributes a, Attributes b) => new() {
    HealthBonus = a.HealthBonus - b.HealthBonus,
    ManaBonus = a.ManaBonus - b.ManaBonus,
    InventorySlotBonus = a.InventorySlotBonus - b.InventorySlotBonus,
    Strength = a.Strength - b.Strength,
    Dexterity = a.Dexterity - b.Dexterity,
    Perception = a.Perception - b.Perception,
    Intelligence = a.Intelligence - b.Intelligence,
    Wisdom = a.Wisdom - b.Wisdom,
    Charisma = a.Charisma - b.Charisma,
    Constitution = a.Constitution - b.Constitution,
    Luck = a.Luck - b.Luck
  };
}
