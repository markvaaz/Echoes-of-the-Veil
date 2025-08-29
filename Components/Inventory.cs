using System.Linq;

namespace EchoesOfTheVeil.Components;

public struct Inventory {
  public int Capacity;
  public float WeightLimit;
  public List<Item> Items;
  public readonly float CurrentWeight => Items.Sum(item => item.Weight);
  public readonly int CurrentItemCount => Items.Count;
  public readonly int RemainingCapacity => Capacity - CurrentItemCount;
}