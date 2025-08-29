using EchoesOfTheVeil.Components;

namespace EchoesOfTheVeil.Objects;

public class Character {
  public required string Name { get; set; }
  public Race Race { get; set; }
  public Class Class { get; set; }
  public Alignment Alignment { get; set; }
  public Title Title { get; set; }
  public Attributes BaseAttributes { get; set; }
  public Gear Gear { get; set; }
  public Inventory Inventory { get; set; }
  public List<Effect> ActiveEffects { get; set; } = [];
}