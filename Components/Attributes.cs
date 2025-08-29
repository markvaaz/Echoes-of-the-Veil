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

  public static Attributes operator *(Attributes a, Attributes b) => new() {
    HealthBonus = a.HealthBonus * b.HealthBonus,
    ManaBonus = a.ManaBonus * b.ManaBonus,
    InventorySlotBonus = a.InventorySlotBonus * b.InventorySlotBonus,
    Strength = a.Strength * b.Strength,
    Dexterity = a.Dexterity * b.Dexterity,
    Perception = a.Perception * b.Perception,
    Intelligence = a.Intelligence * b.Intelligence,
    Wisdom = a.Wisdom * b.Wisdom,
    Charisma = a.Charisma * b.Charisma,
    Constitution = a.Constitution * b.Constitution,
    Luck = a.Luck * b.Luck
  };

  public static Attributes operator /(Attributes a, Attributes b) => new() {
    HealthBonus = b.HealthBonus == 0 ? 0 : a.HealthBonus / b.HealthBonus,
    ManaBonus = b.ManaBonus == 0 ? 0 : a.ManaBonus / b.ManaBonus,
    InventorySlotBonus = b.InventorySlotBonus == 0 ? 0 : a.InventorySlotBonus / b.InventorySlotBonus,
    Strength = b.Strength == 0 ? 0 : a.Strength / b.Strength,
    Dexterity = b.Dexterity == 0 ? 0 : a.Dexterity / b.Dexterity,
    Perception = b.Perception == 0 ? 0 : a.Perception / b.Perception,
    Intelligence = b.Intelligence == 0 ? 0 : a.Intelligence / b.Intelligence,
    Wisdom = b.Wisdom == 0 ? 0 : a.Wisdom / b.Wisdom,
    Charisma = b.Charisma == 0 ? 0 : a.Charisma / b.Charisma,
    Constitution = b.Constitution == 0 ? 0 : a.Constitution / b.Constitution,
    Luck = b.Luck == 0 ? 0 : a.Luck / b.Luck
  };
}
