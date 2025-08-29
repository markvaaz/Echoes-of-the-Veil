using EchoesOfTheVeil.Components;
using EchoesOfTheVeil.Objects;

namespace EchoesOfTheVeil.Definitions;

public struct Requirements {
  public int? MinimumLevel;
  public int? MaximumLevel;
  public string? TimeOfDay;
  public string? Weather;
  public int? MinimumDays;
  public int? MaximumDays;
  public Attributes? MinimumAttributes;
  public Attributes? MaximumAttributes;
  public RequiredAlignment? Alignment;
  public RequiredItemAmount[]? Items;
  public RequiredItemAmount[]? AnyItems;
  public NPCReputation[]? NPCReputations;
  public PrefabID[]? Equipped;
  public PrefabID[]? ForbiddenEquipped;
  public PrefabID[]? AnyClasses;
  public PrefabID[]? Abilities;
  public PrefabID[]? Effects;
  public PrefabID[]? Quests;
  public PrefabID[]? Knowledge;
  public PrefabID[]? ForbiddenClasses;
  public PrefabID[]? ForbiddenEffects;
  public PrefabID[]? ForbiddenQuests;
  public PrefabID[]? ForbiddenAbilities;
  public PrefabID[]? ForbiddenItems;
  public PrefabID[]? ForbiddenEquippedItems;
}